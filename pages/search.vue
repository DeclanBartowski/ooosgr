<script setup lang="ts">
const route = useRoute();
const search = route.query.q;
const countItems = ref(99);
const items = ref([
  {
    position: '96',
    type: 'Страница',
    class: 'page',
    name: 'Трубы ВУС',
    link: 'https://ooosgr.ru/truby-stalnye-v-vus-izolyaczii',
    text: 'Труба ВУС изоляции: наиболее эффективное решение проблемы коррозии в трубопроводах.Коррозия – это процесс разрушения металлов и сплавов, который проходит из-за взаимодействия какого-либо вредного для металла химического, физико-химического или электрохимического с окружающей средой. Далеко не все сырье в металлургической промышленности изначально имеет хорошую антикоррозийную стойкость. Именно поэтому можно точно сказать, что коррозия – это одна из основных причин выхода из строя металлических ...',
    img: '',
    category: '',
  },
  {
    position: '97',
    type: 'Акция',
    class: 'promo',
    name: 'Трубы бу со скидкой до 20 %!',
    link: '/promos/#11',
    text: 'У нас проходит конкурс! Вы можете купить трубы бу со скидкой до 20 %! Для этого сделайте селфи с трубами и разместите его в своем профиле Инстаграм с отметкой нас. Ну и, конечно, подписывайтесь на профиль. Итоги огласим после 20 августа.',
    img: 'https://ooosgr.ru/cache/search/bundles/app/images/promo_stub.png',
    category: '',
  },
  {
    position: '98',
    type: 'Статья',
    class: 'article',
    category: {
      name: 'Новости',
      link: '/articles/news/',
    },
    name: 'Пополнение склада газовой трубой 325 диаметра',
    link: '/articles/news/popolnenie-sklada-gazovoj-truboj-325-diametra',
    text: 'Коллеги, очередное большое поступление трубы на склад. Газовая труба 325*6-7 мм, отличного качества под восстановление, длинная, ровная без поперечных швов. 5 машин, 100 тонн. Спешите!',
    img: 'https://ooosgr.ru/cache/search/files/article/c88807747070f0c7a9e529f5e5ef3d5ffee95241.jpeg',
  },
  {
    position: '99',
    type: 'Труба',
    class: 'pipe',
    category: {
      name: 'Трубы бу',
      link: '/truby-b-u',
    },
    name: '114х7,8 мм 114',
    link: '/truby-b-u/truba-b-u-114',
    text: '114х7,8 мм 114',
    img: '',
  }
]);
</script>

<template>
  <div class="wrap content page search">
    <div class="wrap_cont">
      <h1>
        <template v-if="countItems>0">
          Вы искали «{{ search }}»:
          найдено {{ countItems }} результатов
        </template>
        <template v-else>
          Вы искали «{{ search }}»: к сожалению, по Вашему запросу ничего не найдено
        </template>
      </h1>
      <div
        v-if="countItems>0"
        class="text"
      >
        <ul class="articles_list _default">
          <li
            v-for="item in items"
            :class="item.class"
          >
            <div
              class="type"
              title="Тип результата"
            >
              {{ item.position }}.{{ item.type }}
            </div>

            <div class="img">
              <img
                v-if="item.img"
                :alt="item.name"
                :src="item.img"
              >
            </div>
            <div class="desc">
              <NuxtLink
                :to="item.link"
                title="Перейти на страницу"
              >
                <h2>{{ item.name }}</h2>
              </NuxtLink>
              <div
                v-if="item.category"
                class="category"
              >
                <small>Категория</small>
                :
                <NuxtLink
                  :to="item.category.link"
                  title="Перейти на страницу категории труб"
                >
                  <small>{{ item.category.name }}</small>
                </NuxtLink>
              </div>
              <p>{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
      <Pagination v-if="countItems>0" />
    </div>
    <BitrixForm />
    <div class="push" />
  </div>
</template>

<style scoped>

</style>
