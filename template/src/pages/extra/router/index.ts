import { commonRouter } from "@/router/common";

const appRouter = {
    name: "extra",
    path: "/",
    redirect: "/page2",
    component: () => import("@/views/wrapper/index"),
    children: [
        {
            name: "page2",
            path: "page2",
            meta: { title: "额外模块" },
            component: () => import("@/pages/extra/views/page2")
        }
    ]
};

export const routes: Array<any> = [
    appRouter,
    ...commonRouter
];
