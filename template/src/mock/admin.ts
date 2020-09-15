import Mock from "mockjs";
import { commonSetting } from "@/settings";

const prefix: string = `http://localhost${commonSetting.adminServer}`;

Mock.mock(`${prefix}/error`, "get", (options: any) => {
    return {
        hasError: true,
        result: null,
        message: "这是接口返回的报错信息"
    };
});
