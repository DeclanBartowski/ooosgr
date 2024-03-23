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
    <div class="mt-70 mb-70">
      <BitrixForm />
    </div>
    <div class="push" />
  </div>
</template>

<style scoped>
.mt-70 {
  margin-top: 70px;
}
.mb-70 {
  margin-bottom: 70px;
}
</style>
