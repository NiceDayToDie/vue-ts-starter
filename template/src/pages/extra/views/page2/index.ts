import { Component, Vue } from "vue-property-decorator";

import "./index.scss";

@Component({
    name: "page2",
    template: require("./index.html")
})
export default class Page2 extends Vue {
    public title: string = "额外模块页面";
}
