<script setup lang="ts">
import type { BalksData } from '~/types/balks'
import type { Banner } from '~/types/root'

const { $alignCatText } = useNuxtApp()
onMounted(() => {
  $alignCatText();
});

defineProps<{
  category: Banner,
  template: string,
  data?: unknown,
  content: BalksData
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
            :to="`${config.public.baseURL}${category.detail_picture.src}`"
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
            <h1>{{ category.name }}</h1>
            <div
              class="text"
              v-html="category.preview_text"
            />
          </div>
          <div class="column text-pad-left js-column-image text--center">
            <DownloadPdfBtn
              v-if="data.priceList"
              :link="data.priceList"
            />
            <CategoryGallery
              v-if="data.slider && data.slider.length > 0"
              :slides="data.slider"
            />
          </div>
        </div>
      </div>
      <NewsMenu v-if="data.showMenu"  :menu="data.menu" />
      <CategoryItemsList
        :head="data.itemsHead"
        :items="content.items"
      />
      <div class="two columns columns--adaptive">
        <div class="column w75">
          <div
            class="text small"
            v-html="category.detail_text"
          />
        </div>
      </div>
    </template>
  </div>
</template>
