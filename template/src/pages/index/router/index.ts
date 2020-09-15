import { commonRouter } from "@/router/common";

const appRouter = {
    name: "navigator",
    path: "/",
    redirect: "/index",
    component: () => import("@/views/wrapper/index"),
    children: [
        {
            name: "index",
            path: "index",
            meta: { title: "导航" },
            component: () => import("@/pages/index/views/index")
        }
    ]
};

export const routes: Array<any> = [
    appRouter,
    ...commonRouter
];
