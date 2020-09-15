import { Component, Vue } from "vue-property-decorator";

import "./index.scss";

@Component({
    name: "component-b",
    template: require("./index.html")
})
export default class ComponentB extends Vue {
    public title: string = "我是组件B";

    public onClick() {
        this.$bus.$emit("component-a", "onReceive", "我是组件B传递过来的消息", {id: "110", name: "Jack"});
    }
}
