import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupMockjs } from './mock'
import { setupStore } from './store'
// 引入静态资源
import '@/styles/tailwind.css'

async function setupApp() {
  const app = createApp(App)
  setupStore(app)
  setupMockjs()
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
