<template>
  <div class="cart__wrapper cursor-pointer" :data-inCart="inCartList.length" :key="inCartList.length">
    <font-awesome-icon :icon="['fas', 'shopping-cart']" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['inCartList'])
  },
}
</script>

<style  lang="scss">
.cart__wrapper {
  margin-inline-start: auto;
  position: relative;
  &:after, &:before {
    position: absolute;
    top: rem(-9);
    left: rem(14);
    background-color: var(--color-orange);
    border-radius: rem(8);
    min-width: rem(16);
    min-height: rem(16);
  }
  &:after {
    content: attr(data-inCart);
    font-size: var(--fs-12);
    font-weight: var(--fw-300);
    color: var(--color-white);
    padding: 0 rem(3);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &:before {
    content: '';
    animation: sonarWave .5s ease-out;
  }
}
.fa-shopping-cart {
  font-size: var(--fs-18);
}
@keyframes sonarWave {
  from {
    opacity: 0.5;
  }
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
