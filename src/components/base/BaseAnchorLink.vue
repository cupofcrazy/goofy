<template>
  <a :href="href" target="_blank" class="anchor-link">
    <span class="anchor-link__text"><slot /></span>
  </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    href: {
      type: [ String, Object ],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.anchor-link {
  --border-radius: 6px;
  display: inline-block;
  position: relative;
  padding: .35rem 1rem;
  border: 1px solid var(--accent-color);
  border-radius: var(--border-radius);
  background-color: var(--main-color);
  color: var(--accent-color);

  &:before {
    position: absolute;
    bottom: -.25rem;
    left: 0;
    content: "";
    background-color: var(--accent-color);
    width: 100%;
    height: 1.25rem;
    border-radius: var(--border-radius);
    z-index: -1;
    border: 1px solid var(--accent-color);
  }
  &:hover {
    background-color: #eee;
  }
}
</style>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>