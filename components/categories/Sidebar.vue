<script setup lang="ts">
import {calculator} from "~/utils/calculator";

defineProps(['wrapperClass'])
const filterCollection = calculator;
</script>

<template>
  <div class="column w25" :class="wrapperClass">
    <div class="used_pipes widget vertical">
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

      <div class="title">Выберите диаметр</div>
      <div class="body">
        <NuxtLink v-for="filter in filterCollection" :to="filter.link"
           title="Применить фильтр"
        >
          {{ filter.name }}
        </NuxtLink>
        <SidebarBtn/>
      </div>
      <SidebarBanners/>
    </div>
  </div>
</template>

<style scoped>

</style>
