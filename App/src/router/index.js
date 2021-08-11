import { createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Pacientes from '../views/Pacientes.vue'
import Dashboard from '../views/Dashboard/script.js'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },

    {
        path: '/cadastro',
        name: 'cadastro',
        component: Cadastro
    },

    {
        path: '/pacientes',
        name: 'pacientes',
        component: Pacientes
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard 
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router