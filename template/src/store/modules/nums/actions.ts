import Vue from "vue/";
import State from "./state";
import { ActionTree, ActionContext } from "vuex";

const actions: ActionTree<State, any> = {
    setStd: (store: ActionContext<State, any>, std: number) => {
        store.commit("SET_STD", std);
    },
    addItem: (store: ActionContext<State, any>, num: number) => {
        store.commit("ADD_ITEM", num);
    }
};

export default actions;
