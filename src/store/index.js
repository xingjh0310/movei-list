import Vue from 'vue'
import Vuex from 'vuex'

import movieList from './modules/movie-list'
import movieDetail from './modules/movie-detail'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foo: 'global-foo'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movieList,
    movieDetail
  },
})
