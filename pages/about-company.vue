<script setup lang="ts">
  const page =ref({
    title:'О компании',
  })
</script>

<template>
  <div class="wrap content page common page--about-company">
    <div class="wrap_cont">
      <h1>{{ page.title }}</h1>
      <div class="text">
        <AboutBanner />
        <div
          class="two columns"
          style="padding: 40px 0;"
        >
          <DiscountList />
          <GarantyList />
        </div>
        <ForPartners />
      </div>
    </div>
    <BitrixForm />
    <div class="push" />
  </div>
</template>

<style scoped>

</style>
