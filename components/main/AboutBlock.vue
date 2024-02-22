<script setup lang="ts">

const data = ref({
  link: '/about-company',
  title: 'О нас',
  description: '<p style="text-align: justify;">\n' +
      '          &nbsp;ООО "Стройгеоресурс" приглашает к сотрудничеству строительные организации РФ.&nbsp; Предлагаем\n' +
      '          широкий ассортимент стального металлопроката как нового, так и бывшего в употреблении. Нашей основной\n' +
      '          специализацией является комплексное обеспечение строительных компаний трубами различного диаметра.&nbsp;\n' +
      '        </p>\n' +
      '\n' +
      '        <p style="text-align: justify;">\n' +
      '          &nbsp;\n' +
      '        </p>',
})
</script>

<template>

  <div class="column w35 text-pad-left">
    <div class="page text-pad-left about_widget">
      <a :href="data.link">
        <h2>
          {{ data.title }}
        </h2>
      </a>
      <div class="text" v-html="data.description"/>
    </div>
  </div>
</template>

<style scoped>

</style>
