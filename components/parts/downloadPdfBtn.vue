<script setup lang="ts">
let props = defineProps(['link'])
const redirectToLink = () => {
  if (props.link) {
    location.href = props.link;
  }
};
</script>

<template>
  <span v-if="link" @click="redirectToLink" style="cursor: pointer" class="icon-pdf">
                <span
                    style="text-decoration: underline;margin-left: 10px;font-size: 12px;font-weight: bold;color: #242424;"
                >Скачать прайс-лист</span>
            </span>
</template>

<style scoped>

</style>
