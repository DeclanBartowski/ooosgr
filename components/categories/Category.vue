<script setup lang="ts">
defineProps(['category']);
const { $alignCatText } = useNuxtApp()
onMounted(() => {
  $alignCatText();
});
</script>

<template>
  <div class="column w75">
    <template v-if="category.template =='balks'">
      <div>
        <div class="two columns columns--adaptive">
          <div class="column text-pad-right js-column-text">
            <h1><span style="font-size: 22px;">{{ category.name }}</span></h1>
            <div
              class="text"
              v-html="category.previewTextHtml"
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
        <div
          class="text"
          v-html="category.text"
        />
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
            v-html="category.additionalPreviewTextHtml"
          />
        </div>
      </div>
    </template>
    <template v-if="category.template=='vus'">
      <div class="text">
        <h1>{{ category.name }}</h1>
        <p
          v-if="category.img"
          class="mobile mobile--720p"
          style="text-align: center;"
        >
          <NuxtLink
            class="photo_thumb fancybox"
            :to="category.img.big"
            rel="insultation-mobile"
          ><img
            alt=""
            :src="category.img.small"
          ></NuxtLink>
        </p>

        <p v-if="category.img">
          <NuxtLink
            class="archetype archetype--720p photo_thumb fancybox"
            :to="category.img.big"
            rel="insultation"
            style="float: right; margin: 0 0 20px 20px;"
          >
            <img
              alt=""
              :src="category.img.small"
            ></NuxtLink>
        </p>
        <span v-html="category.text" />
      </div>
    </template>
    <template v-else>
      <div class="js-pipe-category-content">
        <div class="two columns columns--adaptive">
          <div class="column text-pad-right js-column-text">
            <h1>{{ category.name }}</h1>
            <div class="text" v-html="category.previewTextHtml"/>
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
