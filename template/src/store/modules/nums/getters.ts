import { GetterTree } from "vuex";
import State from "./state";

const getters: GetterTree<State, any> = {
    bigger: (state: State) => state.list.filter(num => num >= state.standard),
    smaller: (state: State) => state.list.filter(num => num < state.standard)
};

export default getters;
