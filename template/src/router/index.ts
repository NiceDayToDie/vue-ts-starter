import { commonRouter } from "@/router/common";

const appRouter = {
    name: "index",
    path: "/",
    redirect: "/single",
    component: () => import("@/views/wrapper/index"),
    children: [
        {
            name: "single",
            path: "single",
            meta: { title: "单页页面" },
            component: () => import("@/views/single/index")
        },
        {
            name: "page1",
            path: "page1",
            meta: { title: "页面1" },
            component: () => import("@/views/page1/index")
        },
        {
            name: "page2",
            path: "page2",
            meta: { title: "页面2" },
            component: () => import("@/views/page2/index")
        }
    ]
};

export const routes: Array<any> = [
    appRouter,
    ...commonRouter
];
