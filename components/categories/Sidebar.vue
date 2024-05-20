<script setup lang="ts">
import type { BusData } from '~/types/bus'
const route = useRoute();
defineProps<{
  wrapperClass?: string,
  data: BusData
}>()
</script>

<template>
  <div
    class="column w25"
    :class="wrapperClass"
  >
    <div class="used_pipes widget vertical">
      <FancyboxComponent
        :options="{
          defaultType:'html'
        }"
      >
        <a
          data-fancybox="calculator"
          class="btn red icon-calculator fancybox_dialog"
          href="#pipe-calculator"

        > Калькулятор по трубам</a>
      </FancyboxComponent>

      <div class="title">
        Выберите диаметр
      </div>
      <div
        v-if="data"
        class="body"
      >
        <NuxtLink
          v-for="filter in data.sibar_filter"
          :key="filter.code"
          :to="filter.link"
          title="Применить фильтр"
          :class="{ current: filter.link ==  route.path}"
        >
          {{ filter.name }}
        </NuxtLink>
        <SidebarBtn :data="data.btnLink" />
      </div>
      <SidebarBanners
        v-if="data"
        :data="data.sidebar_banner"
      />
    </div>
  </div>
</template>
