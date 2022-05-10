import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'

import NotificacionGlobal from './components/NotificacionGlobal.vue';

loadFonts()

const app = createApp(App);

//Registro global de un componente
app.component('NotificacionGlobal', NotificacionGlobal);

  app.config.errorHandler = (err, vm, info) => {
    console.log(`**** Detección global de errores:`);
    console.log(`Mensaje de error: ${err}`);
    console.log(`Componente donde sucedió 
    el error: ${vm.$options.name}`);
    console.log(`Información sobre el error: ${info}`);
  };

  app.use(store).use(router)
  .use(vuetify)
  .mount('#app');