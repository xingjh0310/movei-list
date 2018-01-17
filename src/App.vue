<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="container-fluid">
      <div class="row">
        <app-aside></app-aside>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppNav from './components/app-nav'
import AppAside from './components/app-aside'
import MovieList from './components/movie-list'
export default {
  name: 'app',
  components: {
    AppNav,
    AppAside,
    MovieList
  }
}

</script>
<style>


</style>
