import Vue from "vue"
import VueRouter from "vue-router"
import BootstrapVue from "bootstrap-vue"
import App from "./App.vue"
import Home from "./Home.vue"
import Quiz from "./Quiz.vue"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
    mode: "history",
    /*
    We just add one route
     */
    routes: [
        {
            path: "/",
            component: Home,
            props: route => ({
                to: route.query.to,
                stage: route.query.stage,
                bg: route.query.bg
            })
        },
        {
            path: "/quiz",
            component: Quiz,
            props: route => ({
                to: route.query.to,
                stage: route.query.stage,
                bg: route.query.bg
            })
        }
    ]
})

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
