<template>
<div>
  <h2 class="sub-header">{{ title }}</h2>
  <ul class="list-group">
    <li class="list-group-item" v-for="item in movies">
      <div class="media">
        <div class="media-left">
          <router-link :to="{
            name: 'movie-detail',
            params: {
              subjectId: item.id
            }
          }">
            <!-- 电影海报 -->
            <img class="media-object" width="100" :src="item.images.small" alt="...">
          </router-link>
        </div>
        <div class="media-body">
          <h4 class="media-heading">{{ item.title }}</h4>
          电影简介。。。。。。
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {}
  },
  created () {
    // 发起 dispatch
    // this.$store.dispatch({
    //   type: 'movieList/getMovieList',
    //   path: this.$route.path // 告诉 action 你去请求这个路径
    // })
    this.getMovieList()
  },
  // 如果路径的改变对应的是同一个组件，那么该组件会被缓存起来不会重新渲染
  // 解决方法就是在 watch 中监视 $route 的变化做出业务逻辑控制
  // 或者使用 2.2 中引入的 beforeRouteUpdate 守卫
  watch: {
    // 对路由变化作出响应...
    '$route' (to, from) {
      this.getMovieList()
    }
  },
  computed: {
    ...mapState('movieList', ['movies', 'title']), // 获取指定模块中的 state
    ...mapState(['foo']), // 映射全局中的 foo
  },
  methods: {
    getMovieList () {
      // 我们经验会需要在 action 或者 mutation 中获取路由参数
      // 通常的做法都是通过 mutation 或者 action 载荷传参的方式来传递路由参数
      // 如果我们的 Vuex 中可以直接获取路由状态参数就厉害了
      this.$store.dispatch({
        type: 'movieList/getMovieList',
        // path: this.$route.path, // 告诉 action 你去请求这个路径
        // query: this.$route.query // 搜索的文本就在查询字符串对象中
      })
    }
  }
  // computed: {
  //   movies () {
  //     return this.$store.state.movieList.movies
  //   }
  // },
}
</script>

<style>
</style>
