//set up pinia
import { createPinia } from 'pinia'

import presist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
//use pinia plug-in
pinia.use(presist)

export default pinia

// import { useUserStore } from './modules/user'
// export { useUserStore }
export * from './modules/user'
// export * from './modules/consult'
