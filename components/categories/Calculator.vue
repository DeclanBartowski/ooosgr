<script setup lang="ts">
import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";
import DownloadCalculatorBtn from "~/components/parts/downloadCalculatorBtn.vue";
import {calculator} from "~/utils/calculator";
defineProps(['title', 'link', 'priceList','description', 'items','btnLink']);
</script>

<template>
  <div class="used_pipes widget _big">
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
      <NuxtLink :to="link">
        {{ title }}
      </NuxtLink>
    </div>
    <div class="body">
      <NuxtLink
        v-for="calcItem in items"
        :to="calcItem.link"
        :title="calcItem.name"
      >
        {{ calcItem.name }}
      </NuxtLink>
      <SidebarBtn :data="btnLink" />
    </div>
    <div
      class="custom"
      v-html="description"
    />
    <DownloadCalculatorBtn :link="priceList" />
  </div>
</template>

<style>

</style>
