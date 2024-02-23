<script setup lang="ts">
  const data =ref({
    img:'https://ooosgr.ru/upload/about_company3.jpg',
    title:'Партнерам',
    text:'<p>В нашей организации действует программа для парнеров-демонтажников любых регионов, а также строительных компаний, на балансе которых после завершения строительства остались излишки стальной трубы, подлежащей реализации. Наши складские площади позволяют принять на ответственное хранение с возможностью реализации Вашу стальную трубу. Если Вас интересует оперативная продажа с нашего склада нашими специалистами, звоните, мы готовы оказать содействие. Если предлагаемая Вами позиция нам окажется интересной, мы готовы у Вас ее попросту выкупить сразу в деньги, не предлагая услуги хранения-реализации. Все вопросы по каждому Вашему предложению готовы обсуждать при личном контакте, звоните!</p><p>&nbsp;</p>',
    reqTitle:'реквизиты нашей организации',
    reqItems:[
      {
        name:'Наименование организации',
        value:'ООО «СтройГеоРесурс»',
        type:'text',
      },
      {
        name:'Юридический адрес',
        value:'117105, Город Москва, вн.тер.г. муниципальный округ Нагатино-Садовники, ул Нагатинская, д.1',
        type:'text',
      },
      {
        name:'Фактический адрес',
        value:'117105, Город Москва, вн.тер.г. муниципальный округ Нагатино-Садовники, ул Нагатинская, д.1',
        type:'text',
      },
      {
        name:'ИНН/КПП организации',
        value:'7724431131/772401001',
        type:'text',
      },
      {
        name:'№ ОГРН',
        value:'1187746191621 от 21.02.2018 г.',
        type:'text',
      },
      {
        name:'ОКПО',
        value:'25358145',
        type:'text',
      },
      {
        name:'ОКАТО',
        value:'45296571000',
        type:'text',
      },
      {
        name:'Генеральный Директор',
        value:'Шульгина Надежда Сергеевна',
        type:'text',
      },
      {
        name:'Телефон/факс',
        value:'+7 (495) 777-36-46',
        type:'phone',
      },
      {
        name:'Наименование банка',
        value:'АО «АЛЬФА-БАНК» (г. Москва) и ПАО «Сбербанк России»',
        type:'text',
      },
      {
        name:'Расчетный счет',
        value:'40702810902360002016 и 40702810738000235610',
        type:'text',
      },
      {
        name:'Корр/счет',
        value:'30101810200000000593 и 30101810400000000225',
        type:'text',
      },
      {
        name:'БИК',
        value:'044525593 и 044525225',
        type:'text',
      },
    ],
    phone:'+7 (495) 777-36-46',
    warning:'Внимание! При выставлении документов в наш адрес просим заполнять реквизиты полностью (ОКПО, р/с, к/с и прочие), в соответствии с действующим Налоговым кодексом РФ.',
    reqFile:'https://ooosgr.ru/upload/%D0%9A%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%A1%D0%93%D0%A0(%D0%BD%D0%BE%D0%B2)(1).docx',
  })
</script>

<template>
  <div class="parallax_cont about_partner">
    <div class="parallax" data-parallax-velocity="0.06399034108059161"><img alt="" :src="data.img"></div>

    <div class="text white">
      <div class="two columns">
        <div class="column text-pad-right">
          <h2 class="big white">{{data.title}}</h2>

          <div class="text" v-html="data.text"/>
          <div class="text--center">
            <p style="font-size: 30px; font-family: 'RoadRadio', Verdana, sans-serif; font-weight: bold;">Звоните: <span class="callibri_phone"><a :href="'tel:' + data.phone">
            {{data.phone}}</a></span></p>
          </div>
        </div>

        <div class="column text-pad-left">
          <h2 class="big white">{{ data.reqTitle }}</h2>

          <div class="text white" style="font-size: 14px"><table>
            <tbody>
              <tr v-for="req in data.reqItems">
                <td><b>{{ req.name }}</b></td>
                <template v-if="req.type=='phone'">
                  <td><span class="callibri_phone">{{ req.value }}</span></td>
                </template>
                <template v-else>
                  <td>{{ req.value }}</td>
                </template>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>

      <div class="two columns" style="margin-top:20px;">
        <div class="column text--center">
          <NewsMenuAbout />
        </div>

        <div class="column text-pad-left"><small style="display: inline-block;width: 350px;line-height: 1.8em">{{data.warning}}</small>

          <div class="text-pad-left is_inline_block" style="vertical-align: top;"><a :href="data.reqFile"><span class="icon-pdf left_align c-white" style="cursor: pointer"><span style="text-decoration: underline;
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: bold;
    line-height: 1.4em;">Скачать реквизиты<br>
нашей организации</span> </span></a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .about_partner {
    background: #38424e;
    color: #fff;
    height: 600px;
    margin: 0 -45px;
    padding: 50px 45px 50px 45px
  }
</style>
