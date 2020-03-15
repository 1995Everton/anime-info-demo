<template>

    <nuxt-link :to="href">
        <slot/>
    </nuxt-link>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        href:{
            type: String,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>

</style>