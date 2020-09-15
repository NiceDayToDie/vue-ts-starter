import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

import "./index.scss";

const nums = namespace("nums");

@Component({
    name: "component-c",
    template: require("./index.html")
})
export default class ComponentC extends Vue {
    public title: string = "我是组件C";
    public std: number = 0;

    @nums.Action("setStd")
    public setStd!: Function;

    @nums.Getter("bigger")
    public bigger!: Array<number>;

    @nums.Getter("smaller")
    public smaller!: Array<number>;

    public get biggerList() {
        return this.bigger.join(", ");
    }

    public get smallerList() {
        return this.smaller.join(", ");
    }
}
