<script setup lang="ts">

import {calculator} from "~/utils/calculator";
import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";

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
  <div class="used_pipes widget main-calculator">
    <div class="title title--flex">
      <NuxtLink
        :to="calculatorData.link"
        :title="calculatorData.title"
      >
        {{ calculatorData.title }}
      </NuxtLink>
      <FancyboxComponent
        :options="{
          defaultType:'html'
        }"
      >
        <a
          data-fancybox
          class="btn red icon-calculator fancybox_dialog"
          href="#pipe-calculator"
        > Калькулятор по трубам</a>
      </FancyboxComponent>
    </div>
    <div class="body">
      <NuxtLink
        v-for="calcItem in calculatorData.items"
        :to="calcItem.link"
        :title="calcItem.name"
      >
        {{ calcItem.name }}
      </NuxtLink>
      <SidebarBtn :class-name="'_normal'" />

    </div>
    <DownloadCalculatorBtnMain :link="calculatorData.priceList" />
  </div>
</template>

<style scoped>
  .icon-pdf {
    position: absolute;
    bottom: 0;
    right: 37px;
  }
</style>
