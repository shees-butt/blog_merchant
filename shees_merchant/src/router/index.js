// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/admindashboard',
        name: 'admindashboard',
        component: () => import('@/views/AdminDashboard.vue'),
      },
      {
        path: '/userdashboard',
        name: 'userdashboard',
        component: () => import('@/views/UserDashboard.vue'),
      },
      {
        path: '/userlist',
        name: 'userlist',
        component: () => import('@/views/UserList.vue'),
      },
      {
        path: '/postlist',
        name: 'postlist',
        component: () => import('@/views/PostList.vue'),
      },
      {
        path: '/createpost',
        name: 'createpost',
        component: () => import('@/views/CreatePost.vue'),
      },
      {
        path: '/viewpost',
        name: 'viewpost',
        component: () => import('@/views/ViewPost.vue'),
      },
      {
        path: '/postdetails',
        name: 'postdetails',
        component: () => import('@/views/PostDetails.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
