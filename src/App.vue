<template>
  <div id="app">
    <AppHeader />
    <Banner />
    <ContinerMain />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import Banner from './components/Banner.vue'
import ContinerMain from './components/ContinerMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    Banner,
    ContinerMain
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: var(--font-family);
  background-color: var(--color-white);
}
</style>