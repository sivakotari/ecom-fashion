import Vuex from 'vuex';
import Vue from 'vue';
import baseStore from './baseStore';
import productsStore from './modules/productsStore';
import filterStore from './modules/filterStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    baseStore,
    productsStore,
    filterStore
  }
});