<template>
  <nuxt-link :to="href" class="nuxt-link">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    href: {
      type: String,
      required: true
    }
  }
});
</script>
