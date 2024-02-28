<script setup lang="ts">
defineProps(['className']);
const btnData = {
  link: '/balks',
  text: 'балка б/у, швеллер б/у, лист б/у, уголок б/у',
}
</script>

<template>
  <div class="info_link" :class="className">
    <NuxtLink :to="btnData.link"><span>В наличии:</span>{{ btnData.text }}</NuxtLink>
  </div>
</template>

<style scoped>

</style>
