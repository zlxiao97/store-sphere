import BaseLayout from '@/components/layout/BaseLayout.vue'
import HomePage from '@/pages/HomePage.vue'

export default [
  {
    path: '/',
    redirect: '/home',
    component: BaseLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: HomePage,
      }
    ]
  }
]