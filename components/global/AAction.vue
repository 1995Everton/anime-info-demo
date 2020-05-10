<template>
  <v-col cols="12" class="mb-5">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="10" md="4">
        <v-combobox
          v-model="select"
          class="mt-7"
          :items="characters"
          filled
          :label="$t('input')"
          @input="$emit('input', $event)"
        >
          <template v-slot:selection="{ item }">
            <h2>{{ item }}</h2>
          </template>
        </v-combobox>
      </v-col>
      <v-col cols="10" md="4">
        <a-button @click="$emit('search')"></a-button>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    characters: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    select: ''
  }),
  mounted() {
    this.select = this.value;
  }
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: pfs-bold;
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/PFSquareSansPro-Bold.otf');
}
* {
  font-family: pfs-bold;
}
</style>

<style>
.v-label,
.v-select__selections {
  font-family: pfs-bold;
}
</style>
