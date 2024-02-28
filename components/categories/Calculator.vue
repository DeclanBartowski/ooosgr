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
    <div class="title">
      <NuxtLink :to="calculatorData.link">
        {{ calculatorData.title }}
      </NuxtLink>
    </div>
    <div class="body">
      <NuxtLink
        v-for="calcItem in calculatorData.items"
        :to="calcItem.link"
        :title="calcItem.name"
      >
        {{ calcItem.name }}
      </NuxtLink>
      <SidebarBtn />
    </div>
    <div
      class="custom"
      v-html="calculatorData.description"
    />
    <DownloadCalculatorBtn :link="calculatorData.priceList" />
  </div>
</template>

<style scoped>

</style>
