<template>
  <section class="gif__category">
    <div class="gif__category-info">
      <h3 class="gif__category-title">{{ title }} ({{ category.length }})</h3>
      <router-link class="gif__category-link" :to="path">See All</router-link>
    </div>
    <div class="gif__category-items">
      <gif-preview v-for="(gif, index) in gifArray" :key="index" :gifData="gif" />
    </div>
  </section>
</template>

<script>
import GifPreview from './gifs/GifPreview.vue'

export default {
  name: 'GifCategory',
  components: { GifPreview },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Set Title Here'
    },
    path: {
      type: String,
      required: false
    },
    category: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    gifArray() {
      return this.category.length > 6 ? this.category.slice(0, 6) : this.category
    }
  }
}
</script>

<style lang="scss" scoped>
.gif__category {
  width: 100%;
  margin: 2rem 0;
  

  &-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: .5rem 0;
    padding-bottom: .5rem;
    border-bottom: 1px solid var(--accent-color);
  }
  &-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @include desktop {
      grid-template-columns: repeat(6, 1fr);
    }
  }
  &-title {
    font-size: 2rem;
  }
}
</style>