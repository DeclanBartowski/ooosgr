<script setup lang="ts">
const page =ref({
  title:'МЕТАЛЛОБАЗА ТРУБА БУ БАЛКА Б/У РАЗРАБОТКА КОТЛОВАНА',
})
import type { HomeDto } from '~/types/home'
const { data: detail } = await useContentFetch<HomeDto>(`home`, {
    method: 'GET'
})

useSeoMeta({
    ogTitle: () => detail.value!.data.seo.title,
    title: () => detail.value!.data.seo.title,
    description: () => detail.value!.data.seo.description,
    ogDescription: () => detail.value!.data.seo.description,
    keywords: () => detail.value!.data.seo.keywords
})

</script>

<template>
  <MainSlider :items="detail.data.sliders" />
  <div class="wrap content home">
    <div class="wrap_cont">
      <h1>{{ detail.data.list.title }}</h1>
      <div class="archetype archetype--720p">
        <SteelList :items="detail.data.list.items" />
      </div>
      <div class="home__content two columns">
        <div class="column w65">
          <MainCalculator :file="detail.data.file"
                          :sibar_filter="detail.data.sibar_filter"
                          :trub="detail.data.trub"
                          :linktext="detail.data.btnLink"
          />
          <div class="mobile mobile--720p">
            <SteelList :items="detail.data.list.items" />
          </div>
        </div>
        <div class="column w35 text-pad-left">
          <AboutBlock :link="detail.data.about.moreText" :title="detail.data.about.name" :description="detail.data.about.preview_text" />
        </div>
        <AboutBlockSub :description="detail.data.about.detail_text" />
        <BitrixForm />
        <NewsBlock :title="detail.data.newsLink.text" :link="detail.data.newsLink.link" :items="detail.data.news" :shares="detail.data.shares"/>
      </div>
    </div>
  </div>
  <div class="push-mobile" />
</template>

<style scoped>
.t-align-center {
  text-align: center;
}
</style>
