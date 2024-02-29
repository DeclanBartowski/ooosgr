<script setup lang="ts">

const data = ref({
  link: '/about-company',
  title: 'О нас',
  description: '<p style="text-align: justify;">«ООО "Стройгеоресурс" выделяет несколько основных направлений в своей деятельности. Наша компания специализируется на демонтаже трубопроводов различных назначений и поставке стальных труб бывших в употреблении на строительные объекты. Кроме того, мы предлагаем широкий ассортимент сортового металлопроката как нового, так и бывшего в употреблении. Нашей основной специализацией является комплексное обеспечение строительных объектов. Стальная труба бу. Балка бу. Сортовой металлопрокат.</p>',
})
</script>

<template>
  <div class="page text-pad-left about_widget">
    <NuxtLink :to="data.link">
      <h2>
        {{ data.title }}
      </h2>
    </NuxtLink>
    <div
      class="text"
      v-html="data.description"
    />
  </div>
</template>

<style scoped>

</style>
