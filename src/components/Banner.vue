<template>
  <div class="home__banner flex-center">
    <h3 class="banner__text">{{banner.text}}</h3>
    <button class="banner__action cursor-pointer">{{banner.action_text}}</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Banner',
  computed: {
    ...mapGetters(['banner'])
  }
}
</script>

<style lang="scss">
.home__banner {
  color: var(--color-white);
  background: linear-gradient(90deg, var(--color-gray) 0%, var(--color-orange) 100%);
  padding: 0 rem(15);
}
.banner__text {
  margin-block-start: rem(17);
  margin-block-end: rem(17);
  display: inline-block;
  font-size: var(--fs-16);
  font-weight: var(--fs-500);
}
.banner__action {
  padding: rem(6) rem(14);
  background-color: var(--color-white);
  border: none;
  border-radius: rem(20);
  font-size: var(--fs-13);
  font-weight: var(--fw-400);
  margin-inline-start: rem(30);
  // margin-block-start: rem(14);
  // margin-block-end: rem(14);
}
</style>
