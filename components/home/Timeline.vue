<template>
  <div class="flex w-full flex-col gap-6">
    <h3 class="font-testimonial text-white-shadow text-2xl font-bold">
      Work Timeline
    </h3>
    <div class="flex w-full flex-col gap-4">
      <NuxtLink
        v-for="work in workHistory"
        :key="work.name"
        role="link"
        class="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-secondary hover:text-main"
        :to="work.startDate === 'soon' ? '/' : work.link"
        :aria-label="'go to ' + work.name + ' company website'"
        :target="work.startDate === 'soon' ? '_self' : '_blank'"
      >
        <span class="whitespace-nowrap">
          {{ work.name }}
        </span>
        <div class="mx-2 h-[0.1px] w-full bg-muted" />
        <span class="whitespace-nowrap text-muted">
          {{
            work.startDate === "soon"
              ? $t("global.soon") + "..."
              : work.startDate
          }}
        </span>
      </NuxtLink>
    </div>
    <div @click="useRouter().push('/resume')">
      <span class="font-testimonial text-white-shadow cursor-pointer text-sm">
        {{ $t("global.see_more") }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const { data: workHistory } = await useAsyncData(
  "workHistory",
  () => queryContent("/timeline").locale(locale.value).find(),
  {
    watch: [locale],
  },
);
</script>

<style scoped></style>
