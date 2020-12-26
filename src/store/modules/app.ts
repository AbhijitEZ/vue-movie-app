import { createStore } from "vuex";
import { AppStateInteface } from "../../types/global";
import movies from "@/assets/movie-list";

const SET_USER = "SET_USER";

const state: AppStateInteface = {
  user: {},
  movies,
};

export default createStore({
  state,
  mutations: {
    [SET_USER](state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async setUserAction({ commit }, payload) {
      commit(SET_USER, payload);
    },
  },
  getters: {
    isUserAdmin: (state) => () => {
      return state.user.role === "admin";
    },
    getMovies: (state) => () => {
      return state.movies;
    },
  },
});
