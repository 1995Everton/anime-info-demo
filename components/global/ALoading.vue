<template>
  <div class="loading">
    <div class="loading__body">
      <span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="base">
        <span></span>
        <div class="face"></div>
      </div>
    </div>
    <div class="loading__longfazers">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h1>{{ $t('loading') }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import '~/assets/components/loading.scss';
</style>
