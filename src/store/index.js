import Vue from 'vue'
import Vuex from 'vuex'
import Menu from './modules/menu'
import getters from './getters'
import Tags from './modules/tags'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    Menu,
    Tags
  }
})
