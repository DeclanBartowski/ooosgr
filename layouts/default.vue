<script setup lang="ts">
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
</script>

<template>
  <div>
    <div class="main_wrapper">
      <AppHeader />
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>

</style>
