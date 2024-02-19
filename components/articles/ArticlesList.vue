<script setup>

const articleCollection = ref({
  0: {
    title: 'Пополнение склада газовой трубой 325 диаметра',
    text: 'Коллеги, очередное большое поступление трубы на склад. Газовая труба 325*6-7 мм, отличного качества под восстановление, ...',
    img: 'https://ooosgr.ru/cache/article_prew/files/article/c88807747070f0c7a9e529f5e5ef3d5ffee95241.jpeg',
    category: {
      name: 'Новости',
      code: 'news'
    },
    type:'news',
    code:'kupit-vus-izolyacziyu',
  },
  1: {
    title: 'Купить вус изоляцию',
    text: 'ВУС или весьма усиленная изоляция отличается от обычной наличием двух-трёх и более слоёв, а также особым составом ...',
    img: 'https://ooosgr.ru/cache/article_prew/files/article/578805d7bdd34f9f50df4fba054519ac405ff215945.jpeg',
    category: {
      name: 'Статьи',
      code: 'articles'
    },
    type:'article',
    code:'kupit-vus-izolyacziyu',
  },
  2: {
    title: 'Разгрузка б/у трубы',
    text: 'Разгрузка трубы б/у 325 мм на складе по приходу с регионального демонтажа',
    img: 'https://img.youtube.com/vi/6ICe0VCZkng/mqdefault.jpg',
    video: 'https://www.youtube.com/watch?v=6ICe0VCZkng',
    category: {
      name: 'Видео нашей компании',
      code: 'video'
    },
    type:'video',
    code:'kupit-vus-izolyacziyu',
  },
  3: {
    title: 'Пополнение склада газовой трубой 325 диаметра',
    text: 'Коллеги, очередное большое поступление трубы на склад. Газовая труба 325*6-7 мм, отличного качества под восстановление, ...',
    img: 'https://ooosgr.ru/cache/article_prew/files/article/c88807747070f0c7a9e529f5e5ef3d5ffee95241.jpeg',
    category: {
      name: 'Новости',
      code: 'news'
    },
    type:'news',
    code:'kupit-vus-izolyacziyu',
  },
  4: {
    title: 'Пополнение склада газовой трубой 325 диаметра',
    text: 'Коллеги, очередное большое поступление трубы на склад. Газовая труба 325*6-7 мм, отличного качества под восстановление, ...',
    img: 'https://ooosgr.ru/cache/article_prew/files/article/c88807747070f0c7a9e529f5e5ef3d5ffee95241.jpeg',
    category: {
      name: 'Новости',
      code: 'news'
    },
    type:'news',
    code:'kupit-vus-izolyacziyu',
  },

});
</script>

<template>
  <ul class="articles_list _default">
      <ArticlesItem v-for="article in articleCollection" :key="article.id" :article="article"/>
  </ul>
</template>

<style scoped>

</style>
