<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">豆瓣电影</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Help</a></li>
        </ul>
        <form @submit.prevent="searchMovie" class="navbar-form navbar-right">
          <input type="text" class="form-control" placeholder="Search..." v-model="searchText">
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    searchMovie () {
      // push 到这个路径
      // 让 /search 对应到 MovieList 组件
      this.$router.push({
        path: '/search',
        query: {
          q: this.searchText
        }
      })
    }
  }
}

</script>
<style>


</style>
