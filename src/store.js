import Vue from 'vue';
import Vuex from 'vuex';
import { login } from './service/loginService';

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,
  state: {
    loggedUser: null
  },
  getters: {
    getLoggedUser(state) {
      return state.loggedUser;
    }
  },
  mutations: {
    setLoggedUser(state, user) {
      state.loggedUser = user;
    }
  },
  actions: {
    login(context, { credentials }) {
      login(credentials)
        .then((user) => context.commit('setLoggedUser', user))
        .catch(err => alert(err));
    },
    logout(context) {
      context.commit('setLoggedUser', null)
    }
  }
});

export default store;

