import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  isMobileView: false,
  isMobileMenuOpen: false,
  isMenuCollapsed: false,
});

export const mutations = {
  setIsMobileView(state, payload) {
    state.isMobileView = payload;
  },
  setIsMobileMenuOpen(state, payload) {
    state.isMobileMenuOpen = payload;
  },
  setIsMenuCollapsed(state, payload) {
    state.isMenuCollapsed = payload;
  },
};

export const actions = {
  // setInitialValue(
  //   vuexContext,
  //   isMobileView,
  //   isMobileMenuOpen,
  //   isMenuCollapsed
  // ) {
  //   vuexContext.commit("setIsMobileView", isMobileView);
  //   vuexContext.commit("setIsMobileMenuOpen", isMobileMenuOpen);
  //   vuexContext.commit("setIsMenuCollapsed", isMenuCollapsed);
  // },
};

export const getters = {
  isMobileView(state) {
    return state.isMobileView;
  },
  isMobileMenuOpen(state) {
    return state.isMobileMenuOpen;
  },
  setIsMenuCollapsed(state) {
    return state.isMenuCollapsed;
  },
};
