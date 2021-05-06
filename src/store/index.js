import Vue from 'vue'
import Vuex from 'vuex'

import { getTrendingGifs } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      isLoggedIn: false
    },
    savedGifs: [],
    trendingGifs: [],
    isLoadingGifs: true
  },
  mutations: {
    ADD_GIFS_TO_TRENDING(state, payload) {
      state.trendingGifs = payload
    },
    SET_SAVED_GIFS(state, payload) {
      state.savedGifs = payload
    },
    SET_USER_NAME(state, payload) {
      state.user.name = payload
    },
    ADD_GIF_TO_SAVED(state, payload) {
      const newState = [payload, ...state.savedGifs]
      state.savedGifs = newState
    },
    REMOVE_GIF_FROM_SAVED(state, payload) {
      
    },
    SET_GIFS_LOADING(state, payload) {
      state.isLoadingGifs = payload
    }
  },
  actions: {
    setUserName({ commit }, name) {
      localStorage.setItem('name', name)
      commit('SET_USER_NAME', name)
    },
    async fetchTrendingGifs({ commit }) {
      const gifs = await getTrendingGifs()
      commit('ADD_GIFS_TO_TRENDING', gifs)
      commit('SET_GIFS_LOADING', false)
    },
    addToSavedGifs({ state, commit }, gif) {
      const processedGif = { ...gif, date: Date.now() }
      
      commit('ADD_GIF_TO_SAVED', processedGif)
      localStorage.setItem('savedGifs', JSON.stringify([...state.savedGifs]))

    },
    removeFromSavedGifs({ commit }, gif) {
      commit('REMOVE_GIF_FROM_SAVED', gif)
    }

  },
  modules: {
  }
})
