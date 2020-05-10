<template>
  <div class="person">
    <h4>{{ title }}</h4>
    <div v-for="item of items" :key="item.title" class="savings">
      <span class="person__title">{{ item.title }}</span>
      <span class="person__amount">{{ item.value }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Person } from '~/models/global';
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array as () => Person[],
      default: () => []
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/components/person.scss';
</style>
