<template>
    <div class="gif" v-scroll-fade @click="showDetails(gifData)" @keydown.enter="showDetails(gifData)" aria-selected="true" tabindex="0" role="button">
        <div class="gif__image">
          <lazy-image
              :src="gifData.images.preview_gif.url"
              :aspectRatio="getAspectRatio(gifData.images.preview_gif)"
              :alt="gifData.title"
              color="#AAA"></lazy-image>
          <!-- <img class="blur" :src="gif.images.original.url" :width="gif.images.original.width" :height="gif.images.original.height" /> -->
          </div>
          <div class="gif__info">
          <p class="gif__title">{{ gifData.title.split("GIF")[0] }}</p>
          <div class="gif__circle"></div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    gifData: {
        type: Object,
        required: true
    }
  },
  methods: {
    getAspectRatio({ width, height }) {
      return width / height
    },
    showDetails(data) {
      this.$emit('showDetails', data)
      console.log({ data })
      
    }
  }
}
</script>

<style lang="scss" scoped>
.gif {
  border: 0;
  outline: 0;
  cursor: pointer;

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
    color: var(--accent-color);
  }
  &__circle {
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    background-color: var(--accent-color);

  }
}
</style>