<script setup lang="ts">
const banners = ref([
  {
    img: 'https://ooosgr.ru/bundles/app/images/delivery_all_day.png?51080781afe3f2dcd50bc049a8d5083a',
    styles: 'margin: 75px 0;',
  },
  {
    img: 'https://ooosgr.ru/bundles/app/images/cool_mans.png?51080781afe3f2dcd50bc049a8d5083a',
    styles: 'margin-bottom: 30px;',
  }
])
</script>

<template>
  <img v-for="banner in banners" alt="" :src="banner.img" :style="banner.styles"/>
</template>

<style scoped>

</style>
