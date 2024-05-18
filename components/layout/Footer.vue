<template>
  <div class="mt-6 pb-10">
    <Divider />
    <footer
      class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 pt-6"
    >
      <Logo :size="12" />
      <span class="text-center text-sm text-muted">
        © {{ new Date().getFullYear() }}, {{ useAppConfig().footerName }} -
        {{ $t("global.all_rights_reserved") }}.
      </span>
    </footer>
  </div>
</template>
