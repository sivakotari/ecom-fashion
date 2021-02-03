<template functional>
  <div class="placeholder__wrapper card">
    <div class="image__placeholder"></div>
    <div class="vendor__placeholder"></div>
    <div class="title__placeholder"></div>
    <div class="price__placeholder"></div>
  </div>
</template>

<script>
export default {
  name: 'ProductPlaceholder',
}
</script>

<style lang="scss">
  .image__placeholder {
    width: 100%;
    height: rem(345);
  }
  .vendor__placeholder {
    height: rem(20);
    width: 35%;
    height: rem(16);
    margin-top: rem(12);
  }
  .title__placeholder {
    height: rem(16);
    width: 100%;
    height: rem(12);
    margin-top: rem(12);
  }
  .price__placeholder {
    height: rem(20);
    width: 55%;
    height: rem(12);
    margin-top: rem(6);
  }

  .placeholder__wrapper div {
    border-radius: rem(3);
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderBg;
    animation-timing-function: linear;
    background: linear-gradient(to right, var(--color-plaveholder-start) 0%, var(--color-plaveholder-end) 20%, var(--color-plaveholder-start) 35%);
    background-size: rem(1000) 100%;
  }
  @keyframes placeHolderBg{
    0%{
      background-position: rem(-500) 0
    }
    100%{
      background-position: rem(500) 0
    }
  }
</style>