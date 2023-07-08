import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// defining styles
import './assets/styles/index.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
