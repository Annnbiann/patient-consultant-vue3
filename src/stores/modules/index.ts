//set up pinia
import { createPinia } from 'pinia'

import presist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(presist)
//use pinia plug-in


export default pinia

// import { useUserStore } from './modules/user'
// export { useUserStore }
// export * from './modules/user'
// export * from './modules/consult'
