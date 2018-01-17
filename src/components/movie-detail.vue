<template>
<div>
  <h2>{{ movie.title }}</h2>
  <div>
    <img :src="movie.images.large" alt="">
  </div>
  <p>评分：{{ movie.rating.average }}</p>
  <p>电影详情：</p>
  <p>
    {{ movie.summary }}
  </p>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState('movieDetail', ['movie'])
  },
  created () {
    this.$store.dispatch('movieDetail/getMovieDetail')
  }
}
</script>

<style>
</style>
