import VuexPersistence from 'vuex-persist'
import { Plugin } from '@nuxt/types'

const plugin: Plugin = ({ store }) => {
  new VuexPersistence({
    key: 'formation360',
  }).plugin(store)
}

export default plugin
