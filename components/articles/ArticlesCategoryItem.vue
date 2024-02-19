<script setup>
const props = defineProps(['article']);
const route = useRoute();
const url = route.path + '/' + props.article.code;
</script>
<template>
  <template v-if="article.type=='article'">
    <li>
      <a :href="url">
        <div class="img" style="height: 0px;">
          <img v-if="article.img" :alt="article.name" :src="article.img">
        </div>
      </a>
      <div class="desc">
        <h2>
          <a :href="url">
            {{ article.title }}
          </a>
        </h2>
        <p>{{ article.text }}</p>
      </div>
      <div class="right_align">
        <a :href="url" title="Перейти на страницу статьи" class="more">
          Читать статью
        </a>
      </div>
    </li>
  </template>
  <template v-else-if="article.type=='news'">
    <li>
      <div class="img" style="height: 145px;">
        <a :href="url">
          <div class="img" style="height: 0px;">
            <img v-if="article.img" :alt="article.name" :src="article.img">
          </div>
        </a>
      </div>
      <div class="desc">
        <p class="date">Дата создания: {{ article.create }}</p>
        <h2>
          <a :href="url">
            {{ article.title }}
          </a>
        </h2>
        <p>{{ article.text }}</p>
      </div>
      <div class="right_align">
        <a :href="url" title="Перейти на страницу статьи" class="more">
          Читать далее
        </a>
      </div>
    </li>
  </template>
  <template v-else>
    <li class="article--video">
      <div class="img" style="height: 180px;" v-if="article.video">
        <a class="fancybox-media article_video" :href="article.video">
          <img v-if="article.img" :alt="article.name" :src="article.img" width="300" height="180">
        </a>
      </div>
      <div class="desc">
        <h2>{{ article.title }}</h2>
        <p>{{ article.text }}</p>
      </div>
    </li>
  </template>
</template>
<style scoped>

</style>
