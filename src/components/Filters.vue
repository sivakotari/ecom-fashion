<template>
  <div class="filter__wrapper">
    <div class="filter__header text-capitalize">
      <h2 class="filter__title">{{filteredTag === 'all' ? labelAllproducts : filteredTag}}</h2>
      <span class="filter__count" v-if='renderList && renderList.length'>({{renderList.length}} products)</span>
    </div>
    <div class="filter__tags-wrapper">
      <span class="filter__lable text-uppercase">{{filterLabel}}:</span>
      <div class="filter__text-wrapperr">
        <span class="filter__text cursor-pointer text-capitalize" :class="{'active': filteredTag === 'all'}" @click="filter('all')">{{labelAllproducts}}</span>
        <span class="filter__text cursor-pointer text-capitalize" :class="{'active': filteredTag === tag}" v-for="tag in filterTags" :key="tag" @click="filter(tag)">{{tag}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Filters',
  methods: {
    ...mapActions(['filterByTag']),
    filter(tag) {
      if(this.filteredTag !== tag) this.filterByTag(tag);
    }
  },
  computed: {
    ...mapGetters(['filterTags', 'filterLabel', 'labelAllproducts', 'filteredTag', 'renderList'])
  },
  mounted() {
    // this.getFilterTags();
  }
}
</script>

<style lang="scss">
.filter__wrapper {
  margin: 0 rem(25);
  padding: rem(20) 0;
  border-bottom: 1px solid var(--color-separator);
}
.filter__lable {
  margin-inline-end: rem(15);
  font-size: var(--fs-16);
  font-weight: var(--fw-700);
  line-height: rem(42);
}
.filter__text {
  margin-inline-end: rem(8);
  margin-block-start: rem(3);
  margin-block-end: rem(3);
  font-size: var(--fs-12);
  font-weight: var(--fw-500);
  display: inline-block;
  padding: rem(10) rem(20);
  border-radius: rem(50);
  border: 1px solid var(--color-border);
  color: var(--color-subtitle);
}
.filter__tags-wrapper {
  margin-block-end: rem(6);
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
}
.filter__header {
  margin-block-end: rem(24);
}
.filter__title {
  font-size: var(--fs-21);
  font-weight: var(--fw-700);
  margin: 0;
  display: inline-block;
}
.filter__count {
  font-size: var(--fs-21);
  font-weight: var(--fw-300);
  display: inline-block;
  margin-inline-start: rem(8);
  color: var(--color-subtitle);
}
</style>
