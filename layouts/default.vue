<script setup lang="ts">
const { $initializeParallax,$variableTitle } = useNuxtApp();
onMounted(() => {
  $initializeParallax();
  $variableTitle();
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
