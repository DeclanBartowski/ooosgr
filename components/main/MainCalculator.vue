<script setup lang="ts">

defineProps(['trub', 'file', 'sibar_filter', 'linktext'])
const config = useRuntimeConfig()

import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";
</script>

<template>
  <div class="used_pipes widget main-calculator">
    <div class="title title--flex">
      <NuxtLink
        :to="trub.url"
        :title="trub.title"
      >
        {{ trub.title }}
      </NuxtLink>
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
    </div>
    <div class="body">
      <NuxtLink
        v-for="calcItem in sibar_filter"
        :to="calcItem.link"
        :title="calcItem.name"
      >
        {{ calcItem.name }}
      </NuxtLink>
     <SidebarBtn :class-name="'_normal'"  :data="linktext" />

    </div>
    <DownloadCalculatorBtnMain :link="`${config.public.baseURL}${file}`" />
  </div>
</template>

<style scoped>
  .icon-pdf {
    position: absolute;
    bottom: 0;
    right: 37px;
  }
</style>
