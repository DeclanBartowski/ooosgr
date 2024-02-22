<script setup lang="ts">

const calculatorData = ref({
  title:'Трубы бу',
  link: '/truby-b-u',
  priceList:'https://ooosgr.ru/files/pipe/category/5a97a18be80e79e940079c3f3b8fc169a29c9e7f9.pdf',
  description:'В случае возникновения потребности трубы нестандартного диаметра, поставка займет от двух до четырех\n' +
      '      дней.<br> Для этого Вам необходимо заполнить форму заявки, расположенную ниже, или позвонить нашим\n' +
      '      специалистам',
  items:[
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
  ]
})
</script>

<template>
      <div class="used_pipes widget">
        <div class="title title--flex">
          <a
              :href="calculatorData.link"
              :title="calculatorData.title"
          >
            {{ calculatorData.title }}
          </a>
          <a
              class="btn red icon-calculator fancybox_dialog"
              href="#pipe-calculator"
          > Калькулятор по трубам</a>
        </div>
        <div class="body">
          <a v-for="calcItem in calculatorData.items" :href="calcItem.link" :title="calcItem.name">
            {{ calcItem.name }}
          </a>
          <SidebarBtn :class-name="'_normal'"/>
        </div>
        <DownloadCalculatorBtnMain :link="calculatorData.priceList"/>
      </div>



</template>

<style scoped>

</style>
