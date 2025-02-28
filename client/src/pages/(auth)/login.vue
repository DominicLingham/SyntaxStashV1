<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <div>
    <h2 class="text-3xl">Login</h2>
    <NuxtLink to="/register">Register</NuxtLink>
    <AuthLoginForm />
  </div>
</template>

<style scoped>

</style>