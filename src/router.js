import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from './components/movie-list'
import MovieDetail from './components/movie-detail'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      name: 'index',
      path: '/',
      redirect: {
        name: 'movie-list-in_theaters'
      } // 现在请求 / 跳转到 /in_theaters
    },
    {
      name: 'movie-list-in_theaters',
      path: '/in_theaters', // 正在热映
      component: MovieList
    },
    {
      name: 'movie-list-coming_soon',
      path: '/coming_soon', // 即将上映
      component: MovieList
    },
    {
      name: 'movie-list-top250',
      path: '/top250', // 即将上映
      component: MovieList
    },
    {
      name: 'movie-list-search',
      path: '/search', // 即将上映
      component: MovieList
    },
    {
      name: 'movie-detail',
      path: '/subject/:subjectId',
      component: MovieDetail
    }
  ]
})
