<template>
  <router-link :to="to" class="base-link">
    <span class="base-link__text"><slot /></span>
  </router-link>
</template>

<script>
export default {
  name: 'BaseAnchorLink',
  props: {
    to: {
      type: [ String, Object ],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-link {
  --border-radius: 6px;
  display: block;
  position: relative;
  padding: .35rem 1rem;
  border: 1px solid var(--accent-color);
  border-radius: 10rem;
  background-color: var(--main-color);
  color: var(--accent-color);
  
  &.router-link-exact-active {
    background-color: #EEE;
    // color: var(--main-color);
  }

  
}
</style>