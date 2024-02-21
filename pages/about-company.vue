<script setup lang="ts">
  import AboutBanner from "~/components/banners/AboutBanner.vue";
  import DiscountList from "~/components/about/DiscountList.vue";
  import GarantyList from "~/components/about/GarantyList.vue";

  const page =ref({
    title:'О компании',
  })
</script>

<template>
    <div class="wrap content page common page--about-company">
        <div class="wrap_cont">
            <h1>{{ page.title }}</h1>
            <div class="text">
              <AboutBanner/>
                <div class="two columns" style="padding: 40px 0;">
                  <DiscountList/>
                  <GarantyList/>
                </div>
                <ForPartners/>
            </div>
        </div>

        <div class="wrap content">
            <div class="wrap_cont">

            </div>
        </div>



        <div class="push"></div>
    </div>
</template>

<style scoped>

</style>
