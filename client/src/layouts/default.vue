<script setup lang="ts">

</script>

<template>
  <div class="default-layout">
    <div>
      <LayoutNavBar/>
    </div>
    <div class="default-layout__page">
      <UContainer>
        <slot/>
      </UContainer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  min-height: 100vh;

  &__page {
    flex-grow: 1;
  }
}
</style>