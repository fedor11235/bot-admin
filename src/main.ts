import { createApp } from 'vue'
import App from './App.vue'
// eslint-disable-next-line
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'

createApp(App).use(router).use(Quasar, quasarUserOptions).mount('#app')