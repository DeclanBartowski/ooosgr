<script setup lang="ts">
import type { AboutGarant } from '~/types/about'

defineProps<{
  garant: AboutGarant
}>()
</script>

<template>
  <div class="column">
    <h2 class="big">
      {{ garant.title }}
    </h2>
    <div class="text">
      <ul>
        <li
          v-for="item in garant.items"
          :key="item.text"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
