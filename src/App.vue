<template>
  <div id="app">
    <header-layout />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import HeaderLayout from './components/layout/HeaderLayout.vue'

export default {
  name: 'App',
  components: {
    HeaderLayout
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: $font-sans-serif, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
