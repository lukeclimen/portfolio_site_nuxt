<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1
      class="font-testimonial text-white-shadow text-center text-4xl font-bold"
    >
      <ContentSlot :use="$slots.title" />
    </h1>
    <Divider class="mb-8 mt-2" />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
