<script setup lang="ts">
import Calculator from "~/components/categories/Calculator.vue";

const data = ref({
  previewBlock: {
    title: 'трубы восстановленные',
    previewTextHtml: '<p style="text-align: justify;">Наша компания работает уже много лет. Мы выполняем полный комплекс работ по восстановлению стальных труб, которые уже были в эксплуатации не один десяток лет. На все восстановленные нашими специалистами трубы дается полная гарантия. Такие трубы используются во многих сферах. Стоимость восстановительных работ намного ниже, чем покупка новых труб. Это дает существенную экономию при строительстве любых объектов.</p>\n' +
        '\n' +
        '                                    <p style="text-align: justify;">За годы работы наша компания накопила немалый опыт по восстановлению труб. Благодаря нам более 8 тыс. тонн труб вновь ввели в эксплуатацию.</p>',
    linkName: 'Смотреть трубы восстановленные',
    link: '/truby-vosstanovlennye',
    img: 'https://ooosgr.ru/upload/vosstanovlenie_trub2.jpg',
    detailText: {
      left: '<p style="text-align: justify;">В своей работе мы придерживаемся всех государственных стандартов, но при этом стараемся использовать только новые технологии. Восстановление труб производится только с применением последних инноваций. Это дает возможность добиться высокого качества работы. Восстановленные трубы подлежат дальнейшего использованию в самых разных сферах строительства.</p>\n' +
          '\n' +
          '                        <h2 style="text-align: justify;">Этапы восстановления</h2>\n' +
          '\n' +
          '                        <p style="text-align: justify;">Работы по восстановлению труб производятся в несколько этапов.</p>\n' +
          '\n' +
          '                        <p style="text-align: justify;">Сперва производятся очистные работы. Необходимо удалить с поверхности труб старый изоляционный материал, ржавчину, отложения и налет, пыль и грязь. Только потом можно приступить к укреплению структуры трубы. Для проведения очистных работ используются поршень и многоядерный скребок.</p>\n' +
          '\n' +
          '                        <p style="text-align: justify;">На следующем этапе выполняется подготовка поверхности трубы к дальнейшему ее укреплению. Для этого обязательно проводится термоабразивная обработка, которая в дальнейшем поможет избежать образованию коррозии и загрязнений. Для дополнительной защиты может также использоваться и слой цементно-песчаной изоляции.</p>\n' +
          '\n' +
          '                        <p style="text-align: justify;">На завершающем этапе трубы покрываются новым изолирующим составом. Также выполняется обрезка трубы до нужного размера и нарезка фасок.</p>',
      right: '<h2 style="text-align: justify;">Применение восстановленных труб</h2>\n' +
          '\n' +
          '                        <p style="text-align: justify;">Для восстановления подходят трубы без поврежденных под высоким давлением стенок. Для этого трубы демонтируются еще до их полного износа.</p>\n' +
          '\n' +
          '                        <p style="text-align: justify;">Восстановлению подлежат даже те трубы, которые были произведены более 20 лет назад. Второй срок эксплуатации возможен, благодаря качественной технологии их производства.</p>\n' +
          '\n' +
          '                        <p style="text-align: justify;">Несмотря на качество восстановленных труб, существуют некоторые ограничения по их дальнейшему использованию. Такие трубы уже нельзя применять при высоком давлении. Но есть много других сфер, где возможно их использовать после специальной обработки.</p>\n' +
          '\n' +
          '                        <p style="text-align: justify;">Восстановленные трубы применяются при производстве строительных конструкций, фундамента, опалубки, свай и опор. Их можно использовать при сооружении защитных коробов для трубопровода, который пролегает под автотрассами и железнодорожными путями. Многие портовые сооружения также возводятся с использованием обновленных труб.</p>\n' +
          '\n' +
          '                        <p style="text-align: justify;">Применяют восстановленные трубы и при сооружении систем водоснабжения и канализации. В частности, они используются при строительстве водонапорных станций и системы водоотведения. Трубы подходят и для подачи технической воды.</p>\n' +
          '\n' +
          '                        <p style="text-align: justify;">Найти применение восстановленным трубам можно и в бытовых целях. Из них получаются неплохие заборы и ограждения.</p>',
    }
  },
  items: [
    {
      showCalculator: false,
      title: 'трубы восстановленные',
      previewTextHtml: '<p>Современным направлением в промышленной сфере является восстановление стальных труб, которые были ранее в употреблении. Эта технология возникла неслучайно. У неё есть много неоспоримых плюсов. Основным преимуществом является низкая стоимость восстановления, составляющая ½, а то и 1/3, от цены новой трубы, учитывая схожесть характеристик двух вариантов. Другим достоинством является проверка в реальных условиях. Все изъяны и недочёты всплывают на поверхность и могут быть оперативно устранены. К потребителю стальные трубы поступают проверенными и даже более качественными в сравнении с новыми аналогами.</p>',
      linkName: 'Смотреть трубы восстановленные',
      link: '/truby-vosstanovlennye',
      img: 'https://ooosgr.ru/cache/pipe_category/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
      slider: [
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
        }
      ]
    },
    {
      showCalculator: true,
      title: 'Трубы бу',
      previewTextHtml: '<p>Мы предлагаем широкий выбор бывших в употреблении стальных <strong>труб бу</strong> в компании «СтройГеоРесурс». В нашем ассортименте имеются тонкостенные и толстостенные трубы бу различных диаметров - от 114 до 1420 мм. Мы также предоставляем услуги по очистке и восстановлению труб, а также нанесению ВУС-изоляции. Доставку заказа мы осуществляем в тот же день, а отгрузку - быстро и оперативно. Важно отметить, что в Москве и Подмосковье мы не требуем предоплаты. Стоимость указана за тонну с учетом НДС.</p>',
      linkName: 'Смотреть трубы бу',
      link: '/truby-b-u',
      img: 'https://ooosgr.ru/cache/pipe_category/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      slider: [
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        }
      ]
    },
    {
      showCalculator: false,
      title: 'Трубы лежалые',
      previewTextHtml: '<p style="text-align: justify;">Трубы, которые лежат на складе два-три года и более, называются лежалыми. Они сохраняют свои потребительские качества, но могут терять товарный вид. В результате и качество, и цена таких труб снижаются. Стоить такие трубы могут меньше новых, но больше бывших в употреблении. Применяют их обычно для технических водопроводов, вместо ограждений и в других похожих ситуациях. К сожалению, использовать лежалые трубы при сооружении нефтепроводов нельзя. Однако, это не делает их менее востребованными, в том числе, в Москве.</p><p>Цены указаны за тонну (с НДС).</p>',
      linkName: 'Смотреть трубы лежалые',
      link: '/truby-lezhalye',
      img: 'https://ooosgr.ru/cache/pipe_category/files/pipe/category/photos/7/b77ab2b7ff5d780a905f86395306ad665fc3eece.jpeg',
      slider: [
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        },
        {
          big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/6/a3901e2de000e06e33a196e381f84db27c2a5de9.jpeg',
          title:'DSC_5484',
          rel:'gallery_6'
        }
      ]
    }
  ]
})
</script>

