<template>
  <!-- body of whole application stats here -->
  <div class="main">
    <Filters />
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from './ProductsList.vue'
import Filters from './Filters.vue'

export default {
  name: 'ContinerMain',
  components: {
    ProductsList,
    Filters
  }
}
</script>

<style lang="scss">
    .main {
        max-width: rem(1440);
        margin: 0 auto;
    }
</style>