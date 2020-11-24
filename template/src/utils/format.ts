import _ from "lodash";

export const moneyFormat = (value: number) => {
    let str = value.toString().replace(/[^\d\.-]/g, "");
    let arr = str.split(".");
    let int = arr[0].split("").reverse();
    let dec = arr.length > 1 ? arr[1] : "";
    let res = _.chunk(int, 3).map(i => i.reverse().join("")).reverse().join(",");
    if (dec) res += `.${dec}`;
    return res;
};
