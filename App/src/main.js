
import { createApp } from 'vue'                 
import App from './App.vue'                     
import router from './router'                   /*Adicionando Vue Router*/

import "bootstrap/dist/css/bootstrap.min.css"   /*Importando os estilos do Bootstrap*/
import "bootstrap"                              /*Adicionando Bootstrap*/

createApp(App).use(router).mount('#app') 