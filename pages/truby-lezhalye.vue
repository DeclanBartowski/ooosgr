<script setup lang="ts">
import type { TrubybuDto } from '~/types/trubybu'

const { data: trubybu } = await useContentFetch<TrubybuDto>('truby-lezhalye', {
    method: 'GET'
})
useSeoMeta({
    ogTitle: () => trubybu.value!.data.seo.title,
    title: () => trubybu.value!.data.seo.title,
    description: () => trubybu.value!.data.seo.description,
    ogDescription: () => trubybu.value!.data.seo.description,
    keywords: () => trubybu.value!.data.seo.keywords
})

</script>

<template>
  <div class="wrap content page pipe">
    <div class="wrap_cont">
      <div class="two columns columns--adaptive">
          <Sidebar  v-if="trubybu"
                    :data="trubybu?.data" />
          <Category
                  v-if="trubybu"
                  :content="trubybu?.data"
                  :category="trubybu?.data.info"
                  :data="trubybu?.data.page"
          />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped>

</style>
