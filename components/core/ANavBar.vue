<template>
  <v-app-bar color="primary" class="px-4" dark max-height="64">
    <v-toolbar-title class="title-app default-font">Anime Info</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      icon
      class="mx-3"
      href="https://github.com/1995Everton/anime-info"
      target="_blank"
    >
      <i class="fab fa-github icon-app"></i>
    </v-btn>
    <v-btn
      icon
      class="mx-3"
      href="https://www.npmjs.com/package/anime-info"
      target="_blank"
    >
      <i class="fab fa-npm icon-app"></i>
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn dark text class="default-font" v-on="on">
          <v-icon left>fa-language</v-icon>
          {{ locale }}
          <v-icon right>fa-caret-down</v-icon>
        </v-btn>
      </template>
      <v-list class="default-font">
        <v-list-item
          v-for="{ title, lang } in locales"
          :key="lang"
          @click="setLang(lang)"
        >
          <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { i18n } from '~/models/global';
interface ANavbar {
  locales: i18n[];
  locale: string;
}
export default Vue.extend({
  data: (): ANavbar => ({
    locales: [],
    locale: 'Português'
  }),
  mounted() {
    this.locales = this.$store.state.locales;
    this.setButtonLang();
  },
  methods: {
    setLang(lang: string): void {
      this.$i18n.setLocale(lang);
      this.setButtonLang();
    },
    setButtonLang(): void {
      const lang: i18n = this.locales.find(
        (el) => el.lang === this.$i18n.getLocaleCookie()
      ) as i18n;
      this.locale = lang ? lang.title : 'Português';
    }
  }
});
</script>

<style lang="scss" scoped>
.title-app {
  font-size: 30px;
}
.icon-app {
  font-size: 30px;
}
</style>
