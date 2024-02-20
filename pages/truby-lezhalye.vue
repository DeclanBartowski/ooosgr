<script setup lang="ts">
const category = ref({
  template: '',
  priceList: '',
  name: 'Трубы лежалые',
  previewTextHtml: '<p style="text-align: justify;">Трубы, которые лежат на складе два-три года и более, называются лежалыми. Они сохраняют свои потребительские качества, но могут терять товарный вид. В результате и качество, и цена таких труб снижаются. Стоить такие трубы могут меньше новых, но больше бывших в употреблении. Применяют их обычно для технических водопроводов, вместо ограждений и в других похожих ситуациях. К сожалению, использовать лежалые трубы при сооружении нефтепроводов нельзя. Однако, это не делает их менее востребованными, в том числе, в Москве.</p><p>Цены указаны за тонну (с НДС).</p>',
  slider: [
    {
      big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/7/b77ab2b7ff5d780a905f86395306ad665fc3eece.jpeg',
      small: 'https://ooosgr.ru/cache/pipe_category_big/files/pipe/category/photos/7/b77ab2b7ff5d780a905f86395306ad665fc3eece.jpeg',
      title: 'pipes_spoiled_category',
      rel: 'gallery_5_slider',
    },
    {
      big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      small: 'https://ooosgr.ru/cache/pipe_category_big/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      title: '1',
      rel: 'gallery_5_slider',
    },
    {
      big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      small: 'https://ooosgr.ru/cache/pipe_category_big/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      title: '219х9',
      rel: '2014-12-23 09',
    }
  ],
  showMenu: true,
  textHtml: '<h3 style="text-align: justify;">Характеристики, хранение и транспортировка</h3>\n' +
      '<p style="text-align: justify;">Лежалыми становятся трубы не по истечении определенного промежутка времени, а на основании того, как они хранились и транспортировались. При этом, в каждом случае вопрос решается индивидуально.</p>\n' +
      '<h3 style="text-align: justify;">Особенности хранения</h3>\n' +
      '<p style="text-align: justify;">Для того, чтобы признать хранящиеся в помещении трубы лежалыми, надо, чтобы прошло несколько лет. В случае, если трубы хранятся на улице, для этого будет достаточно несколько месяцев, за которые они утратят свой первоначальный внешний вид.</p>\n' +
      '<h3 style="text-align: justify;">Транспортировка</h3>\n' +
      '<p style="text-align: justify;">Для того, чтобы признать трубы лежалыми, достаточно и неаккуратной транспортировки, при которой повреждается внешнее покрытие. Это может существенно снизить и стоимость труб.</p>\n' +
      '<h2 style="text-align: justify;">Применение</h2>\n' +
      '<p style="text-align: justify;">Выходит, что в большинстве случаев трубы, признанные лежалыми, имеют исключительно внешние повреждения. Значит, используются они в большинстве случае тогда, когда внешний облик не имеет значения. При этом, прочность и длительность эксплуатации остается прежней. Поэтому обычно такие трубы используют в работах по установке свай, прокладке вторичных трубопроводов.</p>\n' +
      '<p style="text-align: justify;">Важно то, что никакой специальной подготовки перед установкой проводить не нужно. Достаточно просто пескоструйной поверхностной обработки, в результате которой укрепляется поверхность.</p>\n' +
      '<h2 style="text-align: justify;">Лежалые трубы: преимущества использования</h2>\n' +
      '<p style="text-align: justify;">Трубы, признанные лежалыми, продаются и покупаются довольно часто. Причиной тому является ряд преимуществ. Среди них:</p>\n' +
      '<ul style="text-align: justify;">\n' +
      '<li>богатый выбор моделей (покупатель может отыскать трубы любого диаметра);</li>\n' +
      '<li>высокое качество (продавец имеет все необходимые документы, в том числе – сертификаты);</li>\n' +
      '<li>низкие цены (покупатель может подбирать нужные трубы не только исходя из качества, внешнего вида и технических параметров, но и с учетом своего бюджета);</li>\n' +
      '<li>сохранение потребительских качеств (трубы не являются бывшими в употреблении, что гарантирует сохранение прочностных качеств и предупреждает возникновение дефектов);</li>\n' +
      '<li>хорошие условия хранения (трубы, признанные лежалыми, хранятся на складах, что позволяет сохранять качество на высоком уровне).</li>\n' +
      '</ul>\n' +
      '<h2 style="text-align: justify;">Почему лежалые трубы выгодно покупать у нас</h2>\n' +
      '<p style="text-align: justify;">Наша компания хранит трубы, признанные лежалыми, на складах, в условиях, которые соответствуют актуальным требованиям и нормам. Это помогает сохранять их качество на высоком уровне. К тому же, они никогда не были в употреблении и не проходили восстановительных процедур. В результате низкая цена сопровождается низким уровнем их износа.</p>\n' +
      '<p style="text-align: justify;">Наши трубы поставляются с документами производителя. Это гарантирует хорошее качество и предупреждает использование не по назначению. Кроме того, такие трубы можно использовать сразу после доставки, будучи уверенным в том, что они не имеют повреждений.</p>\n' +
      '<p style="text-align: justify;">Покупка в нашей компании позволяет очень хорошо сэкономить в тех случаях, когда внешний облик трубы не имеет значения, как и то, сколько лет она пролежала на складе. К тому же, мы осуществляем доставку в нужное время и место, специальным транспортом, с учетом требований техники безопасности и сохранением гарантии.</p>\n' +
      '<p style="text-align: justify;">На этапе консультации наши специалисты подробно расскажут о товаре, помогут подобрать оптимальный вариант и оформят заказ. Для этого достаточно просто позвонить по нашему номеру телефона.</p>',
  itemsHead: [
    'Диаметр',
    'Описание',
    'Цена',
    'Фото'
  ],
  items: [
    {
      name: '325х8',
      htmlName: '325<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Прокат 2017 года (ГОСТ 10704-91, сталь 09Г2С, группа В)',
      priceFormated: '0 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        title: '325×20 мм',
        rel: 'pipe47',
      }
    },
    {
      name: '325х8',
      htmlName: '325<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Прокат 2017 года (ГОСТ 10704-91, сталь 09Г2С, группа В)',
      priceFormated: '0 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        title: '325×20 мм',
        rel: 'pipe47',
      }
    },
    {
      name: '325х8',
      htmlName: '325<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Прокат 2017 года (ГОСТ 10704-91, сталь 09Г2С, группа В)',
      priceFormated: '0 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        title: '325×20 мм',
        rel: 'pipe47',
      }
    },
    {
      name: '325х8',
      htmlName: '325<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Прокат 2017 года (ГОСТ 10704-91, сталь 09Г2С, группа В)',
      priceFormated: '0 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        title: '325×20 мм',
        rel: 'pipe47',
      }
    },
    {
      name: '325х8',
      htmlName: '325<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Прокат 2017 года (ГОСТ 10704-91, сталь 09Г2С, группа В)',
      priceFormated: '0 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        title: '325×20 мм',
        rel: 'pipe47',
      }
    },
    {
      name: '325х8',
      htmlName: '325<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Прокат 2017 года (ГОСТ 10704-91, сталь 09Г2С, группа В)',
      priceFormated: '0 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        title: '325×20 мм',
        rel: 'pipe47',
      }
    },
    {
      name: '325х8',
      htmlName: '325<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Прокат 2017 года (ГОСТ 10704-91, сталь 09Г2С, группа В)',
      priceFormated: '0 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/45/fafbb141aa61381b23ac49fb2a1951c7bf4a763d.jpeg',
        title: '325×20 мм',
        rel: 'pipe47',
      }
    },
  ]
})
</script>

<template>
  <div class="wrap content page pipe">
    <div class="wrap_cont">
      <div class="two columns columns--adaptive">
        <Sidebar/>
        <Category :category="category"/>
      </div>
    </div>
  </div>
  <div class="push"></div>
</template>

<style scoped>

</style>
