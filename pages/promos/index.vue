<script setup lang="ts">
import type { PromosDto } from '~/types/promos'
import Pagination from "~/components/parts/Pagination.vue";

const page = ref({
  title: 'Акции нашей компании ',
})

const { $api } = useNuxtApp()
const route = useRoute();

const pages = ref(1)

// const { data: promos } = await useAsyncData<PromosDto>(
//   'promos',
//   (): Promise<PromosDto> => $api('promos', {
//     method: 'GET',
//     params: {
//       page: pages.value
//     }
//   }), {
//   watch: [pages]
// })

let { data: promos } = await useContentFetch<PromosDto>(`promos`, {
  params: {
    page: route.query.page ? route.query.page : 1,
  },
  method: 'GET'
})



watch(
    () => route.query.page,
    async () => {
      const {data: res} = await useContentFetch<PromosDto>(`promos`, {
        method: 'GET',
        params: {
          page: route.query.page ? route.query.page : 1,
        },
      });
      promos.value = res.value;
    }, {
      deep: true,
      immediate: true,
    }
)

useSeoMeta({
  ogTitle: () => promos.value!.data.seo.title,
  title: () => promos.value!.data.seo.title,
  description: () => promos.value!.data.seo.description,
  ogDescription: () => promos.value!.data.seo.description,
  keywords: () => promos.value!.data.seo.keywords
})
</script>

<template>
  <div class="wrap content category promo">
    <div class="wrap_cont">
      <div class="past-deals">
        <h1 v-if="promos">
          {{ promos.data.title }}
        </h1>
        <PromoList
          v-if="promos"
          :data="promos.data.items"
        />
        <Pagination v-if="promos"
                    :current-page="promos?.data?.page?.pageCurrent"
                    :page-count="promos?.data?.page?.pageCount"
                    url="/promos"
        />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>
