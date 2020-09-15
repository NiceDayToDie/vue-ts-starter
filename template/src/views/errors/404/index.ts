import { Component, Vue } from "vue-property-decorator";

import "./index.scss";

@Component({
    name: "error-404",
    template: require("./index.html")
})
export default class Error404 extends Vue {

    // 返回主页
    public onHomeCLick() {
        this.$router.push("/");
    }

    // 返回上一页
    protected onBackClick() {
        this.$router.go(-1);
    }
}
