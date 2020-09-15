import { MutationTree } from "vuex";
import State from "./state";

const mutations: MutationTree<State> = {
    SET_STD: (state: State, std: number) => state.standard = std,
    ADD_ITEM: (state: State, num: number) => state.list.push(num)
};

export default mutations;
