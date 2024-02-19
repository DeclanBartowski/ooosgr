<script setup lang="ts">
defineProps(['img']);
</script>

<template>
  <div class="main slider">
    <ul>
      <li>
        <div class="parallax" data-parallax-velocity="0">
          <img alt="" :src="img" style="top: 0px;">
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
