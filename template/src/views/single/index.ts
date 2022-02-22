import { Component, Vue } from "vue-property-decorator";

import "./index.scss";
import CommonService from "@/services/common";
import ComponentA from "@/views/single/components/A";
import ComponentB from "@/views/single/components/B";
import ComponentC from "@/views/single/components/C";
import ComponentD from "@/views/single/components/D";
import { Paging } from "@/models/paging";
import { focus } from "@/directives/focus";

@Component({
    name: "single",
    template: require("./index.html"),
    components: {
        "u-component-a": ComponentA,
        "u-component-b": ComponentB,
        "u-component-c": ComponentC,
        "u-component-d": ComponentD
    },
    directives: {
        focus: focus
    }
})
export default class Single extends Vue {
    public title: string = "单页页面";

    // 表头
    public columns: Array<any> = [
        {
            title: "姓名",
            key: "name",
            align: "center"
        },
        {
            title: "语文",
            key: "chinese",
            align: "center"
        },
        {
            title: "数学",
            key: "math",
            align: "center"
        },
        {
            title: "英语",
            key: "english",
            align: "center"
        }
    ];

    // 表内容
    public data: Array<any> = [];

    // 分页
    public paging: Paging = {
        pageIndex: 1,
        pageSize: 10,
        totalCount: 0
    };

    public beforeRouteEnter(to: any, from: any, next: any) {
        to.meta.needRefresh = from.name === "page1";
        next();
    }

    public activated() {
        if (this.$route.meta?.needRefresh) {
            this.refresh();
            this.$route.meta.needRefresh = false;
        }
    }

    public mounted() {
        this.getTableData();
    }

    public toPage(type: string) {
        this.title = "已点击其他页面按钮，此页面为缓存";
        this.$router.push(`/page${type}`);
    }

    public refresh() {
        this.title = "特定页面返回，重新获取页面数据";
    }

    public async onNormalQueryClick() {
        const res = await CommonService.instance.normalQuery();
        if (res && !res.hasError) this.$Message.info(JSON.stringify(res));
    }

    public async onFailedQueryClick() {
        await CommonService.instance.failedQuery();
    }

    public async onUpdateClick() {
        await CommonService.instance.update({name: "Black Jack"});
    }

    public async onErrorClick() {
        await CommonService.instance.error();
    }

    public onParallelClick() {
        this.onErrorClick();
        this.onUpdateClick();
        this.onFailedQueryClick();
        this.onNormalQueryClick();
    }

    public onPageSizeChange(size: number) {
        this.paging.pageIndex = 1;
        this.paging.pageSize = size;
        this.getTableData();
    }

    public async getTableData() {
        let res = await CommonService.instance.getTableData(this.paging);
        if (res) {
            this.data = res.result;
            this.paging.totalCount = res.totalCount;
        }
    }
}
