import { Component, Vue } from "vue-property-decorator";

import "./index.scss";
import Buttons from "@/mixins/buttons";

@Component({
    name: "page2",
    template: require("./index.html"),
    mixins: [Buttons]
})
export default class Page2 extends Vue {
    public title: string = "页面2";
}
