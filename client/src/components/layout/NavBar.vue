<script setup lang="ts">

import DarkModeToggle from "~/components/utils/DarkModeToggle.vue";
</script>

<template>
  <div class="pb-4 pt-4 w-full flex justify-between">
      <NuxtLink to="/" class="flex items-center">
        <img width="100px" class="logo" src="~/assets/SyntaxStashLogo.svg" />
        <span class="logo-text text-4xl font-extrabold text-primary">SyntaxStash</span>
      </NuxtLink>
    
    <div class="flex gap-4 items-center">
      <ULink to="/login">Login</ULink>
      <DarkModeToggle />
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