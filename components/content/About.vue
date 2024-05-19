<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1
      class="font-testimonial text-white-shadow text-center text-4xl font-bold"
    >
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-light italic text-muted">
      <ContentSlot :use="$slots.description" />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div
      class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <AboutProfilePicture />
      <div class="relative flex flex-col gap-3 sm:ml-4">
        <div class="flex flex-col gap-4 text-main">
          <ContentSlot :use="$slots.intro" />
        </div>
      </div>
    </div>
    <Divider class="my-8" />
    <div class="flex flex-col gap-3">
      <div class="flex flex-row justify-between">
        <div class="mb-6 flex flex-col gap-1">
          <h3 class="text-white-shadow font-testimonial text-3xl font-bold">
            <ContentSlot :use="$slots.stack_title" />
          </h3>
          <ContentSlot
            :use="$slots.stack_description"
            class="text-sm text-muted"
          />
        </div>
        <div class="mb-6 flex flex-col text-end gap-1">
          <h3 class="text-white-shadow font-testimonial text-3xl font-bold">
            {{ highlightIconName }}
          </h3>
          <p v-if="highlightIconExperience !== ''" class="text-sm text-muted">
            {{ highlightIconExperience }} years of experience
          </p>
        </div>
      </div>
      <div class="flex flex-wrap gap-4 justify-center">
        <AboutStackItem
          v-for="icon in stack!.icons"
          :key="icon.name"
          :icon
          @mouseenter="
            handleIconHover(icon.name, icon.yearStarted, icon.yearEnded)
          "
          @mouseleave="handleIconExit"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: stack } = await useAsyncData("stack", () =>
  queryContent("/stack").findOne(),
);

const highlightIconName = ref("");
const highlightIconExperience = ref("");

const handleIconHover = (
  iconName: string,
  yearStarted: number,
  yearEnded: number,
) => {
  if (iconName !== "") {
    highlightIconName.value = iconName;
    let endYear: number;
    if (yearEnded) endYear = yearEnded;
    else endYear = new Date().getFullYear();
    highlightIconExperience.value = String(endYear - yearStarted + 1);
  } else highlightIconName.value = "";
};

const handleIconExit = () => {
  highlightIconName.value = "";
  highlightIconExperience.value = "";
};
</script>
