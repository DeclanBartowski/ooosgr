<script setup lang="ts">
const category = ref({
  template: 'balks',
  priceList: 'https://ooosgr.ru/files/pipe/category/5a97a18be80e79e940079c3f3b8fc169a29c9e7f9.pdf',
  name: 'Продажа балок б/у в Москве',
  previewTextHtml: '<p style="text-align: justify;">Двутавровые металлические балки б/у могут применяться для сборки различных металлических конструкций, а также при строительстве малоэтажных домов, вместо стандартных перемычек из железобетона. Поскольку балки выполнены из металла, в случае значительных перегрузок они будут прогибаться, в том время как конструкция из бетона сломается. Металлические двутавровые балки отличаются высокой крепостью и способностью выдерживать солидные нагрузки. Они активно применяются для укрепления стен промышленных строений, ангаров, а также небольших временных помещений.</p>',
  text:'<h2 style="text-align: justify;">Особенности</h2>\n' +
      '\n' +
      '          <p style="text-align: justify;">Двутавровые балки, которые будут использоваться снова, должны отвечать определённым требованиям:</p>\n' +
      '\n' +
      '          <ul>\n' +
      '            <li style="text-align: justify;">отсутствие сквозной коррозии и следов ржавчины на основных элементах;</li>\n' +
      '            <li style="text-align: justify;">отсутствие трещин и серьёзных повреждений;</li>\n' +
      '            <li style="text-align: justify;">сохранение необходимой жесткости;</li>\n' +
      '            <li style="text-align: justify;">отсутствие загибов и деформации, которая может повлиять на крепость балки.</li>\n' +
      '          </ul>\n' +
      '\n' +
      '          <p style="text-align: justify;">Согласно ГОСТ 2787-75, все балки, которые не отвечают указанным выше условиям, должны быть отправлены на вторичную переработку в качестве металлолома.</p>\n' +
      '\n' +
      '          <p style="text-align: justify;">Отличительной особенностью б/у балок является наличие следов эксплуатации:</p>\n' +
      '\n' +
      '          <ul>\n' +
      '            <li style="text-align: justify;">слой защитной грунтовки или краски;</li>\n' +
      '            <li style="text-align: justify;">отверстия для крепёжных элементов;</li>\n' +
      '            <li style="text-align: justify;">признаки сварочных работ.</li>\n' +
      '          </ul>\n' +
      '\n' +
      '          <p style="text-align: justify;">Все эти следы не влияют на технические и эксплуатационные характеристики балки, поэтому она может использоваться снова. В отдельных случаях они могут упростить её монтаж.</p>\n' +
      '\n' +
      '          <p style="text-align: justify;">Б/у балки имеют маркировку, аналогичную новым изделиям. Б &ndash; нормальные балки. Балка с зауженными полками обозначается буквой &laquo;У&raquo;, со средними полками &ndash; &laquo;Д&raquo;.</p>\n' +
      '\n' +
      '          <p style="text-align: justify;">Колонные балки &ndash; &laquo;К&raquo;, а те, что применяются для усиления стен в шахтах и подземных строениях &ndash; &laquo;С&raquo;. &nbsp;Балки с маркировкой &laquo;М&raquo; подходят для строительства подвесных конструкций.</p>\n' +
      '\n' +
      '          <p style="text-align: justify;">Наша компания продаёт двутавровые балки б/у из стали марок Ст092ГС и Ст3. У нашей компании имеется широкий ассортимент балок различных размеров, начиная от 10 и заканчивая 100 миллиметрами.</p>\n' +
      '\n' +
      '          <h2 style="text-align: justify;">Сфера использования и основные преимущества</h2>\n' +
      '\n' +
      '          <p style="text-align: justify;">Стальные двутавровые балки б/у применяются точно также, как и новые изделия, поскольку они сохраняют свою жёсткость. Подходят для:</p>\n' +
      '\n' +
      '          <ul>\n' +
      '            <li style="text-align: justify;">монтажа перекрытий;</li>\n' +
      '            <li style="text-align: justify;">усиления фундамента различных строений;</li>\n' +
      '            <li style="text-align: justify;">создания металлических каркасов домов, гаражей и ангаров;</li>\n' +
      '            <li style="text-align: justify;">укрепления пролётов мостов и эстакад;</li>\n' +
      '            <li style="text-align: justify;">строительства навесов для автомобильных стоянок, складских территорий, частных подворий;</li>\n' +
      '            <li style="text-align: justify;">прокладки воздушных трубопроводов.</li>\n' +
      '          </ul>\n' +
      '\n' +
      '          <p>Основной плюс балок б/у &ndash; доступная цена. Она позволяет экономить средства на строительных работах, без потерь в качестве.</p>\n' +
      '\n' +
      '          <p>Цены указаны за тонну (с НДС).</p>',
  slider: [
    {
      big: 'https://ooosgr.ru/upload/%D0%B1%D0%B0%D0%BB%D0%BA%D0%B0.jpg',
      small: 'https://ooosgr.ru/upload/%D0%B1%D0%B0%D0%BB%D0%BA%D0%B0.jpg',
      title: 'Балка',
      rel: 'gallery_5_slider',
    },
  ],
  showMenu: true,
  additionalPreviewTextHtml: '<p> Вы сможете приобрести трубу б/у с нашего склада в Москве в день Вашего обращения. Наши складские поставки б/у труб являются прямыми, непосредственно с мест демонтажа, так как мы сами осуществляем демонтажные работы в регионах России и параллельно закупаем б/у трубы с полей у организаций-партнеров, других демонтажников. В связи с этим, в нашей итоговой стоимости исключена дополнительная посредническая наценка на продукцию. Вы приобретаете товар из первых рук. </p>',
  itemsHead: [
    'Номенклатура',
    'Описание',
    'Цена',
    'Фото'
  ],
  items: [
    {
      name: 'Балка 20',
      htmlName: 'Балка 20',
      mobilePrefixName: '',
      text: 'Балка бу немерная, срезана с металлоконструкций',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        title: 'Балка 20',
        rel: 'balk13',
      }
    },
    {
      name: 'Балка 20',
      htmlName: 'Балка 20',
      mobilePrefixName: '',
      text: 'Балка бу немерная, срезана с металлоконструкций',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        title: 'Балка 20',
        rel: 'balk13',
      }
    },
    {
      name: 'Балка 20',
      htmlName: 'Балка 20',
      mobilePrefixName: '',
      text: 'Балка бу немерная, срезана с металлоконструкций',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        title: 'Балка 20',
        rel: 'balk13',
      }
    },
    {
      name: 'Балка 20',
      htmlName: 'Балка 20',
      mobilePrefixName: '',
      text: 'Балка бу немерная, срезана с металлоконструкций',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        title: 'Балка 20',
        rel: 'balk13',
      }
    },
    {
      name: 'Балка 20',
      htmlName: 'Балка 20',
      mobilePrefixName: '',
      text: 'Балка бу немерная, срезана с металлоконструкций',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        title: 'Балка 20',
        rel: 'balk13',
      }
    },
    {
      name: 'Балка 20',
      htmlName: 'Балка 20',
      mobilePrefixName: '',
      text: 'Балка бу немерная, срезана с металлоконструкций',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        title: 'Балка 20',
        rel: 'balk13',
      }
    },
    {
      name: 'Балка 20',
      htmlName: 'Балка 20',
      mobilePrefixName: '',
      text: 'Балка бу немерная, срезана с металлоконструкций',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/balk/balk/photos/13/474c187177a889984015dedce0ab6f35be77b018.jpeg',
        title: 'Балка 20',
        rel: 'balk13',
      }
    },
  ]
})
</script>

<template>
  <div class="wrap content page pipe">
    <div class="wrap_cont">
      <div class="two columns columns--adaptive">
        <Sidebar :wrapper-class="'archetype archetype--1280p'" />
        <Category :category="category" />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped>

</style>
