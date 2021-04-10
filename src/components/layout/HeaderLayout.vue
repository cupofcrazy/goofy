<template>
    <transition name="fade" appear>
        <header class="header">
            <div class="container">
                <nav class="header-nav">
                    <h4 class="header__logo"><router-link class="link" :to="{ name: 'Home' }">{{ title }}</router-link></h4>
                    <ul class="header-nav__links">
                        <li><router-link class="link" :to="{ name: 'Trending' }">Trending</router-link></li>
                        <li><router-link class="link" :to="{ name: 'Search' }">Search</router-link></li>
                        <li><router-link class="link" :to="{ name: 'Saved' }">Saved ({{ $store.state.savedGifs.length }})</router-link></li>
                    </ul>

                </nav>
                <button class="header__button" @click="toggleColorMode"></button>
            </div>
        </header>
    </transition>
</template>

<script>
export default {
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
        flex-direction: row;
    }
    &-nav__links {
        li {
            display: inline-block;
            margin: 0 1rem 0 0;
            font-size: .85rem;

            @include desktop {
                margin: 0 1.625rem 0 0;
            }
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