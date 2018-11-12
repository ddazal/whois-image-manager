import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import NotFound from '@/pages/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'dashboard' } },
    { path: '/dashboard', component: Dashboard, name: 'dashboard' },
    { path: '*', component: NotFound }
  ]
})

export default router
