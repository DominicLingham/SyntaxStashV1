<script setup lang="ts">
import {useSession} from "~/lib/auth-client";

definePageMeta({
  layout: "auth",
})

const session = useSession();
</script>

<template>
  <div>
    <h2 class="text-2xl">WELCOME!</h2>
    <pre>{{session}}</pre>
  </div>
</template>

<style scoped>

</style>