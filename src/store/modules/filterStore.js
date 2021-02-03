export default {
  state: {
    store: 'productsStore',
    list: 'productsList',
    label: 'Filters',
    labelAllproducts: 'All products',
    filteredList: []
  },
  actions: {
    filterByTag({commit}, tag) {
      commit('loading', true);
      const wait = time => new Promise((resolve) => setTimeout(resolve, time));
      wait(500).then(() => {
        commit('filterByTag', tag);
        commit('loading', false);
      });
    }
  },
  mutations: {
  },
  getters: {
    filterLabel: state => state.label,
    labelAllproducts: state => state.labelAllproducts
  }
}