import { MutationTree } from "vuex";
import State from "./state";

const mutations: MutationTree<State> = {
    ADD_COUNT: (state: State) => state.count++,
    REDUCE_COUNT: (state: State) => state.count--,
    SET_COUNT: (state: State, count: number) => state.count = count
};

export default mutations;
