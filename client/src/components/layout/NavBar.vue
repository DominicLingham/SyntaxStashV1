<script setup lang="ts">
import DarkModeToggle from "~/components/utils/DarkModeToggle.vue";

const authStore = useAuthStore();

</script>

<template>
  <div class="p-4 w-full flex justify-between">
    <NuxtLink to="/">
      <BrandLogo/>
    </NuxtLink>
    <div class="flex gap-4 items-center">
      <UButton v-if="!authStore.loggedIn"
               to="/login">Login</UButton>
      <UButton v-if="authStore.loggedIn"
               icon="i-material-symbols:account-circle-outline"
               to="/dashboard"
               class="dark:bg-transparent dark:text-primary"/>
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