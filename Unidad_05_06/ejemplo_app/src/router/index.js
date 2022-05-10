import { createRouter, createWebHashHistory } from 'vue-router'
import ListaLibros from '../views/ListaLibros.vue'
import ListaUsuarios from '../views/ListaUsuarios.vue'
import EditarUsuario from '../views/EditarUsuario.vue'
import PaginaInicial from '../views/PaginaInicial.vue'
import GaleriaImagenes from '../views/GaleriaImagenes.vue'
import ImagenCompleta from '../views/ImagenCompleta.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PaginaInicial
  },
  {
    path: '/libros',
    name: 'ListaLibros',
    component: ListaLibros
  },
  {
    path: '/usuarios',
    name: 'ListaUsuarios',
    component: ListaUsuarios
  },
  {
    path: '/usuarios/:id',
    name: 'EditarUsuario',
    component: EditarUsuario,
    props: true
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: GaleriaImagenes
  },
  {
    path: '/imagenmuestra',
    name: 'ImagenMuestra',
    component: ImagenCompleta
  },
  {
    path: '/imagen',
    name: 'ImagenCompleta',
    component: ImagenCompleta
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
