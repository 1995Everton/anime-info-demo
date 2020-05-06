<template>
  <div class="carousel">
    <span>{{ title }}</span>
    <div class="carousel__list">
      <v-carousel height="300" hide-delimiters>
        <v-carousel-item
          v-for="({ icon, name }, index) in items"
          :key="index"
          :src="icon"
        >
          <v-overlay :absolute="true" :value="true">
            <div class="subtitle carousel__title">{{ name }} Slide</div>
          </v-overlay>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { GenericPhoto } from '~/models/global';
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array as () => GenericPhoto[],
      default: () => []
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/components/carousel.scss';
</style>
