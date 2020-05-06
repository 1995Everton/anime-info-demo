<template>
  <div class="states">
    <div v-for="header in headers" :key="header" class="states__day">
      {{ header }}
    </div>
    <template v-for="(state, index) of states">
      <div :key="state.title" class="states__title">
        <img height="17" :src="state.src" />
        <span>{{ state.title }}</span>
      </div>
      <div
        v-for="n in items"
        :key="Math.random() * n + index"
        class="states__bubble"
        :class="{ point: n <= state.points }"
      ></div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { States } from '~/models/global';
export default Vue.extend({
  props: {
    headers: {
      type: Array as () => string[],
      default: () => ['I', 'II', 'III', 'IV', 'V']
    },
    states: {
      type: Array as () => States[],
      default: () => []
    },
    items: {
      type: Array,
      default: () => [1, 2, 3, 4, 5]
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/components/states.scss';
</style>
