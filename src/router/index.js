import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path : '/',
            name : 'Welcome',
            component : () => import (/* webpackChunkName: "welcome" */ '../views/Welcome.vue') 
        },
        {
            path : '/register' ,
            name : 'Registration',
            component : () => import (/* webpackChunkName: "/register" */ '../views/Register.vue')
        },
        {
            path : '/login' ,
            name : 'Registration',
            component : () => import (/* webpackChunkName: "/login" */ '../views/Login.vue')
        }
    ]
})

export default router;
