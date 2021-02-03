<template>
  <div class='cards__wrapper'>

    <!-- show card placeholder on loading -->
    <div class='cards__container' v-if='loading'>
      <ProductPlaceholder v-for='i in placeholdersCount' :key='i' />
    </div>

    <!-- render cards on products data available -->
    <div class='cards__container' v-else>
      <ProductCard
        v-for='product in renderList'
        :key='product.id'
        :product='product'
        :currency='currency'
        @addToCart="addToCart"
        :sizeVarientMap='sizeVarientMap'
        :addToCartLabel='addToCartLabel'
        :selectVarientLabel='selectVarientLabel'
      />

      <!-- dummy cards if less product cards, for flex style support -->
      <div class="dummy" v-for='i in 6' :key='i'></div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import ProductPlaceholder from './ProductPlaceholder.vue'
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'ProductsList',
  components: {
    ProductCard,
    ProductPlaceholder
  },
  methods: {
    ...mapActions(['fetchProducts', 'addToCart'])
  },
  computed: {
    ...mapGetters([
      'productsList',
      'currency',
      'inCartList',
      'filteredTag',
      'productsToRender',
      'placeholdersCount',
      'loading',
      'sizeVarientMap',
      'selectVarientLabel',
      'addToCartLabel',
      'renderList'
    ]),
  },
  mounted() {
    this.fetchProducts();
    this.$nextTick(()=>{
      console.log('m',this.productsList,this.filteredTag,'' ,this.productsList[this.filteredTag]);

    },5000);
  },
  updated() {
  }
}
</script>

<style lang="scss">
.cards__container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: rem(15);
}
.dummy {
  width: rem(260);
  margin: 0 rem(10);
}
</style>