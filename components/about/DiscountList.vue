<script setup lang="ts">
const data = ref({
  title: 'ВЫ ВСЕГДА ПОЛУЧИТЕ<br>\n' +
      '      ДОПОЛНИТЕЛЬНУЮ СКИДКУ',
  items: [
    {
      img: 'https://ooosgr.ru/upload/icon_car-2x.png',
      text: '<p style="margin-left: 85px;">Если вы заказываете продукцию<br>\n' +
          '        от двух машин и более.</p>',
    },
    {
      img: 'https://ooosgr.ru/upload/icon_AB.png',
      text: '<p style="margin-left: 85px;">Если вы заказываете транзитом б/у трубу с места демонтажа,<br>\n' +
          '        минуя наш склад.</p>',
    },
    {
      img: 'https://ooosgr.ru/upload/icon_paper.png',
      text: '<p style="margin-left: 85px;margin-top: 5px;">Если вы предоставите счет иной компании<br>\n' +
          '        с ценой ниже нашей на аналогичную позицию.</p>',
    },
    {
      img: 'https://ooosgr.ru/upload/icon_infinite.png',
      text: '<p style="margin-left: 85px;">Вы уверенно получаете дополнительные скидки,<br>\n' +
          '        являясь нашим постоянным партнером.</p>',
    },
  ]
})
</script>

<template>
  <div class="column">
    <h2 class="big">{{ data.title }}</h2>
    <div v-for="item in data.items" class="clearfix" style="margin-bottom: 0px;">
      <img v-if="item.img" alt="" class="float_left" :src="item.img">
      <span v-html="item.text"/>
    </div>
  </div>
</template>

<style scoped>

</style>