<template>
  <div class="text">
    <div class="content pipes pipes--vosstanovlenie vosstanovlenie-cont">
      <ul class="category_list">
        <li style="list-style: none;">
          <div class="desc">
            <h1>{{ data.previewBlock.title }}</h1>

            <div
              class="text"
              v-html="data.previewBlock.previewTextHtml"
            />
            <a
              class="pipe_category_more"
              :href="data.previewBlock.link"
              :title="data.previewBlock.linkName"
            >{{
              data.previewBlock.linkName
            }}</a>
          </div>

          <div
            class="img"
            style="height: 390px;"
          >
            <img
              :alt="data.previewBlock.title"
              :src="data.previewBlock.img"
              style="width: 707px; height: 390px;"
            >
          </div>
        </li>
      </ul>
    </div>
    <div
      class="two columns"
      style="padding: 30px 0;"
    >
      <div
        class="column text-pad-right"
        v-html="data.previewBlock.detailText.left"
      />
      <div
        class="column text-pad-left"
        v-html="data.previewBlock.detailText.right"
      />
    </div>
  </div>
  <div class="wrap content page pipes">
    <ul class="category_list">
      <template v-for="item in data.items">
        <li class="archetype archetype--1280p">
          <div class="clearfix desc_cont">
            <div class="desc">
              <a
                :href="item.link"
                :title="item.linkName"
                class="title"
              >
                <h2>{{ item.title }}</h2>
              </a>

              <div
                class="text"
                v-html="item.previewTextHtml"
              />
              <a
                :href="item.link"
                :title="item.linkName"
                class="pipe_category_more"
              >
                {{ item.linkName }}
              </a>
            </div>
            <div
              class="img"
              :style="{ background: `url('${item.img}') right top / cover`, height: '385px' }"
            />
          </div>

          <div
            v-if="item.slider"
            class="gallery clearfix"
          >
            <a
              v-for="slide in item.slider"
              class="photo_thumb fancybox"
              :href="slide.big"
              :title="slide.title"
              :rel="slide.rel"
            >
              <img
                :alt="slide.title"
                :src="slide.small"
              >
            </a>
          </div>
        </li>
        <li
          v-if="item.showCalculator"
          class="archetype archetype--1280p"
        >
          <Calculator />
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>
