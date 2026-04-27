import { createApp } from 'vue'
import App from './App.vue'
import { foo as foo2 } from './modules/module-2.js'
// oxlint-disable no-console
// This is the entry file for the Webpack project
import { foo } from './modules/module.js'
import { router } from './routers/index.js'

// Avoid tree shaking
console.log(foo)
console.log(foo2)
// eslint-disable-next-line antfu/no-top-level-await
console.log(await import(/* webpackChunkName: "module-async" */ './modules/module-async.js'))

createApp(App)
  .use(router)
  .mount('#app')
