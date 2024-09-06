<script setup lang="ts">
import type { AboutDto } from '~/types/about'

const { data: about } = await useContentFetch<AboutDto>('about', {
  method: 'GET'
})
useSeoMeta({
  ogTitle: () => about.value!.data.seo.title,
  title: () => about.value!.data.seo.title,
  description: () => about.value!.data.seo.description,
  ogDescription: () => about.value!.data.seo.description,
  keywords: () => about.value!.data.seo.keywords
})
const config = useRuntimeConfig()

const isMobileDevice = ref(false);

onMounted(() => {

  isMobileDevice.value = window.innerWidth <= 768;

  window.addEventListener('resize', () => {
    isMobileDevice.value = window.innerWidth <= 768;
  });
});
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
          :menu="about.data.menu"
        />
      </div>
      <h2
          v-if="about?.data?.docs?.items && about?.data?.docs?.items.length > 0"
          class="excavation-block__title big-margin margin-80"
      >
        {{ about.data.docs?.title || 'Документы' }}
      </h2>
      <div class="documents">
        <a
            v-for="doc in about.data.docs.items"
            :href="`${config.public.baseURL}${doc?.file}`"
            rel="noopener noreferrer"
            :target="isMobileDevice ? '_self' : '_blank'"
            class="download icon-pdf-document"
        ><span class="pdf-span">{{ doc.title }}</span></a>
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
.documents {
  display: flex;
  justify-content: center;
  margin: 75px 0;
}
.documents .icon-pdf-document {
  margin: 0 20px;
}
@media only screen and (max-width: 980px) {
  .documents {
    flex-direction: column;
    padding-left: 50px;
  }
  .documents .icon-pdf-document {
    margin: 20px 0;
  }
}
.excavation-block__title {
  font-family: 'RoadRadio', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #292B7C;
  line-height: normal;
  text-transform: uppercase;
  width: 90%;
  max-width: 1180px;
  margin: 80px auto 40px;
}
.big-margin {
  margin-bottom: 50px;
}
</style>
