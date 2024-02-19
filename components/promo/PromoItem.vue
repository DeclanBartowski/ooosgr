<script setup>
defineProps(['promo']);
</script>

<template>
  <li>
    <div class="img" style="height: 125px;">
      <img alt="" :src="promo.img">
    </div>
    <div class="desc">
      <h2>{{ promo.title }}</h2>
      <div class="text">
        <p>{{ promo.text }}</p>
      </div>
    </div>
  </li>
</template>

<style scoped>

</style>
