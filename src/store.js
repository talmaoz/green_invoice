import Vue from 'vue';
import Vuex from 'vuex';
import { loginPost } from './service/loginService';
import router from './router';

const getDefaultState = () => {
  return {
    loggedUser: null
  }
}

Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  state: getDefaultState(),
  getters: {
    getLoggedUser(state) {
      return state.loggedUser;
    }
  },
  mutations: {
    setLoggedUser(state, user) {
      state.loggedUser = user;
    },
    removeLoggedUser(state) {
      Object.assign(state, getDefaultState())
    }
  },

  actions: {
    async login({commit}, credentials) {
      try {
        const user = await loginPost(credentials);
        commit('setLoggedUser', user);
        router.push('/welcome').then()
      } catch (err) {
        console.log(err);
        alert('מייל או סיסמה אינם נכונים.');
      }
    },

    logout({commit}) {
      commit('removeLoggedUser')
    }
  }
});

export default store;

