<template>
  <div class="notes">
    <span>{{ title }}</span>
    <div class="notes__list">{{ description }}</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
});
</script>
<style lang="scss" scoped>
@import '~/assets/components/notes.scss';
</style>
