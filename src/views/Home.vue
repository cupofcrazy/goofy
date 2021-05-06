<template>
  <div class="home">
    <div class="container" v-if="$store.state.user.name">
      <!-- <div class="home__logo"></div>
      <div class="home__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate voluptates velit aperiam harum veritatis, vero incidunt ipsam autem temporibus aliquam culpa quis sint dolorum facilis cum tempore. Vel, optio enim!</div>
      <form @submit="onSubmit">
        <input type="text" v-model="username" placeholder="Enter your name"/>
        <base-button @click="onSubmit">Let's Begin {{ username }}</base-button>
      </form> -->
    </div>
    <div class="container" v-else>
        <gif-category title="Trending" path="/trending" :category="$store.state.trendingGifs" />
        <gif-category title="Your Recent Saves" path="/saved" :category="$store.state.savedGifs" />
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/base/BaseButton.vue'
import GifCategory from '../components/GifCategory.vue'

export default {
  components: { BaseButton, GifCategory },
  data: () => ({
    username: ''
  }),
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (this.username.length > 0) {
        this.$store.dispatch('setUserName', this.username)

      }
    }
  }
    
  }
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  padding: 1rem;
  width: 100%;
  height: 100%;

  .container {
    width: 100%;
  }
}
</style>