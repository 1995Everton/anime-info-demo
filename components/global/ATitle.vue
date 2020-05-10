<template>
  <div class="title">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/components/title.scss';
</style>
