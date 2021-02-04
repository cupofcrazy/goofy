<template>
    <div class="container">
        <div class="gif__list grid">
            <gif-item :gifData="gif" v-for="gif in gifList" :key="gif.id" @showDetails="showGifDetails" />
        </div>
        <gif-details v-if="isDetailsOpen" :gifData="gifData" @closeDetails="closeDetails"/>
    </div>
</template>

<script>
import GifDetails from './GifDetails.vue'
import GifItem from './GifItem'

export default {
    components: { GifItem, GifDetails },
    name: 'GifList',
    props: {
        gifList: {
            type: Array,
            required: true
        }
    },
    data: () => ({ 
        isDetailsOpen: false,
        gifData: null
    }),
    methods: {
        showGifDetails(data) {
            this.isDetailsOpen = true
            this.gifData = data
        },
        closeDetails() {
            this.isDetailsOpen = false
            this.gifData = null
        },
    },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 1rem;

   @include tablet {
    grid-template-columns: repeat(6, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>