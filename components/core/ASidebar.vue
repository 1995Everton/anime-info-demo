<template>
  <nav class="social">
    <ul>
      <li v-for="item in items" :key="item.title">
        <a-a :href="item.href">
          <span class="social__title">{{ item.title }}</span>
          <v-avatar class="social__avatar">
            <img :src="item.icon" />
          </v-avatar>
        </a-a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import AA from '~/components/global/AA.vue';
interface SideBar {
  title: string;
  icon: string;
  href: string;
}
export default Vue.extend({
  components: {
    AA
  },
  computed: {
    items(): SideBar[] {
      return [
        {
          title: 'Naruto',
          icon: '/anime-info-demo/images/logo/icon-naruto.png',
          href: '/'
        },
        {
          title: 'Dragon Ball Z',
          icon: '/anime-info-demo/images/logo/icon-dragonball.png',
          href: '/'
        },
        {
          title: 'One Punch Man',
          icon: '/anime-info-demo/images/logo/icon-onepunchman.png',
          href: '/'
        },
        {
          title: 'Hunter x Hunter',
          icon: '/anime-info-demo/images/logo/icon-hunterxhunter.png',
          href: '/'
        }
      ];
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/core/sidebar.scss';
</style>
