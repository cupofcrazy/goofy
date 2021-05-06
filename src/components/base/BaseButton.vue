<template>
  <button class="base-button" @click="click" :disabled="disabled">
    <span class="base-button__inner">
      <slot /> 
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
  min-width: 3rem;
  min-height: 3rem;
  padding: 0 1rem;
  border: 1px solid #DDD;
  border-radius: 10rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, .5);

  &:disabled {
    opacity: .5;
  }

  &:hover:not(:disabled) {
    background-color: #DDD;
  }

  &__inner {
    
  }
}
</style>