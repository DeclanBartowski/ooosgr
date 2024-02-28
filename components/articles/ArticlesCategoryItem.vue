<script setup>
const props = defineProps(['article']);
const route = useRoute();
const url = route.path + '/' + props.article.code;
</script>
<template>
  <template v-if="article.type=='article'">
    <li>
      <NuxtLink :to="url">
        <div
          class="img"
          style="height: 0px;"
        >
          <img
            v-if="article.img"
            :alt="article.name"
            :src="article.img"
          >
        </div>
      </NuxtLink>
      <div class="desc">
        <h2>
          <NuxtLink :to="url">
            {{ article.title }}
          </NuxtLink>
        </h2>
        <p>{{ article.text }}</p>
      </div>
      <div class="right_align">
        <NuxtLink
          :to="url"
          title="Перейти на страницу статьи"
          class="more"
        >
          Читать статью
        </NuxtLink>
      </div>
    </li>
  </template>
  <template v-else-if="article.type=='news'">
    <li>
      <div
        class="img"
        style="height: 145px;"
      >
        <NuxtLink :to="url">
          <div
            class="img"
            style="height: 0px;"
          >
            <img
              v-if="article.img"
              :alt="article.name"
              :src="article.img"
            >
          </div>
        </NuxtLink>
      </div>
      <div class="desc">
        <p class="date">
          Дата создания: {{ article.create }}
        </p>
        <h2>
          <NuxtLink :to="url">
            {{ article.title }}
          </NuxtLink>
        </h2>
        <p>{{ article.text }}</p>
      </div>
      <div class="right_align">
        <NuxtLink
          :to="url"
          title="Перейти на страницу статьи"
          class="more"
        >
          Читать далее
        </NuxtLink>
      </div>
    </li>
  </template>
  <template v-else>
    <li class="article--video">
      <div
        v-if="article.video"
        class="img"
        style="height: 180px;"
      >
        <NuxtLink
          class="fancybox-media article_video"
          :to="article.video"
        >
          <img
            v-if="article.img"
            :alt="article.name"
            :src="article.img"
            width="300"
            height="180"
          >
        </NuxtLink>
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
