<template>
  <SpotlightCard white class="p-6">
    <NuxtLink :to="icon.link" target="_blank" :aria-label="icon.name + ' link'">
      <component
        :is="icon.logo"
        class="size-8 text-main"
        :font-controlled="false"
        :alt="icon.name + ' logo'"
        :filled="true"
        :aria-label="icon.name + ' logo'"
      />
    </NuxtLink>
  </SpotlightCard>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Stack } from "~/data/stack";

defineProps({
  icon: {
    type: Object as PropType<Stack>,
    required: true,
  },
});
</script>
