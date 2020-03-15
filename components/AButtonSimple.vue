<template>
    <div class='container' @click="$emit('click')">
        <a class="btn-3d red" v-html="title"></a>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        title: {
            type: String,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>

    $btn-box-height: 8px;

    .container {
        text-align: center;
    }
    .btn-3d {
        display: inline-block;
        width: 89%;
        height: 2rem;
        line-height: 2.2rem;
        color: #fff;
        font-size: 1.5rem;
        border-radius: 0.5rem;
    }

    .btn-3d:active {
        transform: translate3d(0, $btn-box-height + 1, 0);
    }
    .btn-3d.red {
        background-color: #e74c3c;
        box-shadow: 0 0 0 1px #c63702 inset,
                    0 0 0 ($btn-box-height / 4) rgba(255, 255, 255, 0.15) inset,
                    0 $btn-box-height 0 0 #C24032,
                    0 $btn-box-height 0 1px rgba(0, 0, 0, 0.4),
                    0 $btn-box-height $btn-box-height 1px rgba(0, 0, 0, 0.5);
    }
    .btn-3d.red:active {
        box-shadow: 0 0 0 1px #c63702 inset,
                    0 0 0 ($btn-box-height / 4) rgba(255, 255, 255, 0.15) inset,
                    0 0 0 1px rgba(0, 0, 0, 0.4);
    }

</style>