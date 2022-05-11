import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:'/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: ()=> import('../page/home.vue')
        },
        {
            path: '/task',
            name: 'task',
            component: ()=> import('../page/task.vue')
        }
    ]
})


export default router