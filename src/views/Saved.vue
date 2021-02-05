<template>
    <div class="saved">
        <GifList :gifList="sortByRecentSavedGifs"  />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import GifList from '@/components/gifs/GifList.vue'

export default {
  components: { GifList },
    computed: {
        sortByRecentSavedGifs() {
            return this.savedGifs.sort((a, b) => b.date - a.date)
        },
        ...mapState({
            savedGifs: 'savedGifs'
        })
    }
}
</script>

<style lang="scss" scoped>
.saved {
    color: var(--accent-color);
    padding: 4rem 1rem 4rem 1rem;
}
</style>