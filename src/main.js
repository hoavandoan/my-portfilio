import { createApp } from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
// import VueCookies from 'vue-cookies'
import './assets/css/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faMapMarkerAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)


library.add(faPhone, faEnvelope, faMapMarkerAlt, faLocationArrow, faFacebookF, faTwitter, faGithub, faLinkedinIn)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.config.productionTip = false


app.use(VueParticles)
// app.use(VueCookies)
app.mount('#app')
