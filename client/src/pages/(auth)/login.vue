<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>

<template>
    <UCard class="auth-card">
      <template #header>
        <NuxtLink to="/">
          <BrandLogo hide-logo-text />
        </NuxtLink>
      </template>
      <AuthOAuthLogin />
      <UDivider label="OR" />
      <AuthLoginForm />
      <div class="flex gap-1 justify-center mt-4">
        <p>Need an account?</p>
        <ULink to="/register" class="text-primary font-semibold">Register</ULink>
      </div>
    </UCard>
</template>

<style scoped>
</style>