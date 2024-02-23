<script setup lang="ts">
import DownloadCalculatorBtn from "~/components/parts/downloadCalculatorBtn.vue";
import {calculator} from "~/utils/calculator";

const calculatorData = ref({
  title:'Трубы бу всегда в наличии на складе',
  link: '/truby-b-u',
  priceList:'https://ooosgr.ru/files/pipe/category/5a97a18be80e79e940079c3f3b8fc169a29c9e7f9.pdf',
  description:'В случае возникновения потребности трубы нестандартного диаметра, поставка займет от двух до четырех\n' +
      '      дней.<br> Для этого Вам необходимо заполнить форму заявки, расположенную ниже, или позвонить нашим\n' +
      '      специалистам',
  items:calculator
})
</script>

<template>
  <div class="used_pipes widget _big">
    <a class="btn red icon-calculator fancybox_dialog" href="#pipe-calculator"> Калькулятор по трубам</a>

    <div class="title">
      <a :href="calculatorData.link">{{ calculatorData.title }}</a>
    </div>
    <div class="body">
      <a v-for="calcItem in calculatorData.items" :href="calcItem.link" :title="calcItem.name">
        {{ calcItem.name }}
      </a>
      <SidebarBtn/>
    </div>
    <div class="custom" v-html="calculatorData.description"/>
    <DownloadCalculatorBtn :link="calculatorData.priceList"/>
  </div>
</template>

<style scoped>

</style>
