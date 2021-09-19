import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./views/Inicio')
const Busquedas = () => import('./views/Busquedas')
const Ventas = () => import('./views/Ventas')
const Total = () => import('./views/Total')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busquedas',
            name: 'busquedas',
            component: Busquedas
        },
        {
            path: '/ventas',
            name: 'ventas',
            component: Ventas
        },
        {
            path: '/total',
            name: 'total',
            component: Total
        }     
    ]
})