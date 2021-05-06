<template>
    <transition name="fade" appear>
        <header class="header">
            <div class="container">
                <nav class="header-nav">
                    <h4 class="header__logo"><router-link class="link" :to="{ name: 'Home' }">{{ title }}</router-link></h4>
                    <ul class="header-nav__links">
                        <li><base-link :to="{ name: 'Trending' }">Trending</base-link></li>
                        <li><base-link :to="{ name: 'Search' }">Search</base-link></li>
                        <li><base-link :to="{ name: 'Saved' }">Saved ({{ $store.state.savedGifs.length }})</base-link></li>
                    </ul>
                    <div class="header__menu">
                        <button class="header__menu-button" @click="openMenu">Menu</button>
                    </div>

                </nav>
            </div>
        </header>
    </transition>
</template>

<script>
import BaseLink from '../base/BaseLink.vue'

export default {
  components: { BaseLink },
    name: 'HeaderLayout',
    data: () =>({
        title: 'giphy — client'
    }),
    methods: {
        toggleColorMode() {
            document.body.classList.toggle('dark')

            if (document.body.classList.contains('dark')) {
                localStorage.setItem("theme", "dark") 
            } else {
                localStorage.removeItem("theme", "dark")
            }
        },
        openMenu() {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: 1.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header {
    background: var(--main-color);
    border-bottom: 1px solid #ccc;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: 100%;
    z-index: 1000;

    &__logo {
        font-size: 1rem;
        font-weight: 100;
        color: var(--accent-color);
        margin: 0 1rem 0 0;

        @include desktop {
            font-size: 1.625rem;
            margin: 0 1.625rem 0 0;
        }
    }

    &__button {
        width: 2.5rem;
        height: 1.25rem;
        background: var(--accent-color);
        border-radius: 10rem;
    }
    &-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
    }
    &-nav__links {
        display: none;
        @include desktop {
            display: block;
        }
        li {
            display: inline-block;
            margin: 0 1rem 0 0;
            font-size: .85rem;

            @include desktop {
                margin: 0 1.625rem 0 0;
            }
        }
    }
    &__menu {
        display: block;
        @include desktop {
            display: none;
        }
    }
}

.link {
    color: rgb(139, 139, 139);
    &.router-link-exact-active {
        color: var(--accent-color);
    }
}
</style>