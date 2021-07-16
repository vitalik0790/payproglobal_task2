import Vue from "vue";
import Router from 'vue-router'
import TheForm from './components/TheForm.vue'
import ThankYouPage from './components/ThankYouPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/payment' },
        { path: '/payment', name: 'payment', component: TheForm },
        { path: '/thankyou', name: 'thankyou', component: ThankYouPage },
    ],
})

