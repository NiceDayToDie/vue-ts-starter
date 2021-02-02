import Vue from "vue";
import _ from "lodash";
import Vuex, { Store } from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
import iView from "view-design";
import VueRouter from "vue-router";
import Component from "vue-class-component";
import { commonSetting } from "@/settings";

import "@/assets/styles/index.scss";
import EventBus from "@/mixins/event-bus";
import { directives } from "@/directives";
import { moneyFormat } from "@/utils/format";

import Header from "@/components/header";

export default class Application {
    public store!: Store<any>;
    public router!: VueRouter;

    public static instance: any;

    public async start(routes: Array<any>, modules: any) {
        if (commonSetting.mock) await import("@/mock");

        this.store = this.initVuex(modules);
        this.router = this.initRouter(routes);

        this.initConfig();
        this.initFilter();
        this.initMixin();
        this.initComponent();
        this.initDirective();
        this.initAxios();

        Application.instance = new Vue({
            el: "#app",
            store: this.store,
            router: this.router,
            template: "<div id='app'><router-view/></div>"
        });
    }

    // 初始化vue配置项
    public initConfig() {
        Vue.config.productionTip = false;
        // 事件总线
        Vue.prototype.$bus = new Vue();
        // lodash工具库
        Vue.prototype._ = _;
    }

    // 初始化全局过滤器
    public initFilter() {
        Vue.filter("moneyFormat", moneyFormat);
    }

    // 初始化全局混入
    public initMixin() {
        Vue.mixin(EventBus);
    }

    // 初始化全局组件
    public initComponent() {
        Vue.use(iView);
        Vue.component("g-header", Header);
    }

    // 初始化全局自定义指令
    public initDirective() {
        Vue.use(directives);
    }

    // 初始化Axios拦截器
    public initAxios() {
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
                if (e.response.status === 401) {
                    Cookies.remove("access_token");
                    Vue.prototype.$Message.error("用户鉴权失败，请重新登录");
                    this.router.push("/");
                }
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
    public initRouter(routes: Array<any>) {
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
    public initVuex(modules: any) {
        Vue.use(Vuex);
        return new Vuex.Store({modules});
    }
}
