<script setup lang="ts">
const btnData = {
  link: '/balks',
  text: 'балка б/у, швеллер б/у, лист б/у, уголок б/у',
}
</script>

<template>
  <div class="info_link">
    <a :href="btnData.link"><span>В наличии:</span>{{ btnData.text }}</a>
  </div>
</template>

<style scoped>

</style>
