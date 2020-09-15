import { GetterTree } from "vuex";
import State from "./state";

const getters: GetterTree<State, any> = {
    count: (state: State) => state.count
};

export default getters;
