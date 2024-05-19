<script setup lang="ts">
const props = defineProps(['success'])
</script>

<template>
  <div
      id="success-order-modal"
      class="popup"
      style="display: none;"
  >
    <div class="callback_form widget form form--order">
      <div class="title">
        Оставить заявку
      </div>

      <p>{{success ? " Запрос успешно отправлен!" : " Запрос не отправлен. Попробуйте позже"}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
