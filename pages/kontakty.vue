<script setup lang="ts">
import type { ContactDto } from '~/types/contact'

const { data: contact } = await useContentFetch<ContactDto>('contact', {
  method: 'GET'
})

useServerSeoMeta({
  ogTitle: () => contact.value!.data.seo.title,
  title: () => contact.value!.data.seo.title,
  description: () => contact.value!.data.seo.description,
  ogDescription: () => contact.value!.data.seo.description,
  keywords: () => contact.value!.data.seo.keywords
})

const config = useRuntimeConfig()
</script>

<template>
  <SingleBanner
    v-if="contact"
    :img="`${config.public.baseURL}${contact.data.banner.src}`"
  />
  <Contacts
    v-if="contact"
    :contact="contact.data.list"
  />
</template>

<style scoped>

</style>
