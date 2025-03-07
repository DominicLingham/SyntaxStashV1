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
      <AuthRegistrationForm />
      <ULink to="/login"
             class="text-primary">
        I already have an account
      </ULink>
    </UCard>
</template>

<style scoped>
</style>