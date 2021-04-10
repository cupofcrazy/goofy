<template>
  <transition name="fade" mode="out-in" appear>
    <div class="tooltip">
      <div class="container">
        <div class="tooltip__info">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tooltip {
  background: rgb(0, 102, 255);
  padding: 1rem 1rem;
  display: inline-block;
  border-radius: 4px;
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem 1rem 0 0;
  z-index: 9999;

  color: #fff;
  font-size: .75rem;
}
</style>