// export default {
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {}
// }

import axios from 'axios'

const state = {
  title: '正在加载中......',
  movies: [
  ]
}

const getters = {

}

const mutations = {
  // 提供一个 mutation 用来修改 state 中的状态
  changeMovies (state, payload) {
    // console.log('mutation 执行了，', payload)
    state.movies = payload.subjects
    state.title = payload.title
    console.log(payload)
  }
}

const actions = {
  // 1. 在组件中 dispatch 发起一个 action
  // 2. 然后在 action 中发起 ajax 请求
  // 3. 当收到 ajax 响应的时候，提交 commit 改变 state
  async getMovieList (context, payload) {
    // console.log(context.rootState.route)
    // console.log(payload)
    // CORS
    // 客户端代理
    // GET 请求可以选择 JSONP
    // console.log('payload ===== ', payload)
    // const res = await axios.get(`/douban/movie/${payload.path}`, {
    //   q: payload.query.q
    // })
    // const res = await axios.get(`/douban/movie/${payload.path}?q=${payload.query.q}`)
    // context.commit({
    //   type: 'changeMovies',
    //   ...res.data
    // })

    const route = context.rootState.route
    console.log(route)

    const res = await axios.get(`/douban/movie/${route.path}?q=${route.query.q}`)
    context.commit({
      type: 'changeMovies',
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
