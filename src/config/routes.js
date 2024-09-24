import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]