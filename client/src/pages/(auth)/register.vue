<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>

<template>
    <UCard class="dark:bg-transparent w-full">
      <template #header>
        <NuxtLink to="/">
          <BrandLogo hide-logo-text/>
        </NuxtLink>
      </template>
      <AuthRegistrationForm />
      <div class="flex justify-center mt-4">
      <ULink to="/login"
             class="text-primary font-semibold">
        I already have an account
      </ULink>
      </div>
    </UCard>
</template>

<style scoped>
</style>