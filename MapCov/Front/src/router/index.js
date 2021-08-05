import { createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Pacientes from '../views/Pacientes.vue'

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
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router