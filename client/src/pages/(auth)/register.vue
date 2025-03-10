<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>

<template>
    <UCard class="w-full max-w-lg p-6">
      <template #header>
        <NuxtLink to="/">
          <BrandLogo hide-logo-text />
        </NuxtLink>
      </template>
      <AuthRegistrationForm />
      <div class="flex justify-center mt-4">
        <ULink to="/login" class="text-primary font-semibold">
          I already have an account
        </ULink>
      </div>
    </UCard>
</template>

<style scoped>
</style>