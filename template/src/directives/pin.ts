import { DirectiveOptions, DirectiveFunction } from "vue";

const onBind: DirectiveFunction = (el, binding, vnode) => {
    el.style.position = "fixed";
    let type: string = binding.arg as string;
    (el.style as any)[type] = binding.value + "px";
};

const empty = () => {
    // TODO
};

export const pin: DirectiveOptions = {
    bind: onBind,
    inserted: empty,
    update: empty,
    componentUpdated: empty,
    unbind: empty
};
