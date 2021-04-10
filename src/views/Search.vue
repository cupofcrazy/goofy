<template>
  <keep-alive>
    <div class="search">
      <div class="search__bar">
        <form class="search__form" @submit="onSubmit">
          <input type="text" class="search__input" v-model="query"  />
        </form>
        <button class="search__button" @click="onSubmit">Search</button>
        
      </div>

      <h4 class="search__info" v-if="gifs.length && query.length">Found {{ gifs.length }} results for {{ query }}</h4>

      <div>
        <GifList :gifList="gifs" v-if="gifs" />
      </div>
    </div>
  </keep-alive>
</template>

<script>
import { search } from '../api'
import { getAspectRatio } from '../utils'
import GifList from '@/components/gifs/GifList'

export default {
  components: { GifList },
  data: () => ({
    query: "",
    gifs: []
  }),
  methods: {
    async onSubmit(e) {
      console.log(this.query)
      e.preventDefault()
      const gifs = await search({ query: this.query })

      this.gifs = gifs
    },
    getAspectRatio({ width, height }) {
      return getAspectRatio({ width, height })
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 1rem;

  &__bar {
    display: flex;
    padding: .5rem .5rem;
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.15);
    border: 1px solid #707070;
    gap: 1rem;
    max-width: 600px;
    margin: 1rem auto;
    align-items: center;
    border-radius: 4px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
  }
  &__form {
    display: block;
    width: 100%;
  }
  &__input {
    border: 0;
    width: 100%;
    display:block;
    padding: .5rem 1rem;
    background-color: transparent;
    color: var(--accent-color);

    &:focus {
      outline: none;

      .search__bar {
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.45);
      }
    }
  }
  &__button {
    padding: .5rem 1rem;
    color: var(--main-color);
    background-color: var(--accent-color);
    border-radius: 4px;
  }
}
</style>