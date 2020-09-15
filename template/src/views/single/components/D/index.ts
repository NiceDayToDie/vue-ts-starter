import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

import "./index.scss";

const nums = namespace("nums");

@Component({
    name: "component-d",
    template: require("./index.html")
})
export default class ComponentD extends Vue {
    public title: string = "我是组件D";
    public item: number = 0;

    @nums.State("standard")
    public standard!: number;

    @nums.Action("addItem")
    public addItem!: Function;
}
