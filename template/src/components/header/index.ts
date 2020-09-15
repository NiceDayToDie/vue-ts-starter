import { Component, Vue } from "vue-property-decorator";

import "./index.scss";
import TimeUtil from "@/utils/time";

@Component({
    name: "index",
    template: require("./index.html")
})
export default class Header extends Vue {
    public get time() {
        return TimeUtil.parseTime(new Date().getTime());
    }
}
