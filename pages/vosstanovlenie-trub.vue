<script setup lang="ts">
import Repair from "~/components/Repair.vue";

const page = ref({
  title: 'Восстановление труб',
})
</script>

<template>
  <div class="wrap content page common page--vosstanovlenie-trub">
    <div class="wrap_cont">
      <h1>{{ page.title }}</h1>
      <Repair />
    </div>
    <BitrixForm />
    <div class="push" />
  </div>
</template>

<style scoped>

</style>
