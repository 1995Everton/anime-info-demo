<template>
  <v-app>
    <v-content id="app">
      <!-- <a-slide-menu>
        <h1 class="a-title">Anime Info</h1>
        <span>Animes</span>
        <a-a
          class="ml-2" 
          v-for="anime of animes" 
          :key="anime.title"
          :href="anime.href">
          <img src="https://image.flaticon.com/icons/png/512/1181/1181922.png" height="25">
          <span v-html="anime.title"></span>
        </a-a>
        <span>Documentation</span>
        <a class="ml-2" href="https://github.com/1995Everton/anime-info" target="_blank"><i class="fab fa-github"></i><span>Repository</span></a>
        <a class="ml-2" href="https://www.npmjs.com/package/anime-info" target="_blank"><i class="fab fa-npm"></i><span>Npm</span></a>

      </a-slide-menu> -->
      
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script lang="ts">

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import Vue from 'vue';
import AA from '~/components/AA.vue';

interface Data {
  animes: Anime[]
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
      animes: [
        {
          href: '/',
          title: 'Naruto',
          icon: 'fa fa-user'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
  .a-title {
    margin-bottom: 4px;
    font: 39px/1 "Lobster", cursive;
    text-shadow: 2px 1px 0 #fbfae8, 5px 4px 0 coral;
    margin: 0;
  }
</style>
