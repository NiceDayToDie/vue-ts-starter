import Vue from "vue";
import { pin } from "@/directives/pin";

export const directives = () => {
    Vue.directive("pin", pin);
};
