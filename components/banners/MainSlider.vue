<script setup lang="ts">
  const data = ref({
    items:[
      {
        previewImg:'https://ooosgr.ru/cache/slide/files/slide/92f33b8ca2322ca716a0a4f3f5036c1e173445d0.jpeg',
        detailImg:'https://ooosgr.ru/cache/slide_text/files/slide/00f9b69b1303a5d4ea2f2348880fa9bc12594234.png',
      },
      {
        previewImg:'https://ooosgr.ru/cache/slide/files/slide/92f33b8ca2322ca716a0a4f3f5036c1e173445d0.jpeg',
        detailImg:'https://ooosgr.ru/cache/slide_text/files/slide/00f9b69b1303a5d4ea2f2348880fa9bc12594234.png',
      },
      {
        previewImg:'https://ooosgr.ru/cache/slide/files/slide/92f33b8ca2322ca716a0a4f3f5036c1e173445d0.jpeg',
        detailImg:'https://ooosgr.ru/cache/slide_text/files/slide/00f9b69b1303a5d4ea2f2348880fa9bc12594234.png',
      },
      {
        previewImg:'https://ooosgr.ru/cache/slide/files/slide/92f33b8ca2322ca716a0a4f3f5036c1e173445d0.jpeg',
        detailImg:'https://ooosgr.ru/cache/slide_text/files/slide/00f9b69b1303a5d4ea2f2348880fa9bc12594234.png',
      },
    ]
  })
</script>

<template>
  <div class="main slider">
    <ul class="owl-carousel js-slider">
      <li v-for="slide in data.items">
        <div class="parallax">
          <img alt="" :src="slide.previewImg">
        </div>
        <img alt="" :src="slide.detailImg">
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
