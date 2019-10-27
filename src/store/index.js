import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    twitter: {
      q: '',
      tweets: []
    },
    alert: {
      isOpen: true,
      message: ''
    },
    isLoading: false
  },
  mutations: {
    tweets(state, tweets) {
      state.twitter.tweets = tweets;
    },
    twitterQ(state, q) {
      state.twitter.q = q;
    },
    isLoading(state, loading) {
      state.isLoading = loading;
    },
    setAlert(state, payload) {
      state.alert = payload;
    }
  },
  actions: {
    toggleAlert({ commit, state }, payload) {
      if (!payload) payload = { isOpen: !state.alert.isOpen, message: '' };
      commit('setAlert', payload);
    }
  },
  modules: {}
});
