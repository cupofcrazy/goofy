<template>
    <transition name="fade" appear>
        <header class="header">
            <div class="container">
                <h4 class="header__logo">{{ title }}</h4>
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
    }

    &__button {
        width: 2.5rem;
        height: 1.25rem;
        background: var(--accent-color);
        border-radius: 10rem;
    }
}
</style>