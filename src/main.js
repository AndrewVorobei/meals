import { createApp } from "vue";
import router from "./router/router";
import App from "./App.vue";
import "./style.css";
import store from "./vuex/store";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
