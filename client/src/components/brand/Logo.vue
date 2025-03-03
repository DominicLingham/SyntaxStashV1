<script setup lang="ts">
withDefaults(defineProps<{
  hideLogoText?: boolean;
}>(),{
  hideLogoText: false
});
</script>

<template>
  <div class="flex items-center justify-center">
    <img width="100px"
         class="logo"
         src="~/assets/SyntaxStashLogo-dark.svg"/>
    <span v-if="!hideLogoText"
          class="logo-text text-4xl font-extrabold text-primary">
      SyntaxStash
    </span>
  </div>
</template>

<style scoped>

</style>