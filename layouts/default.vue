<template>
  <v-app>
    <v-app-bar
      color="primary"
      class="px-4"
      dark
      max-height="64"
    >
      <v-toolbar-title class="title-app">Anime Info</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="mx-3" href="https://github.com/1995Everton/anime-info" target="_blank">
        <i class="fab fa-github icon-app"></i>

      </v-btn>

      <v-btn icon class="mx-3" href="https://www.npmjs.com/package/anime-info" target="_blank">
        <i class="fab fa-npm icon-app"></i>
      </v-btn>

    </v-app-bar>
    <v-content id="app"> 
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script lang="ts">

import Vue from 'vue';
import AA from '~/components/AA.vue';

interface Data {
  
}

interface Anime {
  href?: string,
  title?: string,
  icon?: string
}

export default Vue.extend({
  components:{
    AA
  },
  data () : Data{
    return {
      
    }
  }
})
</script>

<style lang="scss" scoped>
  .title-app {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
  }
  .icon-app {
    font-size: 30px;
  }
</style>
