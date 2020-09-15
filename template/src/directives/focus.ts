import { DirectiveOptions, DirectiveFunction } from "vue";

const onInserted: DirectiveFunction = (el, binding, vnode) => {
    el.focus();
};

const empty = () => {
    // TODO
};

export const focus: DirectiveOptions = {
    bind: empty,
    inserted: onInserted,
    update: empty,
    componentUpdated: empty,
    unbind: empty
};
