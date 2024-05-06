<script setup lang="ts">
import type { AboutDto } from '~/types/about'

const { data: about } = await useContentFetch<AboutDto>('about', {
  method: 'GET'
})

useServerSeoMeta({
  ogTitle: () => about.value!.data.seo.title,
  title: () => about.value!.data.seo.title,
  description: () => about.value!.data.seo.description,
  ogDescription: () => about.value!.data.seo.description,
  keywords: () => about.value!.data.seo.keywords
})
</script>

<template>
  <div class="wrap content page common page--about-company">
    <div class="wrap_cont">
      <h1 v-if="about && about.data.banner.title">
        {{ about.data.banner.title }}
      </h1>
      <div class="text">
        <AboutBanner
          v-if="about"
          :banner="about.data.banner"
        />
        <div
          class="two columns"
          style="padding: 40px 0;"
        >
          <DiscountList
            v-if="about"
            :discount="about.data.discount_list"
          />
          <GarantyList
            v-if="about"
            :garant="about.data.garant_list"
          />
        </div>
        <ForPartners
          v-if="about"
          :partners="about.data.partners"
        />
      </div>
    </div>
    <div class="mt-70 mb-70">
      <BitrixForm />
    </div>
    <div class="push" />
  </div>
</template>

<style scoped>
.mt-70 {
  margin-top: 70px;
}

.mb-70 {
  margin-bottom: 70px;
}
</style>
