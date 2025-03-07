<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>

<template>
    <UCard class="dark:bg-transparent">
      <template #header>
        <NuxtLink to="/">
          <BrandLogo hide-logo-text/>
        </NuxtLink>
      </template>
      <UDivider label="OR" />
      <AuthLoginForm/>
      <div class="flex gap-1">
        <p>Need an account?</p>
        <ULink to="/register" class="text-primary">Register</ULink>
      </div>
    </UCard>
</template>

<style scoped>
</style>