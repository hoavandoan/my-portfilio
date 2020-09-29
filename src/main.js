import { createApp } from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
// import VueCookies from 'vue-cookies'
import './assets/css/index.css'

const app = createApp(App)

app.use(VueParticles)
// app.use(VueCookies)

app.mount('#app')
