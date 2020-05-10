<template>
  <div class="squares">
    <div v-for="square of items" :key="square.title" class="squares__item">
      <div class="squares__day">{{ square.title }}</div>
      <div class="squares__list">
        <p v-for="(value, i) of square.itens" :key="i">
          {{ value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Squares } from '~/models/global';
export default Vue.extend({
  props: {
    items: {
      type: Array as () => Squares[],
      default: () => []
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/components/squares.scss';
</style>
