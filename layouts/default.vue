<template>
  <v-app>
    <a-nav-bar></a-nav-bar>
    <v-content id="app">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <a-side-bar></a-side-bar>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ASideBar from '~/components/core/ASidebar.vue';
import ANavBar from '~/components/core/ANavBar.vue';

export default Vue.extend({
  components: {
    ASideBar,
    ANavBar
  }
});
</script>
