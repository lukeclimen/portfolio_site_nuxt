<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  hobbies: {
    type: Object as PropType<
      {
        activity_name: string;
        startDate: string;
        endDate: string;
        highlights: Array<string>;
      }[]
    >,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3
      class="text-white-shadow font-testimonial text-left sm:pl-24 md:pl-32 text-3xl font-bold mb-2"
    >
      Hobbies and Activities
    </h3>
    <div class="flex flex-col gap-4 text-main">
      <div
        v-for="hobby in hobbies"
        :key="hobby.activity_name"
        class="flex flex-row h-fit"
      >
        <div class="flex justify-end h-full w-1/4">
          <div
            class="flex flex-col items-end mr-4 text-md text-white/60 leading-5"
          >
            <h4>{{ hobby.startDate }}</h4>
            <h4>to</h4>
            <h4>{{ hobby.endDate }}</h4>
          </div>
        </div>
        <div class="w-3/4 flex flex-col">
          <h3 class="font-light text-xl -translate-y-1">
            {{ hobby.activity_name }}
          </h3>
          <ul class="ml-4 mr-8 list-disc">
            <li
              v-for="(highlight, index) in hobby.highlights"
              :key="index"
              class="mb-4 font-medium leading-5"
            >
              {{ highlight }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
