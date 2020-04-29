<template>
  <v-combobox
    v-model="select"
    :items="characters"
    filled
    label="Selecione o personagem"
    @input="$emit('input', $event)"
  >
    <!-- <template v-slot:label>
            <h3>Selecione o personagem</h3>
        </template> -->
    <template v-slot:selection="{ item }">
      <h2>{{ item }}</h2>
    </template>
  </v-combobox>
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
