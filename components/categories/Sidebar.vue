<script setup lang="ts">
import type { BusData } from '~/types/bus'

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
          data-fancybox
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

<style scoped>

</style>
