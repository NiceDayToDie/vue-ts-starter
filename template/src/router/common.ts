export const commonRouter = [
    {
        name: "404",
        path: "/*",
        meta: { title: "404" },
        component: () => import("@/views/errors/404/index")
    }
];
