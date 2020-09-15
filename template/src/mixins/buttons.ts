import { Component, Vue } from "vue-property-decorator";

@Component({
    name: "buttons-mixin"
})
export default class Buttons extends Vue {
    public goBack() {
        this.$router.go(-1);
    }
}
