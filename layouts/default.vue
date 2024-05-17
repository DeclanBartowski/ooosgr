<script setup lang="ts">
import type { MainDto } from '~/types/main'

const { $initializeParallax,$variableTitle,$initSlidingMenus } = useNuxtApp();
const route = useRoute();
onMounted(() => {
  $initializeParallax();
  $variableTitle();
  $initSlidingMenus();
});
watch(() => route.name, () => {
  $initializeParallax();
  $variableTitle();
  $initSlidingMenus();
});

const { data: headfoot } = await useContentFetch<MainDto>(`main`, {
    method: 'GET'
})
</script>

<template>
  <div>
    <div class="main_wrapper">
      <AppHeader :headerdata="headfoot.data" />
      <slot />
    </div>
    <AppFooter :footerdata="headfoot.data" />
  </div>
</template>

<style scoped>

</style>
