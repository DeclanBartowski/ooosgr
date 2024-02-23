<script setup lang="ts">

import {calculator} from "~/utils/calculator";

const calculatorData = ref({
  title:'Трубы бу',
  link: '/truby-b-u',
  priceList:'https://ooosgr.ru/files/pipe/category/5a97a18be80e79e940079c3f3b8fc169a29c9e7f9.pdf',
  description:'В случае возникновения потребности трубы нестандартного диаметра, поставка займет от двух до четырех\n' +
      '      дней.<br> Для этого Вам необходимо заполнить форму заявки, расположенную ниже, или позвонить нашим\n' +
      '      специалистам',
  items:calculator
})
</script>

<template>
      <div class="used_pipes widget">
        <div class="title title--flex">
          <a
              :href="calculatorData.link"
              :title="calculatorData.title"
          >
            {{ calculatorData.title }}
          </a>
          <a
              class="btn red icon-calculator fancybox_dialog"
              href="#pipe-calculator"
          > Калькулятор по трубам</a>
        </div>
        <div class="body">
          <a v-for="calcItem in calculatorData.items" :href="calcItem.link" :title="calcItem.name">
            {{ calcItem.name }}
          </a>
          <SidebarBtn :class-name="'_normal'"/>
        </div>
        <DownloadCalculatorBtnMain :link="calculatorData.priceList"/>
      </div>



</template>

<style scoped>

</style>
