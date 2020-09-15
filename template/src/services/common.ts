import ServiceBase from "./base";
import serviceHandler from "@/decorators/service-handler";
import { Paging } from "@/models/paging";

export default class CommonService extends ServiceBase {
    public static readonly instance: CommonService = new CommonService();

    @serviceHandler("query", {title: "不显示加载中遮罩层", showLoading: false})
    public async normalQuery() {
        return this._get<any>(`${this.mainServer}/query`);
    }

    @serviceHandler("query", {title: "请求失败", showTip: true})
    public async failedQuery() {
        return this._get<any>(`${this.mainServer}/query-fail`);
    }

    @serviceHandler("save", {title: "更新成功", showTip: true})
    public async update(data: any) {
        return this._post<any>(`${this.mainServer}/update`, data);
    }

    @serviceHandler("query", {title: "接口报错", showErrorMsg: true})
    public async error() {
        return this._get<any>(`${this.adminServer}/error`);
    }

    @serviceHandler("query", {title: "获取表格数据"})
    public async getTableData(paging: Paging) {
        return this._post<any>(`${this.mainServer}/getTableData`, paging);
    }
}
