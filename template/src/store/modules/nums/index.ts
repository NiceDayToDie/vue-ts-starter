import { Module } from "vuex";
import State from "./state";
import Getters from "./getters";
import Actions from "./actions";
import Mutations from "./mutations";

export default class Nums implements Module<State, any> {
    public namespaced: boolean;
    public state: State;
    public mutations = Mutations;
    public getters = Getters;
    public actions = Actions;
    
    public constructor() {
        this.namespaced = true;
        this.state = new State();
    }
}
