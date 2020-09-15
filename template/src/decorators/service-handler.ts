import Vue from "vue";
import { Store } from "vuex";
import Application from "@/application";

/**
 * 请求方法注解
 * @param serviceType 类型
 * @param option {
 *     title 描述
 *     showTip 显示请求结果提示
 *     showErrorMsg 显示接口返回的报错信息
 *     showLoading 显示加载中遮罩层
 * }
 */
export default function serviceHandler(
    serviceType: string,
    option?: {title?: string; showTip?: boolean; showErrorMsg?: boolean; showLoading?: boolean}
) {
    let {title = "", showTip = false, showErrorMsg = false, showLoading = true} = option as any;
    return (target: any, propertyName: any, descriptor: any) => {
        let method = target[propertyName];
        let service = target.constructor.instance;
        descriptor.value = async (...arg: Array<any>) => {
            try {
                if (showLoading) ResponseHandler.store.dispatch("spin/addCount");
                let result = await method.call(service, ...arg);
                let msg: string;
                if (result.hasError) {
                    msg = title ? `${title}出错!` : "请求服务失败";
                    msg = showErrorMsg ? result.message : msg;
                    (showTip || showErrorMsg) && ResponseHandler.message.error(msg);
                    console.error(msg);
                    return null;
                }
                if (serviceType !== "query") {
                    msg = title ? `${title}成功!` : "请求服务成功";
                    showTip && ResponseHandler.message.success(msg);
                } else {
                    if (!result) {
                        msg = `${title}无结果!`;
                        showTip && ResponseHandler.message.warning(msg);
                        console.warn(msg);
                    }
                }
                return result;
            } catch (error) {
                let msg = title ? `${title}出错!` : "请求服务失败";
                msg = showErrorMsg ? error.response?.data?.message || msg : msg;
                (showTip || showErrorMsg) && ResponseHandler.message.error(msg);
                console.error(msg, error);
                return null;
            } finally {
                if (showLoading) ResponseHandler.store.dispatch("spin/reduceCount");
            }
        };
    };
}

class ResponseHandler {
    public static get message(): any {
        return Vue.prototype.$Message;
    }

    public static get store(): Store<any> {
        return Application.instance.$store;
    }
}
