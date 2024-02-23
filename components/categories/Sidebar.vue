<script setup lang="ts">
import {calculator} from "~/utils/calculator";

defineProps(['wrapperClass'])
const filterCollection = calculator;
</script>

<template>
  <div class="column w25" :class="wrapperClass">
    <div class="used_pipes widget vertical">
      <a class="btn red icon-calculator fancybox_dialog" href="#pipe-calculator"> Калькулятор по трубам</a>

      <div class="title">Выберите диаметр</div>
      <div class="body">
        <a v-for="filter in filterCollection" :href="filter.link"
           title="Применить фильтр"
        >
          {{ filter.name }}
        </a>
        <SidebarBtn/>
      </div>
      <SidebarBanners/>
    </div>
  </div>
</template>

<style scoped>

</style>
