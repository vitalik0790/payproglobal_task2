import Vue from "vue";
import Vuelidate from 'vuelidate'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import BaseDialog from './components/BaseDialog.vue'


Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.component('base-dialog', BaseDialog)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
