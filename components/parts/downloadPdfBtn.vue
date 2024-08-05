<script setup lang="ts">
let props = defineProps(['link'])
const config = useRuntimeConfig()
const redirectToLink = () => {
  if (props.link) {
    location.href = config.public.baseURL + props.link;
  }
};
</script>

<template>
  <span
    v-if="link"
    style="cursor: pointer"
    class="icon-pdf"
    @click="redirectToLink"
  >
    <span
      style="text-decoration: underline;margin-left: 10px;font-size: 12px;font-weight: bold;color: #242424;"
    >Скачать прайс-лист</span>
  </span>
</template>
