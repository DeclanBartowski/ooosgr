<script setup lang="ts">
const socials  = ref([
    {
        "title": "ВКонтакте",
        "icon": "icon-vk",
        "href": "https://vk.com/butruba",
    },
    {
        "title": "Instagram",
        "icon": "icon-instagram",
        "href": "https://www.instagram.com/truba.sgr/",
    },
    {
        "title": "YouTube",
        "icon": "icon-you_tube",
        "href": "https://www.youtube.com/channel/UC76jtaZls7Cyz0Zbe7ftF8g/videos",
    }
]);
</script>

<template>
  <div class="social_icons">

    <a
      v-for="social in socials"
      :key="social.icon"
      :class="social.icon"
      :href="social.href"
      target="_blank"
      rel="nofollow"
      :title="social.title"></a>
  </div>
</template>

<style scoped>

</style>
