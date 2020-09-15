import { Component, Vue } from "vue-property-decorator";
import { cachePageList } from "@/settings";

import "./index.scss";

@Component({
    name: "wrapper",
    template: require("./index.html")
})
export default class Wrapper extends Vue {
    public cachePageList: Array<any> = cachePageList;
}
