<template>
  <v-col cols="12" class="my-12">
    <v-toolbar flat>
      <v-toolbar-title class="a-json-return">JSON de retorno</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <tree-view :data="data" :options="options"></tree-view>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    options: {
      maxDepth: 3,
      rootObjectKey: 'character',
      link: true
    }
  })
});
</script>
