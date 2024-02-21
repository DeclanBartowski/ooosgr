<script setup lang="ts">
  const data = ref({
    name:'О компании',
    img:'https://ooosgr.ru/upload/about_company1.jpg',
    imgList:'https://ooosgr.ru/upload/about_company2.png',
  })
</script>

<template>
  <div class="parallax_cont about_cont">
    <div class="parallax" data-parallax-velocity="1.093189964157706"><img :alt="data.name" :src="data.img" style="width: 1260px; height: 1000px; top: -1352.28px;"></div>

    <div class="text">
      <h1 class="white">{{ data.name }}</h1>
      <img :alt="data.name" :src="data.imgList" style="width: 1097px; height: 240px;"></div>
  </div>
</template>

<style scoped>

</style>
