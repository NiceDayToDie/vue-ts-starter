import Mock from "mockjs";
import { commonSetting } from "@/settings";
import { Paging } from "@/models/paging";

const prefix: string = `http://localhost${commonSetting.mainServer}`;

Mock.mock(`${prefix}/query`, "get", (options: any) => {
    return {
        hasError: false,
        result: {
            id: Mock.Random.string("number", 9)
        },
        message: ""
    };
});

Mock.mock(`${prefix}/update`, "post", (options: any) => {
    return {
        hasError: false,
        result: {
            id: Mock.Random.string("number", 9)
        },
        message: ""
    };
});

Mock.mock(`${prefix}/getTableData`, "post", (options: any) => {
    let paging: Paging = JSON.parse(options.body);
    let totalCount = 35;
    let count = paging.pageIndex * paging.pageSize > totalCount ? totalCount % paging.pageSize : paging.pageSize;
    let data = new Array(count).fill(0).map(i => {
        return {
            name: Mock.Random.cname(),
            chinese: Mock.Random.integer(60, 100),
            math: Mock.Random.integer(60, 100),
            english: Mock.Random.integer(60, 100)
        };
    });
    return {
        hasError: false,
        result: data,
        message: "",
        totalCount: totalCount
    };
});
