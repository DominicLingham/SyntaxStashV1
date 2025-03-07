<script setup lang="ts">
import type {DashboardLink} from "~/types/components";

const links: DashboardLink[] = [
  {
    label: 'Account',
    to: '/account',
    description: 'This is the account section, click the box to go there',
    icon: 'i-material-symbols:account-box'
  },
  {
    label: 'Journal',
    to: '/my-journal',
    description: 'Link to journal',
    icon: 'i-bxs:show'
  },
  {
    label: 'Resources',
    to: '/my-resources',
    description: 'Link to resources',
    icon: 'material-symbols:dashboard'
  }
]

</script>

<template>
  <div class="m-4 w-full flex justify-around items-center gap-4">
    <DashboardLink v-for="link in links"
                   :key="link.label"
                   :label="link.label"
                   :icon="link.icon"
                   :to="link.to">
      <div v-if="link.description"
           v-html="link.description" />
    </DashboardLink>
  </div>
</template>

<style scoped>

</style>