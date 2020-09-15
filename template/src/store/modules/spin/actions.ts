import Vue from "vue/";
import State from "./state";
import { ActionTree, ActionContext } from "vuex";

const actions: ActionTree<State, any> = {
    addCount: (store: ActionContext<State, any>) => {
        store.commit("ADD_COUNT");
        Vue.prototype.$Spin.show();
    },

    reduceCount: (store: ActionContext<State, any>) => {
        store.commit("REDUCE_COUNT");
        if (store.state.count <= 0) {
            store.commit("SET_COUNT", 0);
            Vue.prototype.$Spin.hide();
        }
    }
};

export default actions;
