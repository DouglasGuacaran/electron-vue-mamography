import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/institucion',
    name: 'Institucion',
    component: () => import('../views/Institucion.vue')
  },
  {
    path: '/unidad',
    name: 'Unidad',
    component: () => import('../views/Unidad.vue')
  },
  {
    path: '/mecanicas',
    name: 'Mecanicas',
    component: () => import('../views/Mecanicas.vue')
  },
  {
    path: '/geometria',
    name: 'Geometria',
    component: () => import('../views/Geometria.vue')
  },
  {
    path: '/radiometria',
    name: 'Radiometria',
    component: () => import('../views/Radiometria.vue')
  },
  {
    path: '/plano',
    name: 'Plano',
    component: () => import('../views/Plano.vue')
  },
  {
    path: '/potencial',
    name: 'Potencial',
    component: () => import('../views/Potencial.vue')
  },
  {
    path: '/dosimetricas',
    name: 'Dosimetricas',
    component: () => import('../views/Dosimetricas.vue')
  },
  {
    path: '/calidadimagen',
    name: 'CalidadImagen',
    component: () => import('../views/CalidadImagen.vue')
  },
  {
    path: '/informes',
    name: 'Informes',
    component: () => import('../views/Informes.vue')
  },
  {
    path: '/hoja2',
    name: 'Hoja2',
    component: () => import('../views/Hoja2.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
