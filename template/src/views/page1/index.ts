import { Component, Vue } from "vue-property-decorator";

import "./index.scss";
import Buttons from "@/mixins/buttons";

@Component({
    name: "page1",
    template: require("./index.html"),
    mixins: [Buttons]
})
export default class Page1 extends Vue {
    public title: string = "页面1";
}
