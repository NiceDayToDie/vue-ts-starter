import { Component, Vue } from "vue-property-decorator";

import "./index.scss";

@Component({
    name: "page1",
    template: require("./index.html")
})
export default class Page1 extends Vue {
    public title: string = "基本模块页面";
}
