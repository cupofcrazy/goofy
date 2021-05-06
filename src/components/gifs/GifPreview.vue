<template>
  <div class="gif-preview">
    <div class="gif-preview__thumb">
      <lazy-image
        :src="gifData.images.preview_gif.url"
        :aspectRatio="getAspectRatio(gifData.images.preview_gif)"
        :alt="gifData.title"
        color="#AAA"></lazy-image>
    </div>
  </div>
</template>

<script>
import getAspectRatio from '@/mixins/util'

export default {
  name: 'GifPreview',
  mixins: [ getAspectRatio ],
  props: {
    gifData: {
      type: Object,
      required: true,
      default: () => {}
    },
  },
}
</script>

<style lang="scss" scoped>
.gif-preview {
  &__thumb {
    overflow: hidden;
    border-radius: var(--border-radius);
  }
}
</style>