<script setup lang="ts">
  const data =ref({
    title:'Новости',
    link:'/articles/news/',
    items:[
      {
        link:'/articles/news/popolnenie-sklada-gazovoj-truboj-325-diametra',
        title:'Пополнение склада газовой трубой 325 диаметра',
        text:'Коллеги, очередное большое поступление трубы на склад. Газовая труба 325*6-7 мм, отличного качества\n' +
            '              под восстановление, ...',
        img:'https://ooosgr.ru/cache/article_small/files/article/c88807747070f0c7a9e529f5e5ef3d5ffee95241.jpeg',
      },
      {
        link:'/articles/news/gazovaya-truba-530-8-mm',
        title:'Газовая труба 530*8 мм',
        text:'Коллеги, доступна к заказам в большом объеме, труба 530 со стенкой 8, газовка великолепного\n' +
            '              качества. Звоните, будем ...',
        img:'https://ooosgr.ru/cache/article_small/files/article/cb87c345b1a4fef9785b9274ec6d933bfa5dbf38.jpeg',
      },
      {
        link:'/articles/news/v-prodazhe-1020-truba',
        title:'В продаже 1020 труба',
        text:'В наличии 1020 труба из под пара, великолепного качества, крашенная. Стенки 10-11 мм,\n' +
            '              спиралешовная. Объем 80 тонн',
        img:'https://ooosgr.ru/cache/article_small/files/article/dc534a36d7a1617a10ddf59524a6db63e8d4ed5b.jpeg',
      },
    ],
  })
</script>

<template>
  <div class="column w100">
    <div class="latest_news latest_news--widget">
      <div class="title">
        <NuxtLink
            :to="data.title"
            :title="data.link"
        >
          {{ data.title }}
        </NuxtLink>
      </div>


      <ul class="articles_list _default">
        <li v-for="item in data.items">
          <div
              class="img"
              style="height: 116px;"
          >
            <img
                alt=""
                :src="item.img"
            >
          </div>
          <div class="desc">
            <h2>
              <NuxtLink :to="item.link">
                {{ item.title }}
              </NuxtLink>
            </h2>
            <p>{{ item.text }}</p>
          </div>
          <div class="right_align">
            <NuxtLink
                :to="item.link"
                title="Перейти на страницу статьи"
                class="more"
            >
              читать подробнее </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
 .title{
   font-size: 18px;
   font-weight: bold;
   text-align: left;
   margin-bottom: 10px;
   line-height: 1.4em;
   position: relative;
   z-index: 10;
   font-family: 'RoadRadio',Verdana,sans-serif;
 }
 .latest_news--widget .title a {
   color: #2d2f8e;
 }
 .latest_news ul li .desc h2 {
   min-height: 33px;
 }
</style>
