export default class TimeUtil {
    public static parseTime(time: number) {
        if (!time) return "";

        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        time -= days * (1000 * 60 * 60 * 24);
        let hours = Math.floor(time / (1000 * 60 * 60));
        time -= hours * (1000 * 60 * 60);
        let minutes = Math.floor(time / (1000 * 60));
        time -= minutes * (1000 * 60);
        let seconds = Math.floor(time / 1000);

        let res = "";
        if (days > 0) res += days + "天";
        if (hours > 0) res += hours + "小时";
        if (minutes > 0) res += minutes + "分";
        if (seconds > 0) res += seconds + "秒";
        return  res;
    }
}
