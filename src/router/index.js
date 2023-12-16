import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Almacen from '../views/Almacen.vue'
import Usuarios from '../views/Usuarios.vue'
import Compras from '../views/Compras.vue'
import Navbar from '../components/BarraMenu.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/almacen',
    name: 'almacen',
    component: Almacen
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Usuarios
  },
  {
    path: '/compras',
    name: 'compras',
    component: Compras
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
