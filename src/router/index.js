import Vue from 'vue'
import Router from 'vue-router'
import register from '@/views/register.vue'
import login from '@/views/Login.vue'
import userinfo from '@/views/userinfo.vue'
import edit from '@/views/edit.vue'
import home from '@/views/Home.vue'
import article from '@/views/article.vue'
// import VueRouter from 'vue-router'

Vue.use(Router)

// export default new Router({
//         routes: [

//             {
//                 path: '/register',
//                 component: register
//             },
//             {
//                 path: '/login',
//                 component: login
//             },
//             {
//                 path: '/userinfo',
//                 component: userinfo
//             }

//         ],

//     })


const routes = [

    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: home,
        meta: {
            keepalive: true
        }
    },

    {
        path: '/register',
        component: register
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/userinfo',
        component: userinfo,
        meta: {
            istoken: true
        }
    },
    {
        path: '/edit',
        component: edit,
        mata: {
            idtoken: true
        }
    },
    {
        path: '/article/:id',
        component: article
    }

];



const router = new Router({
    routes,
    mode: 'history'
});

// router.beforeEach((to, from, next) => {
//     if (localStorage.getItem('id') && localStorage.getItem('token')) {
//         next();
//         return
//     }
//     // router.push('/login');
// })
router.beforeEach((to, from, next) => {
    if ((!localStorage.getItem('id') && !localStorage.getItem('token')) && to.meta.istoken == true) {
        router.push('/login');
        Vue.prototype.$msg.fail('请重新登陆');
        return;
    }
    next();
})

export default router;