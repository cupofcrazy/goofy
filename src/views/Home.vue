<template>
  <keep-alive>
    <div class="home">
      <transition name="fade" mode="out-in" appear>
        <loading v-if="loading">
          <p class="loading">Loading GIFS...</p>
        </loading>
        <GifList :gifList="gifs" v-else />
      </transition>    
    </div>
  </keep-alive>
</template>

<script>
import { mapState } from 'vuex'
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
      isFetching: true
    }
  },
  created() {

    // window.scrollTo(0, 0)
    
  },
  methods: {

  },
  
  computed: {
    ...mapState({
      gifs: 'trendingGifs',
      loading: 'isLoadingGifs'
    })
  }
}
</script>

<style lang="scss">
.home {
  padding: 4rem 1rem 8rem 1rem;
}


.loading {
  color: var(--accent-color);
}


.blur {
  position: absolute;
  top: 1rem;
  z-index: -1;
  filter: blur(30px);
}

</style>