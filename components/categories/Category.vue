<script setup lang="ts">
import type { Banner } from '~/types/root'

const { $alignCatText } = useNuxtApp()
onMounted(() => {
  $alignCatText();
});

defineProps<{
  category: Banner,
  template: string
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="column w75">
    <template v-if="template=='vus'">
      <div class="text">
        <h1>{{ category.name }}</h1>
        <p
          class="mobile mobile--720p"
          style="text-align: center;"
        >
          <NuxtLink
            class="photo_thumb fancybox"
            :to="category.preview_picture.src"
            rel="insultation-mobile"
          >
            <img
              :alt="category.detail_picture.alt"
              :src="`${config.public.baseURL}${category.detail_picture.src}`"
            >
          </NuxtLink>
        </p>

        <p>
          <NuxtLink
            class="archetype archetype--720p photo_thumb fancybox"
            :to="category.preview_picture.src"
            rel="insultation"
            style="float: right; margin: 0 0 20px 20px;"
          >
            <img
              :alt="category.detail_picture.alt"
              :src="`${config.public.baseURL}${category.detail_picture.src}`"
            >
          </NuxtLink>
        </p>
        <span v-html="category.preview_text" />
      </div>
    </template>
    <template v-else>
      <div class="js-pipe-category-content">
        <div class="two columns columns--adaptive">
          <div class="column text-pad-right js-column-text">
            <h1>{{ data.name }}</h1>
            <div
              class="text"
              v-html="data.preview_text"
            />
          </div>
          <div class="column text-pad-left js-column-image text--center">
            <DownloadPdfBtn
              v-if="category.priceList"
              :link="category.priceList"
            />
            <CategoryGallery
              v-if="category.slider"
              :slides="category.slider"
            />
          </div>
        </div>
      </div>
      <NewsMenu v-if="category.showMenu" />
      <CategoryItemsList
        v-if="category.items"
        :head="category.itemsHead"
        :items="category.items"
      />
      <div class="two columns columns--adaptive">
        <div class="column w75">
          <div
            class="text small"
            v-html="category.textHtml"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
