<template>
    <div class="lazy-media" :style="{ paddingTop: `calc(100% / ${aspectRatio})` }">
        <img class="lazy-media__image" :alt="alt" v-lazy="src">
        <div class="lazy-media__placeholder" :style="{ backgroundColor: color }"></div>
    </div>
</template>

<script>
export default {
    name: 'LazyImage',
    props: {
        color: {
            type: String,
            required: false, 
            default: '#3b3b3b'
        },
        aspectRatio: {
            type: Number,
            required: false,
        },
        src: {
            type: String,
            required: false
        },
        alt: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
.lazy-media {
    position: relative;
    overflow: hidden;
    &__image {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        
 
        &[lazy=loaded]+ .lazy-media__placeholder {
            opacity: 0;
            visibility: hidden;
        }
    }
    &__placeholder {
        opacity: 1;
        visibility: visible;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        transition: all .3s ease-out;
        transition-delay: .3s;
    }
}
</style>