import { createRouter , createWebHistory } from "vue-router"

const routes = [
      //can redirect
      // {
      //    path : '/',
      //    redirect : '/users/'
      // }
     {
        path : '/',
        name : 'AllUser',
        component : () => import('./views/Alluserview.vue')
     },
     {
        path : '/crate',
        name : 'CreateUser',
        component : () => import('./views/Createuser.vue')
     },
     {
        path : '/edit/:id',
        name : 'EditUser',
        component : () => import('./views/EditUser.vue')
     },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

export default router;