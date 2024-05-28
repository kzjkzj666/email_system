import { createRouter, createWebHistory } from 'vue-router'
import Login_Page from "@/views/Login_Page.vue";
import Home_Page from "@/views/Home_Page.vue";
import user_information from "@/views/user/user_information.vue";
import user_send from "@/views/user/user_send.vue";
import user_icon from "@/views/user/user_icon.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login_Page
    },
    {
      path: '/home',
      name: 'home',
      component: Home_Page,
      children: [
        {
          path: '/user/information',
          name: 'user_information',
          component: user_information
        },
        {
          path: '/user/send',
          name: 'user_send',
          component: user_send
        },
        {
          path: '/user/icon',
          name: 'user_icon',
          component: user_icon
        }
      ]
    }
  ]
})



export default router
