import Vue from "vue";
import App from "./App.vue";
import "../src/assets/css/tailwind.css";
import VueTypedJs from "vue-typed-js";
import VueScrollReveal from "vue-scroll-reveal";
import VModal from "vue-js-modal";

Vue.use(VueTypedJs);
Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1200,
  scale: 1,
  distance: "60px",
  mobile: false
});
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
