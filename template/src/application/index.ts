import Vue from "vue";
import _ from "lodash";
import Vuex from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
import iView from "view-design";
import VueRouter from "vue-router";
import Component from "vue-class-component";

import "@/mock";
import "@/assets/styles/index.scss";
import EventBus from "@/mixins/event-bus";
import { directives } from "@/directives";

import Header from "@/components/header";

export default class Application {
    public static instance: any;

    public start(routes: Array<any>, modules: any) {

        Application.initConfig();
        Application.initMixin();
        Application.initComponent();
        Application.initDirective();
        Application.initAxios();

        const store = Application.initVuex(modules);
        const router = Application.initRouter(routes);

        Application.instance = new Vue({
            el: "#app",
            store,
            router,
            template: "<div id='app'><router-view/></div>"
        });
    }

    // 初始化vue配置项
    private static initConfig() {
        Vue.config.productionTip = false;
        // 事件总线
        Vue.prototype.$bus = new Vue();
        // lodash工具库
        Vue.prototype._ = _;
    }

    // 初始化全局混入
    private static initMixin() {
        Vue.mixin(EventBus);
    }

    // 初始化全局组件
    private static initComponent() {
        Vue.use(iView);
        Vue.component("g-header", Header);
    }

    // 初始化全局自定义指令
    private static initDirective() {
        Vue.use(directives);
    }

    // 初始化Axios拦截器
    private static initAxios() {
        // 请求拦截
        axios.interceptors.request.use(
            config => {
                let token = Cookies.get("access_token");
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            e => {
                console.error(e);
                return Promise.reject(e);
            }
        );

        // 响应拦截
        axios.interceptors.response.use(
            res => {
                return res;
            },
            e => {
                console.error(e.response);
                return Promise.reject(e);
            }
        );
    }

    // 初始化vue-router
    private static initRouter(routes: Array<any>) {
        Component.registerHooks([
            "beforeRouteEnter",
            "beforeRouteLeave",
            "beforeRouteUpdate"
        ]);

        Vue.use(VueRouter);
        const router = new VueRouter({routes});
        router.beforeEach((to, from, next) => {
            window.document.title = to.meta.title || "";
            next();
        });
        return router;
    }

    // 初始化vuex
    private static initVuex(modules: any) {
        Vue.use(Vuex);
        return new Vuex.Store({modules});
    }
}
