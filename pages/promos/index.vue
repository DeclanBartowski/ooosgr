<script setup lang="ts">
const page = ref({
  title: 'Акции нашей компании ',
})
</script>

<template>
  <div class="wrap content category promo">
    <div class="wrap_cont">
      <div class="past-deals">
        <h1>{{ page.title }}</h1>
        <PromoList />
        <Pagination />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped>

</style>
