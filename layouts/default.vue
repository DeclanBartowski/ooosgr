<script setup lang="ts">
const { $initializeParallax,$variableTitle,$initSlidingMenus } = useNuxtApp();
onMounted(() => {
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
