import axios from 'axios'

const state = {
  movie: {}
}

const getters = {

}

const mutations = {
  changeMovie (state, payload) {
    state.movie = payload
  }
}

const actions = {
  async getMovieDetail (context) {
    const rootState = context.rootState
    const subjectId = rootState.route.params.subjectId
    const res = await axios.get(`/douban/movie/subject/${subjectId}`)
    console.log(res.data)
    context.commit({
      type: 'changeMovie',
      ...res.data
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
