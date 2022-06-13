import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from "bootstrap-vue";

import { VueScrollFixedNavbar } from "vue-scroll-fixed-navbar";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(VueScrollFixedNavbar);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
