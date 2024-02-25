<script setup lang="ts">
const data = ref({
  title: 'Актуальный список закупок на весь период 2024 года',
  description: '<p style="text-align: justify;">В связи с этим, у многих может возникнуть вполне логичный вопрос: «А что делать с демонтированными стальными трубами?».</p>\n' +
      '\n' +
      '  <p style="text-align: justify;">Наша компания обеспечивает скупку стальных б/у труб на коммерческой основе. Мы готовы принять трубы на металлолом в любом состоянии. Достаточно обратиться в один из наших пунктов приёма, адреса которых вы сможете уточнить на сайте или по телефону у менеджеров нашей компании.</p>\n' +
      '\n' +
      '  <h2 style="text-align: justify;">Плюсы обращения в нашу компанию:</h2>\n' +
      '\n' +
      '  <ol>\n' +
      '    <li style="text-align: justify;">мы ориентируемся как на крупные, так и мелкие партии;</li>\n' +
      '    <li style="text-align: justify;">мы предлагаем достойные цены, превышающие средние по рынку;</li>\n' +
      '    <li style="text-align: justify;">мы индивидуально подходим к каждому клиенту и предлагаем наиболее выгодные условия сотрудничества;</li>\n' +
      '    <li style="text-align: justify;">мы работаем не только с юридическими, но и физическими лицами;</li>\n' +
      '    <li style="text-align: justify;">мы самостоятельно забираем ваши трубы в пределах Подмосковья.</li>\n' +
      '  </ol>\n' +
      '\n' +
      '  <h2 style="text-align: justify;">Условия выкупа:</h2>\n' +
      '\n' +
      '  <ul>\n' +
      '    <li style="text-align: justify;">подойдут трубы любых диаметров, вплоть до 1420 миллиметров;</li>\n' +
      '    <li style="text-align: justify;">ровный профиль, без искривлений;</li>\n' +
      '    <li style="text-align: justify;">длинна каждого отрезка не должна быть менее 6 метров;</li>\n' +
      '    <li style="text-align: justify;">отсутствие признаков радиационного заражения;</li>\n' +
      '    <li style="text-align: justify;">без отверстий от коррозии.</li>\n' +
      '  </ul>\n' +
      '\n' +
      '  <p style="text-align: justify;">В случае, если вы решили стать клиентом нашей компании и готовы предложить нам свои б/у трубы, можете смело обращаться к нашим менеджерам по телефонам или через сайт. От вас потребуется указать: &nbsp;</p>\n' +
      '\n' +
      '  <ul>\n' +
      '    <li style="text-align: justify;">технические характеристики труб: толщина металла, внутренний диаметр, внешнее покрытие, швы, сфера первичного применения и сроки эксплуатации;</li>\n' +
      '    <li style="text-align: justify;">суммарный метраж или тоннаж;</li>\n' +
      '    <li style="text-align: justify;">фотоснимки хорошего качества с разных ракурсов;</li>\n' +
      '    <li style="text-align: justify;">место, где находится продукция;</li>\n' +
      '    <li style="text-align: justify;">необходимость организации нами доставки на площадку по приему металлолома;</li>\n' +
      '    <li style="text-align: justify;">сумма, с учётом затрат на демонтаж и самовывоз, или при условии вашей доставки.</li>\n' +
      '  </ul>',
  header: [
    'Наименование',
    'Обьем',
    'Период',
    'Интересуемая цена',
    ''
  ],
  items: [
    { name: 'Труба б/у 108 мм', volume: '2000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 159 мм', volume: '4000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 219 мм', volume: '10000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 273 мм', volume: '2000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 325 мм', volume: '5000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 377 мм', volume: '2000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 426 мм', volume: '5000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 508 мм', volume: '1000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 530 мм', volume: '5000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 630 мм', volume: '1000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 720 мм', volume: '3000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 820 мм', volume: '3000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 920 мм', volume: '1000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 1020 мм', volume: '4000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 1220 мм', volume: '3000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Труба б/у 1420 мм', volume: '3000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Балка б/у 30-я (Б1, Б2)', volume: '2000 тн', date: '2024 год', price: 'Договорная' },
    { name: 'Балка б/у 40-я (Б1, Б2)', volume: '2000 тн', date: '2024 год', price: 'Договорная' }
  ]
})
</script>

<template>
  <h2>{{ data.title }}</h2>

  <table
      border="1"
      cellpadding="1"
      cellspacing="1"
      class="table_procurement archetype archetype--720p"
  >
    <colgroup>
      <col>
      <col width="150">
      <col width="200">
      <col width="225">
    </colgroup>
    <thead>
    <tr>
      <th scope="col" v-for="headItem in data.header">
        {{ headItem }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in data.items">
      <td>{{ item.name }}</td>
      <td>{{ item.volume }}</td>
      <td>{{ item.date }}</td>
      <td>{{ item.price }}</td>
      <td>
        <a
            class="is_block btn red fancybox_inline"
            href="#popup-procurement"
        >ПРЕДЛОЖИТЬ</a>
      </td>
    </tr>
    </tbody>
  </table>

  <ul class="simple-list mobile mobile--720p">
    <li v-for="item in data.items">
      <div>
        <div class="simple-list__highlight">
          {{ item.name }}
        </div>

        <div>{{ item.date }}</div>

        <div>Цена: {{ item.price }}</div>
      </div>

      <div>
        <a
            class="is_block btn red fancybox_inline"
            href="#popup-procurement"
        >ПРЕДЛОЖИТЬ</a>
      </div>
    </li>
  </ul>
  <span v-html="data.description"/>
</template>

<style scoped>

</style>
