<script setup lang="ts">
defineProps(['items'])
const config = useRuntimeConfig()
</script>

<template>
  <div class="three columns banners">
    <div
      v-for="item in items"
      class="column"
    >
      <div
        class="img"
        style="height: 102px;"
      >
        <img
          class="icon-image-wh-100"
          alt=""
          :src="`${config.public.baseURL}${item.picture.src}`"
        >
      </div>
      <div
        class="text"
        v-html="item.text"
      />
    </div>
  </div>
</template>

<style scoped>
.t-align-center {
  text-align: center;
}
</style>
