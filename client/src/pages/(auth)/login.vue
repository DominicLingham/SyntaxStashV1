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
      <AuthLoginForm/>
    </UCard>
</template>

<style scoped>
</style>