<template>
  <div id="app">
    <header-layout />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex' 
import HeaderLayout from './components/layout/HeaderLayout.vue'

export default {
  name: 'App',
  components: {
    HeaderLayout
  },
  async created() {
    const theme = localStorage.getItem("theme")
    const storedGifs = localStorage.getItem("savedGifs")

    console.log(storedGifs)

    if (storedGifs) {
      this.$store.commit('SET_SAVED_GIFS', JSON.parse(storedGifs))
    } else {
      // TODO
    }

    console.log({ theme })
    if (theme) {
      document.body.classList.add(theme)
    }
    try {
      await this.fetchTrendingGifs()
    } catch (error) {
      console.error({ error })
    }


  },
  methods: {
    ...mapActions({
      fetchTrendingGifs: 'fetchTrendingGifs',
      savedGifs: 'savedGifs'
    })
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
