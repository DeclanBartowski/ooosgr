<script setup lang="ts">
import Repair from "~/components/Repair.vue";
import type { RepairDto } from '~/types/repair'

const { data: repairData } = await useContentFetch<RepairDto>('vosstanovlenie-trub', {
    method: 'GET'
})
useSeoMeta({
    ogTitle: () => repairData.value!.data.seo.title,
    title: () => repairData.value!.data.seo.title,
    description: () => repairData.value!.data.seo.description,
    ogDescription: () => repairData.value!.data.seo.description,
    keywords: () => repairData.value!.data.seo.keywords
})
</script>

<template>
  <div class="wrap content page common page--vosstanovlenie-trub">
    <div class="wrap_cont">
      <h1>{{ repairData.data.title }}</h1>
      <Repair :repair="repairData.data" />
    </div>
    <BitrixForm />
    <div class="push" />
  </div>
</template>

<style scoped>

</style>
