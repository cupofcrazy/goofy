<template>
    <transition name="fade" appear>
        <header class="header">
            <div class="container">
                <h4 class="header__logo">{{ title }}</h4>

            </div>
        </header>
    </transition>
</template>

<script>
export default {
    name: 'HeaderLayout',
    data: () =>({
        title: 'giphy — client'
    })
}
</script>

<style lang="scss" scoped>
.container {
    padding: 1.5rem 1rem;
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
    }
}
</style>