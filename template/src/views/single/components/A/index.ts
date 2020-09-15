import { Component, Vue } from "vue-property-decorator";

import "./index.scss";

@Component({
    name: "component-a",
    template: require("./index.html")
})
export default class ComponentA extends Vue {
    public title: string = "我是组件A";

    public onReceive(msg: string, data: any) {
        this.title = msg;
        this.$Message.info(JSON.stringify(data));
    }
}
