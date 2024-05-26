import { createRouter, createWebHistory } from 'vue-router'
import Login_Page from "@/views/Login_Page.vue";
import Home_Page from "@/views/Home_Page.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login_Page
    },
    {
      path: '/home',
      name: 'home',
      component: Home_Page
    }
  ]
})



export default router
