<template>
  <div
    class='card'
    @mouseover="hover = true"
    @mouseleave="mouseLeave"
  >
    <!-- product image -->
    <picture>
      <source :srcset="product.image_src[0]">
      <img class="card__image" :alt="product.name" :title="product.name" :src="product.image_src[0]" width="260" height="346">
    </picture>
    
    <!-- card details -->
    <div class="card__details">
      <div class="product__top">

        <!-- product varient -->
        <div
          class="product__varient border-box"
          :style="(hover && !selected_varient) ? {display:'block'}: {display:'none'}"
        >
          <h5 class="product__varient-label">{{selectVarientLabel}}</h5>
          <span
            class="product__varient--size text-uppercase cursor-pointer flex-center"
            v-for='varient in product.options'
            :title="varient.value"
            :key='varient.id'
            @click="selected_varient = varient.value"
          >
            <!-- get alias varient names from store and populate if avaialble -->
            {{sizeVarientMap[varient.value] || varient.value}}
          </span>
          <div style="clear: both;"></div>
        </div>

        <!-- add to cart -->
        <div class="add_to_cart border-box" :style="hover && selected_varient ? {display:'block'}: {display:'none'}">
          <button @click="addToCart">{{addToCartLabel}}</button>
        </div>

        <!-- product vendor -->
        <h3 :style="hover ? {display:'none'}: {display:'block'}" class="product__vendor text-capitalize">{{product.vendor}}</h3>
      </div>

      <!-- product name -->
      <h4 class="product__name ellipsis text-capitalize">{{product.name}}</h4>

      <!-- product price -->
      <div class="product__price">
        <span class="product__price--discounted">{{currency.symbol}}{{product.price}}</span>
        <span class="product__price--mrp">{{currency.symbol}}{{product.compare_at_price}}</span>
        <!-- calculate perentage difference of 'price' and 'compare_at_price' and populate -->
        <span v-if='show_discount_perentage' class="product__price--discount-percentage text-uppercase">({{discount_perentage}}% off)</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: {
    product: Object,
    currency: Object,
    sizeVarientMap: Object,
    addToCartLabel: String,
    selectVarientLabel: String,
  },
  data: function() {
    return{
      selected_varient: '',
      hover: false,
    }
  },
  computed: {

    // calculate perentage difference of 'price' and 'compare_at_price'
    discount_perentage() {
      const discount = `${((parseInt(this.product.compare_at_price) - parseInt(this.product.price)) / parseInt(this.product.compare_at_price)) * 100}`;
      return Math.round(discount);
    },
    
    // show discount field only if 'price' < 'compare_at_price'
    show_discount_perentage () {return parseInt(this.product.price) < parseInt(this.product.compare_at_price)}
  },
  methods: {
    mouseLeave() {
      this.hover = false;
      this.selected_varient= '';
    },
    addToCart() {
      let productData = {...this.product};
      productData.selected_varient = this.selected_varient;
      this.$emit('addToCart', productData);
      this.selected_varient= ''
    }
  },
}
</script>

<style lang="scss">
.card {
  width: rem(260);
  margin: rem(10);
  height: rem(425);
  position: relative;
  &__image {
    width: auto;
    max-width: 100%;
  }
  &__details {
    padding-block-start: rem(10);
    padding-block-end: rem(10);
    margin-block-start: rem(-4);
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: var(--color-white);
  }
  &:hover{
    .card__details {
      box-shadow: var(--card-box-shadow);
    }
  }
}
.product{
  &__top {
    margin-block-end: rem(5);
  }
  &__vendor {
    color: var(--color-black);
    font-size: var(--fs-16);
    font-weight: var(--fw-700);
    margin: 0;
    padding-inline-start: rem(12);
    padding-inline-end: rem(12);
  }
  &__name {
    color: var(--color-subtitle);
    font-size: var(--fs-13);
    font-weight: var(--fw-300);
    margin: 0;
    margin-block-end: rem(4);
    padding-inline-start: rem(12);
    padding-inline-end: rem(12);
  }
  &__varient {
    width: 100%;
    padding-inline-start: rem(12);
    padding-inline-end: rem(12);
    margin-block-end: rem(12);
    &-label {
      font-size: var(--fs-12);
      margin: 0;
      margin-block-end: rem(10);
    }
    &--size {
      width: rem(32);
      height: rem(32);
      border-radius: 50%;
      border: 1px solid var(--color-border);
      float: left;
      margin-right: rem(12);
      line-height: 0;
      font-size: var(--fs-13);
      color: var(--color-black);
      font-weight: var(--fw-500);
    }
  }
  &__price {
    font-size: var(--fs-13);
    padding-inline-start: rem(12);
    padding-inline-end: rem(12);
    &--discounted {
      color: var(--color-black);
      font-weight: var(--fw-700);
      margin-inline-end: rem(5);
    }
    &--mrp {
      text-decoration: line-through;
      color: var(--color-subtitle);
      font-weight: var(--fw-300);
      margin-inline-end: rem(2);
    }
    &--discount-percentage {
      font-size: var(--fs-12);
      color: var(--color-red);
      font-weight: var(--fw-300);
    }
  }
}
.add_to_cart {
  bottom: 0;
  padding-inline-start: rem(12);
  padding-inline-end: rem(12);
  margin-block-end: rem(12);
  width: 100%;
  button {
    font-size: var(--fs-14);
    font-weight: var(--fw-500);
    width: 100%;
    border: 1px solid var(--color-subtitle);
    background-color: var(--color-white);
    padding-block-start: rem(10);
    padding-block-end: rem(10);
    border-radius: rem(3);
  }
}
</style>
