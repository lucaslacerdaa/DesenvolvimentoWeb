import { createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'

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
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router