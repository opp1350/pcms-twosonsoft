import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
theme: {
    themes: {
    light: {
            primary: "#357CE0",
            accent: "#0045A7", //dark-blue
            secondary: "#4F9FED", //light-blue
            green: "#5AA8AA",
            error: "#DE6762",
            orange: "#ED8A4A",
            blueGrey: "#435264"
            }
        },
    }
});
