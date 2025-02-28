<script setup lang="ts">
withDefaults(defineProps<{
  hideLogoText?: boolean;
}>(),{
  hideLogoText: false
});
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === 'dark');
</script>

<template>
  <div class="flex items-center justify-center">
    <img v-if="isDark"
         width="100px"
         class="logo"
         src="~/assets/SyntaxStashLogo-dark.svg"/>
    <img v-else
         width="100px"
         class="logo"
         src="~/assets/SyntaxStashLogo-light.svg"/>
    <span v-if="!hideLogoText"
          class="logo-text text-4xl font-extrabold text-primary">
      SyntaxStash
    </span>
  </div>
</template>

<style scoped>

</style>