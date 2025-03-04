<script setup lang="ts">
import DarkModeToggle from "~/components/utils/DarkModeToggle.vue";

</script>

<template>
  <div class="p-4 w-full flex justify-between">
    <NuxtLink to="/">
      <BrandLogo/>
    </NuxtLink>
    <div class="flex gap-4 items-center">
      <UButton to="/login">Login</UButton>
      <DarkModeToggle/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  color: red;

  &-text {
    @media(max-width: 991px) {
      display: none;
    }
  }
}
</style>