<template>
  <!-- app header includes logo, nav items and cart -->
  <header class="header__wrapper">
    <div class="header__nav flex-center border-box">
      <div class="app-logo cursor-pointer flex-center">S</div>
      <HeaderNav />
      <Cart />
    </div>
  </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import Cart from './Cart.vue'

export default {
  name: 'AppHeader',
  components: {
    HeaderNav,
    Cart
  }
}
</script>

<style  lang="scss">
.header__wrapper {
  margin-block-end: rem(70);
  z-index: 1;
}
.app-logo {
  width: rem(38);
  height: rem(38);
  border-radius: rem(5);
  background: var(--color-orange);
  color: var(--color-white);
  font-size: rem(25);
  font-weight: bold;
}
.header__nav {
  flex-direction: row;
  padding: rem(16) rem(25);
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-white);
  z-index: 1;
  box-shadow: var(--card-box-shadow);
}
</style>
