import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recherche from '../views/Recherche.vue'
import Categories from '../views/Categories.vue'
import Messages from '../views/Messages.vue'
import CategorieMessages from '../views/CategoriesMessages'
import NouvelleCategorie from "../views/NouvelleCategorie";
import NouveauMessage from "../views/NouveauMessage";
import ModifierCategorie from "../views/ModifierCategorie";
import ModifierMessage from "../views/ModifierMessage";
import VoirMessage from "../views/VoirMessage";
import Login from "../views/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    children: [
      {
        path: ':id',
        name: 'categorie_messages',
        component: CategorieMessages
      },
      {
        path: '/nouvelle-categorie',
        name: 'nouvelle-categorie',
        component: NouvelleCategorie
      },
      {
        path: '/modifier-categorie',
        name: 'modifier-categorie',
        component: ModifierCategorie
      },
      {
        path: '/nouveau-message',
        name: 'nouveau-message',
        component: NouveauMessage
      },
      {
        path: '/messages',
        name: 'Messages',
        component: Messages,
      },
      {
        path: '/voir-message',
        name: 'voir-message',
        component: VoirMessage
      },
      {
        path: '/modifier-message',
        name: 'modifier-message',
        component: ModifierMessage
      }
    ]
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: Recherche
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/a-propos',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('usertoken')) next({ name: 'Login' })
  else next()
})

export default router
