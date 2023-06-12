import { createApp } from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { router } from './router'

loadFonts()

// createApp(App)
//   .use(vuetify)
//   .mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')