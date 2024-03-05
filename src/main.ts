import { createApp } from 'vue'
import App from './App'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import './style.css'

import components from './install'

async function main() {
  const app = createApp(App)

  await components(app)

  app.use(ArcoVue)

  app.mount('#app')
}

main()
