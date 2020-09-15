import { Component, Vue } from "vue-property-decorator";

/**
 * 通过组件name注册监听，并分发action
 */
@Component({
    name: "event-bus-mixin"
})
export default class EventBus extends Vue {
    public mounted() {
        this.$bus.$on(`${this.$options.name}`, this.handleAction);
    }

    public beforeDestroy() {
        this.$bus.$off(`${this.$options.name}`, this.handleAction);
    }

    public handleAction(action: string, ...arg: Array<any>) {
        (this as any)[action](...arg);
    }
}
