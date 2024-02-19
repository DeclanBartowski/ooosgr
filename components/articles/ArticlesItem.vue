<script setup>
const props = defineProps(['article']);
const route = useRoute();
const url = route.path + props.article.category.code + '/' + props.article.code;
const categoryUrl = route.path + props.article.category.code;
</script>

<template>
  <li>
    <div class="img" :style="{ height: article.type =='video' ? '190px' : '210px' }">
      <template v-if="article.type=='video' && article.video">
        <a class="fancybox-media article_video" :href="article.video">
          <img v-if="article.img" :alt="article.name" :src="article.img" width="300" height="180">
        </a>
      </template>
      <template v-else>
        <img v-if="article.img" :alt="article.name" :src="article.img">
      </template>
    </div>
    <div class="desc">
      <h2>
        <a :href="url">
          {{ article.title }}
        </a>
      </h2>
      <p v-if="article.category">
        <a :href="categoryUrl" title="Перейти на страницу категории статей">
          <small>{{ article.category.name }}</small>
        </a>
      </p>
      <p>{{ article.text }}</p>
    </div>
    <div class="right_align">
      <a v-if="article.type !=='video'" :href="url" title="Перейти на страницу статьи" class="more">
        Читать подробнее
      </a>
    </div>
  </li>
</template>

<style scoped>

</style>
