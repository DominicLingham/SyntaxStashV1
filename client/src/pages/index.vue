<script setup lang="ts">

const authStore = useAuthStore();

</script>

<template>
  <h1 class="text-2xl">MAIN</h1>
  
  <pre>{{authStore.user}}</pre>
  
  <p>Logged in: {{authStore.loggedIn}}</p>
</template>

<style scoped>

</style>