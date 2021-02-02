<template>
  <div class="home">
    <transition name="fade" mode="out-in" appear>
      <loading v-if="isFetching">
        <p>Loading GIFS...</p>
      </loading>
      <div class="grid" v-else>
        <div class="gif" v-for="gif in gifs" :key="gif.id" v-scroll-fade>
          <div class="gif__image">
            <lazy-image
              :src="gif.images.original.url"
              :aspectRatio="getAspectRatio(gif.images.fixed_width_small)"
              :alt="gif.title"
              color="#EEE"></lazy-image>
            <!-- <img class="blur" :src="gif.images.original.url" :width="gif.images.original.width" :height="gif.images.original.height" /> -->
          </div>
          <div class="gif__info">
            <p class="gif__title">{{ gif.title.split("GIF")[0] }}</p>
            <div class="gif__circle"></div>
          </div>
        </div>
      </div>
     </transition>
    
  </div>
</template>

<script>
import { GiphyFetch } from '@giphy/js-fetch-api'
import Loading from '../components/Loading.vue'

const API_KEY = 'qIrMYcTRUsp9Be8IgSOq95HheltlmCHu'

export default {
  name: 'Home',
  components: {
    Loading
  },
  data() {
    return {
      gifs: [],
      isFetching: true
    }
  },
  async created() {
    const giphyFetch = new GiphyFetch(API_KEY)

    const { data:gifs } = await giphyFetch.trending()

   this.gifs = gifs

   console.log(this.gifs)

   this.isFetching = false
    
  },
  methods: {
     getAspectRatio({ width, height }) {
      return width / height
    }
  },
  computed: {
   
  }
}
</script>

<style lang="scss">
.home {
  padding: 4rem 1rem 8rem 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @include desktop {
    grid-template-columns: repeat(6, 1fr);
  }
}

.gif {
  &__image {
    border-radius: 6px;
    overflow: hidden;
    position: relative;
  }
  &__title {
    font-size: .75rem;
  }

  &__info {
    margin: .5rem 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__circle {
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    background-color: var(--accent-color);

  }
}

.blur {
  position: absolute;
  top: 1rem;
  z-index: -1;
  filter: blur(30px);
}

</style>