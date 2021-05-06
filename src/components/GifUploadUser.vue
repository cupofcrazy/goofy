<template>
  <div class="gif-user">
    <div class="gif-user__thumb" v-if="uploadUser && uploadUser.avatar_url">
      <lazy-image :src="uploadUser.avatar_url" :aspectRatio="1" alt="User Thumbnail Image" color="#aaa" />
    </div>
    <p class="gif-user__name">{{ uploadUser.username || "anonymous" }}</p>
    <span class="gif-user__verified-icon" v-if="uploadUser && uploadUser.is_verified">
      <icon-check />
    </span>
  </div>
</template>

<script>
import LazyImage from './global/LazyImage.vue'
import IconCheck from './icons/IconCheck.vue'

export default {
  name: 'GifUploadUser',
  components: { IconCheck, LazyImage },
  props: {
    uploadUser: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.gif-user {
  display: inline-flex;
  align-items: center;
  gap: .75rem;
  border-radius: 10rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, .15);
  padding: .25rem .25rem;

  &__thumb {
    overflow: hidden;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid var(--accent-color);
  }

  &__name {
  }
  &__verified-icon{
    display: block;
  }
}
</style>