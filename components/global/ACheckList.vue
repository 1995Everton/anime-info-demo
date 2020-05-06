<template>
  <div class="checklist">
    <span></span><span>{{ title }}</span>
    <div class="checklist__inner">
      <div class="checklist__list">
        <div
          v-for="checklist of items"
          :key="checklist.title"
          class="checklist__item"
        >
          <div class="checklist__item__checkbox">
            <span v-if="checklist.completed">&#10004;</span>
          </div>
          <div class="checklist__item__desc">
            {{ checklist.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Checklist } from '~/models/global';
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array as () => Checklist[],
      default: () => []
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/components/checklist.scss';
</style>
