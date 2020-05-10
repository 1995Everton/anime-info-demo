<template>
  <div class="btnsimple" @click="$emit('click')">
    <a class="btnsimple__content red">{{ title }}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/components/button-simple.scss';
</style>
