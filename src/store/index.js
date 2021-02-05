import Vue from 'vue'
import Vuex from 'vuex'

import { getTrendingGifs } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    savedGifs: [],
    trendingGifs: [],
    isLoadingGifs: true
  },
  mutations: {
    ADD_GIFS_TO_TRENDING(state, payload) {
      state.trendingGifs = payload
    },
    ADD_GIF_TO_SAVED(state, payload) {
      state.savedGifs.push(payload)
    },
    REMOVE_GIF_FROM_SAVED(state, payload) {
      
    },
    SET_GIFS_LOADING(state, payload) {
      state.isLoadingGifs = payload
    }
  },
  actions: {
    async fetchTrendingGifs({ commit }) {
      const gifs = await getTrendingGifs()
      commit('ADD_GIFS_TO_TRENDING', gifs)
      commit('SET_GIFS_LOADING', false)
    },
    addToSavedGifs({ state, commit }, gif) {
      const { savedGifs } = state

      // Check if gif is already saved to store
      for (const currentGif of savedGifs) {
        if (gif.id === currentGif.id) {
          console.log('Cannot add duplicate GIF')
          return;
        }
      }
      commit('ADD_GIF_TO_SAVED', { ...gif, date: Date.now() })
    },
    removeFromSavedGifs({ commit }, gif) {
      commit('REMOVE_GIF_FROM_SAVED', gif)
    }

  },
  modules: {
  }
})
