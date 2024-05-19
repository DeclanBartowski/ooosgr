<script setup lang="ts">
const props = defineProps(['article']);
const route = useRoute();
const url = route.path + '/' + props.article.code;
const config = useRuntimeConfig()

</script>
<template>
  <template v-if="article.type=='articles'">
    <li>
      <NuxtLink :to="article.url">
        <div
          class="img"
          style="height: 0px;"
        >
          <img
                  width="300"
                  height="200"
            v-if="article.img"
            :alt="article.img.alt"
            :src="`${config.public.baseURL}${article.img.src}`"
          >
        </div>
      </NuxtLink>
      <div class="desc">
        <h2>
          <NuxtLink :to="article.url">
            {{ article.title }}
          </NuxtLink>
        </h2>
          <div v-html="article.text"></div>
      </div>
      <div class="right_align">
        <NuxtLink
          :to="article.url"
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
              width="220"
              height="145"
              v-if="article.img"
              :alt="article.img.alt"
              :src="`${config.public.baseURL}${article.img.src}`"
            >
          </div>
        </NuxtLink>
      </div>
      <div class="desc">
        <p class="date">
          Дата создания: {{ article.create }}
        </p>
        <h2>
          <NuxtLink :to="article.url">
            {{ article.title }}
          </NuxtLink>
        </h2>
          <div v-html="article.text"></div>
      </div>
      <div class="right_align">
        <NuxtLink
          :to="article.url"
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
        <FancyboxComponent
            :options="{
          defaultType:'youtube',
          Html: {
            videoAutoplay: false
          },
        }"
        >
          <a
              class="fancybox-media article_video"
              :href="article.video"
              data-fancybox="video"
          >
            <img
                v-if="article.img"
                :alt="article.img.alt"
                :src="`${article.img.src}`"
                width="300"
                height="180"
            >
          </a>
        </FancyboxComponent>
      </div>
      <div class="desc">
        <h2>{{ article.title }}</h2>
          <div v-html="article.text"></div>
      </div>
    </li>
  </template>
</template>
<style scoped>

</style>
