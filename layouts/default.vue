<script setup lang="ts">
const { $initializeParallax } = useNuxtApp();
onMounted(() => {
  $initializeParallax();
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
