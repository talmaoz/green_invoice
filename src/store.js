import Vue from 'vue';
import Vuex from 'vuex';
import { loginPost } from './service/loginService';
import router from './router';
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'green_invoice',
  storage: window.localStorage
})
Vue.use(Vuex);

const getDefaultState = () => {
  return {
    loggedUser: null
  }
}

const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
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
        router.push('/main/welcome').then()
      } catch (err) {
        console.log(err);
        alert('מייל או סיסמה אינם נכונים.');
      }
    },

    logout({commit}) {
      commit('removeLoggedUser')
      router.push('/login').then()
    }
  }
});

export default store;

