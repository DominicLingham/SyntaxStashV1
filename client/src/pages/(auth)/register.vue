<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>

<template>
    <UCard>
      <template #header>
        <NuxtLink to="/">
          <BrandLogo hide-logo-text/>
        </NuxtLink>
      </template>
      <AuthRegistrationForm />
      <template #footer>
        <NuxtLink to="/login">Login</NuxtLink>
      </template>
    </UCard>
</template>

<style scoped>
</style>