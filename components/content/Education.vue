<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  education: {
    type: Object as PropType<
      {
        degree_title: string;
        startDate: string;
        endDate: string;
        school: string;
        link: string;
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
      Education
    </h3>
    <div class="flex flex-col gap-4 text-main">
      <div
        v-for="degree in education"
        :key="degree.degree_title"
        class="flex flex-row h-fit"
      >
        <div class="flex justify-end h-full w-1/4">
          <div
            class="flex flex-col items-end mr-4 text-md text-white/60 leading-5"
          >
            <h4>{{ degree.startDate }}</h4>
            <h4>to</h4>
            <h4>{{ degree.endDate }}</h4>
          </div>
        </div>
        <div class="w-3/4 flex flex-col">
          <h3 class="font-light text-xl -translate-y-1">
            {{ degree.degree_title }}
          </h3>
          <h4 class="text-lg font-light italic text-muted -translate-y-1 mb-1">
            <a
              :href="degree.link"
              target="_blank"
              class="flex items-center w-fit"
            >
              {{ degree.school }}</a
            >
          </h4>
          <ul class="ml-4 mr-8 list-disc">
            <li
              v-for="(responsibility, index) in degree.highlights"
              :key="index"
              class="mb-4 font-medium leading-5"
            >
              {{ responsibility }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
