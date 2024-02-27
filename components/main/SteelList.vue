<script setup lang="ts">
const data = ref({
  title: 'Металлобаза трубы балки б/у - "СтройГеоРесурс"',
  items: [
    {
      img: 'https://ooosgr.ru/bundles/app/images/circle1.png?51080781afe3f2dcd50bc049a8d5083a',
      name: 'Б/у трубы <br>всегда в наличии на складе',
    },
    {
      img: 'https://ooosgr.ru/bundles/app/images/circle2.png?51080781afe3f2dcd50bc049a8d5083a',
      name: 'Собственный склад<br>в Москве',
    },
    {
      img: '/images/site/иконка котлованных работ.jpg',
      name: 'РАЗРАБОТКА КОТЛОВАНОВ<br> В МОСКВЕ И МОСКОВСКОЙ<br> ОБЛАСТИ',
    },
  ]
})
</script>

<template>
  <div class="three columns banners">
    <div
      v-for="item in data.items"
      class="column"
    >
      <div
        class="img"
        style="height: 102px;"
      >
        <img
          class="icon-image-wh-100"
          alt=""
          :src="item.img"
        >
      </div>
      <div
        class="text"
        v-html="item.name"
      />
    </div>
  </div>
</template>

<style scoped>
   .icon-image-wh-100 {
     width:100px;
     height:100px;
   }
</style>
