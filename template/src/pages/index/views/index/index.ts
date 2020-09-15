import { Component, Vue } from "vue-property-decorator";

import "./index.scss";

@Component({
    name: "index",
    template: require("./index.html")
})
export default class Index extends Vue {
    public title: string = "基本模块页面";
}
