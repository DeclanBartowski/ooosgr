<script setup>
const props = defineProps(['article']);
const route = useRoute();
const url = route.path + props.article.category.code + '/' + props.article.code;
const categoryUrl = route.path + '/' + props.article.category.code;
const config = useRuntimeConfig()
</script>

<template>
  <li>
    <div
      class="img"
      :style="{ height: article.type =='video' ? '190px' : '210px' }"
    >
      <template v-if="article.type=='video' && article.video">
        <NuxtLink
          class="fancybox-media article_video"
          :to="article.video"
        >
          <img
            v-if="article.img"
            :alt="article.name"
            :src="article.img.src"
            width="300"
            height="180"
          >
        </NuxtLink>
      </template>
      <template v-else>
        <img
                width="300"
                height="180"
          v-if="article.img"
          :alt="article.name"
          :src="`${config.public.baseURL}${article.img.src}`"
        >
      </template>
    </div>
    <div class="desc">
      <h2>
        <NuxtLink :to="url">
          {{ article.title }}
        </NuxtLink>
      </h2>
      <p v-if="article.category">
        <NuxtLink
          :to="categoryUrl"
          title="Перейти на страницу категории статей"
        >
          <small>{{ article.category.name }}</small>
        </NuxtLink>
      </p>
      <p v-html="article.text"></p>
    </div>
    <div class="right_align">
      <NuxtLink
        v-if="article.type !=='video'"
        :to="article.url"
        title="Перейти на страницу статьи"
        class="more"
      >
        Читать подробнее
      </NuxtLink>
    </div>
  </li>
</template>

<style scoped>

</style>
