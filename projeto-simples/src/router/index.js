import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CadastrarMissao from '../views/cadastros/CadastrarMissao.vue'
import CadastrarUsuario from '../views/cadastros/CadastrarUsuario.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastrar-missao',
    name: 'cadastrarMissao',
    component: CadastrarMissao
  },
  {
    path: '/cadastrar-usuario',
    name: 'cadastrarUsuario',
    component: CadastrarUsuario
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
