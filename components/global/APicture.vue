<template>
  <div class="picture">
    <div class="picture__border">
      <img :src="getPhoto" />
      <figcaption>
        <a-button-simple
          v-for="(photo, index) of items"
          :key="photo.name"
          :title="photo.name"
          @click="changePhoto(index)"
        >
        </a-button-simple>
      </figcaption>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { GenericPhoto } from 'anime-info/dist/shared/models';
export default Vue.extend({
  props: {
    items: {
      type: Array as () => GenericPhoto[],
      default: () => []
    }
  },
  data: () => ({
    photo_select: 0
  }),
  computed: {
    getPhoto(): string | null {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const photo = this.items.find((el, index) => index === this.photo_select);
      return photo ? photo.icon : this.$store.state.image;
    }
  },
  methods: {
    changePhoto(index: number): void {
      this.photo_select = index;
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/components/picture.scss';
</style>
