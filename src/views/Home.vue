<template>
  <div class="home">
    <transition name="fade" mode="out-in" appear>
      <loading v-if="isFetching">
        <p>Loading GIFS...</p>
      </loading>
      <GifList :gifList="gifs" v-else />
    </transition>    
  </div>
</template>

<script>
import { getTrendingGifs } from '@/api'

import Loading from '../components/Loading.vue'
import GifList from '../components/gifs/GifList.vue'


export default {
  name: 'Home',
  components: {
    Loading,
    GifList
  },
  data() {
    return {
      gifs: [],
      isFetching: true
    }
  },
  async created() {

    const gifs = await getTrendingGifs()

    this.gifs = gifs
    window.scrollTo(0, 0)
    this.isFetching = false
    
  },
  methods: {

  },
  
  computed: {
   
  }
}
</script>

<style lang="scss">
.home {
  padding: 4rem 1rem 8rem 1rem;
}





.blur {
  position: absolute;
  top: 1rem;
  z-index: -1;
  filter: blur(30px);
}

</style>