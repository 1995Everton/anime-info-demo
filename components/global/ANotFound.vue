<template>
  <div class="not-found">
    <div class="not-found__maincontainer">
      <div v-for="(data, i) in [images, images, images]" :key="i" class="bat">
        <img v-for="(item, index) in data" :key="index" v-bind="item" />
      </div>
      <img class="foregroundimg" :src="background" />
    </div>
    <h1 class="not-found__errorcode">Not Found</h1>
    <div class="not-found__errortext">
      Não foi possivel obter os dados do personagem
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    background:
      'https://www.blissfullemon.com/wp-content/uploads/2018/09/HauntedHouseForeground.png',
    images: [
      {
        class: 'wing leftwing',
        src:
          'https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png'
      },
      {
        class: 'body',
        src:
          'https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-body.png'
      },
      {
        class: 'wing rightwing',
        src:
          'https://www.blissfullemon.com/wp-content/uploads/2018/09/bat-wing.png'
      }
    ]
  })
});
</script>

<style lang="scss" scoped>
@import '~/assets/components/not-found.scss';
</style>
