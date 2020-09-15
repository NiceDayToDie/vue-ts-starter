import { commonRouter } from "@/router/common";

const appRouter = {
    name: "basic",
    path: "/",
    redirect: "/page1",
    component: () => import("@/views/wrapper/index"),
    children: [
        {
            name: "page1",
            path: "page1",
            meta: { title: "基本模块" },
            component: () => import("@/pages/basic/views/page1")
        }
    ]
};

export const routes: Array<any> = [
    appRouter,
    ...commonRouter
];
