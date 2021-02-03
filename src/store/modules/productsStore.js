// const PRODUCTS_API = "https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json";
import mockdata from '../../mockdata.json';

export default {
  state: {
    productsList: {},
    renderList: {},
    inCartList: [],
    filteredTag: 'all',
    filterTags: [],
    filteredList: {},
    placeholdersCount: 10,
    loading: false,
    selectVarientLabel: 'Select Size',
    addToCartLabel: 'Add To Cart',
    sizeVarientMap: {
      'small': 'sm',
      'medium': 'm',
      'large': 'l',
      "US 6": 'U6',
      "US 7": 'U7',
      "US 8": 'U8',
      "US 9": 'U9',
      "US 10": 'U10',
      "US 11": 'U11',
      "US 12": 'U12',
      "US 13": 'U13',
      "US 14": 'U14',
    }
  },
  actions: {
    async fetchProducts({commit}){
      commit('loading', true);

      // const productsList = await fetch(PRODUCTS_API, {
      //     headers : { 
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //      }
      //   });
      // const productsListJson = await productsList.json();
      // // console.log(productsListJson);
      // console.log(productsListJson);
      // // console.log(JSON.parse(productsList));

      const wait = time => new Promise((resolve) => setTimeout(resolve, time));
      wait(1500).then(() => {
        commit('setProducts', mockdata);
        commit('loading', false);
      });
    },
    addToCart({commit}, payload) {
      commit('addToCart', payload);
    }
  },
  mutations: {
    setProducts: (state, payload) => {
      state.productsList['all'] = payload;
      state.renderList = payload;

      state.filterTags = payload.reduce((acc,item) => {
        if(acc.indexOf(item.tag) === -1) {
          acc.push(item.tag);
        }
        return acc;
      },[]);
    },
    loading: (state, payload) => {
      state.loading = payload;
    },
    addToCart: (state, payload) => {
      state.inCartList = state.inCartList.filter(item => item.id !== payload.id);
      state.inCartList.push(payload);
    },
    filterByTag: (state, tag) => {
      state.filteredTag = tag;
      if(state.productsList[tag]){
        state.renderList = state.productsList[tag];
      }
      else {
        if(tag !== 'all') {
          const list = state.productsList['all'].filter(item => item.tag == tag);
          state.productsList[tag] = list;
          state.renderList = list;
        }
      }
    }
  },
  getters: {
    productsList: state => state.productsList,
    renderList: state => state.renderList,
    inCartList: state => state.inCartList,
    filteredTag: state => state.filteredTag,
    filterTags: state => state.filterTags,
    placeholdersCount: state => state.placeholdersCount,
    sizeVarientMap: state => state.sizeVarientMap,
    loading: state => state.loading,
    selectVarientLabel: state => state.selectVarientLabel,
    addToCartLabel: state => state.addToCartLabel,
  }
}