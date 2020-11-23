import Vue from "vue";
import _ from "lodash";

declare module "vue/types/vue" {
    interface Vue {
        $bus: any;
        _: _.LoDashStatic;
    }
}
