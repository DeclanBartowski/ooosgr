<script setup lang="ts">
  const data = ref({
    name:'О компании',
    img:'https://ooosgr.ru/upload/about_company1.jpg',
  })
</script>

<template>
  <div class="parallax_cont block-shadow about_cont">
    <div class="parallax">
      <img
        :alt="data.name"
        :src="data.img"
        style="width: 1260px; height: 1000px;"
      >
    </div>

    <div class="text">
      <h1 class="white">
        {{ data.name }}
      </h1>
      <img
        :alt="data.name"
        src="~/assets/images/about/about-company.png"
        style="width: 1097px; height: 240px;"
      >
    </div>
  </div>
</template>

<style scoped>

</style>
