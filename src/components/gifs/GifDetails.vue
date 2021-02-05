<template>
    <transition @enter="enterTransition" @leave="leaveTransition" mode="out-in" appear>
        <div class="container">
            <div class="bg" ref="bg" @click="closeDetails"></div>
            <div class="gif" ref="gifContainer">
                <button class="button gif__close-btn" @click="closeDetails">
                    <icon-cancel />
                </button>
                <div class="gif__image">
                    <lazy-image
                        :src="gifData.images.original.url"
                        :aspectRatio="getAspectRatio(gifData.images.fixed_width_small)"
                        :alt="gifData.title"
                        color="#AAA"></lazy-image>
                </div>
                <div class="gif__info">
                    <h4 class="gif__title">{{ gifData.title }}</h4>
                    <div class="gif__user">
                        <span class="verified-icon" v-if="gifData.user && gifData.user.is_verified"><icon-check /></span><p>{{ gifData.username || 'anonymous' }}</p>
                    </div>
                </div>
                <div class="gif__controls gif__buttons">
                    <button class="base__button" @click="addToSavedGifs(gifData)">+ Add to Saved GIFS</button>
                </div>
                <div class="gif__related">
                    <lazy-image
                        v-for="relatedGif in relatedGifs"
                        :key="relatedGif.id"
                        :src="relatedGif.images.preview_gif.url"
                        :aspectRatio="getAspectRatio(gifData.images.fixed_width_small)"
                        :alt="relatedGif.title"
                        color="#EEE"></lazy-image>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import gsap from 'gsap'

import { getRelatedGifs } from '@/api'
import IconCancel from '../icons/IconCancel.vue'
import IconCheck from '../icons/IconCheck.vue'

export default {
    name: 'GifDetails',
    components: { IconCancel, IconCheck },
    props: {
        gifData: {
            type: Object
        }
    },
    data: () => ({
        tl: null,
        relatedGifs: []
    }),
    async mounted() {
        this.relatedGifs = await this.getRelatedGIFS()
    },
    methods: {
        closeDetails(e) {
            // if (e.target !== e.currentTarget) return // fire click event on current target
            this.$emit('closeDetails')
        },
        async getRelatedGIFS() {
            const gifs = await getRelatedGifs({ id: this.gifData.id, limit: 10  })
            console.log({ gifs })

            return gifs;
        },
        addToSavedGifs(gifData) {
            this.$store.dispatch('addToSavedGifs', gifData)
        },
        enterTransition(el, done) {
            this.tl = new gsap.timeline()

            this.tl.from(el, { duration: .25, autoAlpha: 0 },)
            .from(this.$refs.gifContainer, {
                duration: .75,
                yPercent: 100,
                ease: 'expo.out',
                onComplete: done
            }, '<.1')
        },
        leaveTransition(el, done) {
            this.tl = new gsap.timeline()

            this.tl.to(this.$refs.gifContainer, {
                duration: .5,
                yPercent: 100,
                ease: 'expo.out',
                onComplete: done
            }).to(this.$refs.bg, { duration: .25, autoAlpha: 0 }, '<.25')
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    display: block;
}
.container {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
}

.bg {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .75);
    cursor: pointer;
}
.gif {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80%;
    z-index: 2;
    background-color: var(--secondary-color);
    padding: .5rem;
    overflow: scroll;
    border-radius: 6px 0 0 6px;

     @include desktop {
        /* width: 50%; */
    }

    &__image {
        border-radius: 6px;
        overflow: hidden;
        width: 50%;

        @include desktop {
            width: 480px;
        }
    }
    &__title {
        margin: .5rem 0 0 0;
        width: 65%;
        font-size: 1.625rem;
        font-weight: 600;
        color: var(--accent-color);
    }
    &__user {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        color: var(--accent-color);
    }
    &__related {
        margin: 2rem 0 0 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: .5rem;

        @include desktop {
             grid-template-columns: repeat(8, 1fr);
        }
    }
    &__close-btn {
        @include center-items;
        width: 3.25rem;
        height: 3.25rem;
        background-color: var(--accent-color);
        border-radius: 10rem;
        position: absolute;
        top: .5rem;
        right: .5rem;
        transition: transform .5s ease;

        &:hover {
            transform: scale(1.1);
            transition: transform .5s ease;
        }
        &:active {
            transform: scale(0.9);
            transition: transform .15s ease;
        }
    }
}

.verified-icon {
    @include center-items;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--accent-color);
    border-radius: 10rem;
    margin-right: .5rem;
}
</style>