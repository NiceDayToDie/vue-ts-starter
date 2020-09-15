export const global = <any>window;
let debug = process.env.NODE_ENV === "development";

// 公共配置
export let commonSetting = {
    ...{
        // 后端地址
        mock: true,
        baseUrl: debug ? "http://dev-server.example:port" : "http://product-server.example:port",
        mainServer: "/main-server",
        adminServer: "/admin-server"
    },
    ...global.commonSetting
};

// keep-alive缓存页面列表
export const cachePageList = [
    "single" // 单页页面
];
