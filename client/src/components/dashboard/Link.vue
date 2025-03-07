<script setup lang="ts">
const props = defineProps<{
  to: string;
  label: string;
  icon?: string;
}>();
</script>

<template>
  <ULink v-if="to"
         :to="to"
         class="w-full h-full">
    <UCard>
      <template #header>
        <div class="flex gap-2 items-center">
          <UIcon v-if="icon"
                 :name="icon"
                 class="text-primary w-5 h-5"/>
          <p class="font-semibold">{{ label }}</p>
        </div>
      </template>
      <slot />
    </UCard>
  </ULink>
</template>

<style scoped>

</style>