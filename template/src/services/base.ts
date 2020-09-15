import axios from "axios";
import { commonSetting } from "@/settings";

export default abstract class ServiceBase {
    protected mainServer = commonSetting.mainServer;
    protected adminServer = commonSetting.adminServer;

    protected url(url: string): string {
        return `${commonSetting.mock ? "http://localhost" : commonSetting.baseUrl}${url}`;
    }

    protected _get<T>(url: string): Promise<T> {
        return axios.get(this.url(url)).then(res => res.data);
    }

    protected _post<T>(url: string, data?: any, config?: any): Promise<T> {
        return axios.post(this.url(url), data, config).then(res => res.data);
    }

    protected _put<T>(url: string, data?: any, config?: any): Promise<T> {
        return axios.put(this.url(url), data, config).then(res => res.data);
    }

    protected _delete<T>(url: string): Promise<T> {
        return axios.delete(this.url(url)).then(res => res.data);
    }

    protected _export(url: string, data: any, type: string = "application/vnd.ms-excel"): Promise<any> {
        return axios
            .post(this.url(url), data, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "*"
                },
                responseType: "arraybuffer"
            })
            .then((res: any) => {
                let blob = new Blob([res.data], {
                    type: type
                });
                window.location.href = URL.createObjectURL(blob);
            });
    }
}
