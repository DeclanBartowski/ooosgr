<script setup lang="ts">
defineProps(['wrapperClass'])
const filterCollection = ref([
  {
    name: '114',
    link: '/truby-b-u/truba-b-u-114',
  },
  {
    name: '159',
    link: '/truby-b-u/truba-b-u-159',
  },
  {
    name: '168',
    link: '/truby-b-u/truba-b-u-168',
  },
  {
    name: '219',
    link: '/truby-b-u/truba-b-u-219',
  },
  {
    name: '273',
    link: '/truby-b-u/truba-b-u-273',
  },
  {
    name: '325',
    link: '/truby-b-u/truba-b-u-325',
  },
  {
    name: '377',
    link: '/truby-b-u/truba-b-u-377',
  },
  {
    name: '426',
    link: '/truby-b-u/truba-b-u-426',
  },
  {
    name: '508',
    link: '/truby-b-u/truba-b-u-508',
  },
  {
    name: '530',
    link: '/truby-b-u/truba-b-u-530',
  },
  {
    name: '720',
    link: '/truby-b-u/truba-b-u-720',
  },
  {
    name: '820',
    link: '/truby-b-u/truba-b-u-820',
  },
  {
    name: '920',
    link: '/truby-b-u/truba-b-u-920',
  },
  {
    name: '1020',
    link: '/truby-b-u/truba-b-u-1020',
  },
  {
    name: '1220',
    link: '/truby-b-u/truba-b-u-1220',
  },
  {
    name: '1420',
    link: '/truby-b-u/truba-b-u-1420',
  },
])
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
