import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  isMobileView: false,
  isMobileMenuOpen: false,
  isMenuCollapsed: false,
  filters: [],
  isFilterEmpty: true,
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
  addFilters(state, payload) {
    const found = state.filters.find((element) => {
      return element.toLowerCase() === payload.toLowerCase();
    });

    if (found === undefined) {
      state.filters.push(payload);
    }
  },
  removeFilters(state, payload) {
    for (let index = 0; index < state.filters.length; index++) {
      const element = state.filters[index];
      if (element == payload) {
        state.filters.splice(index, 1);
      }
    }
  },
  removeAllFilters(state) {
    state.filters = [];
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
  isMenuCollapsed(state) {
    return state.isMenuCollapsed;
  },
  filters(state) {
    return state.filters;
  },
};
