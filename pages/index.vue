<script setup lang="ts">
import AboutBlock from "~/components/main/AboutBlock.vue";
import PipeModal from "~/components/modals/PipeModal.vue";

const page =ref({
  title:'МЕТАЛЛОБАЗА ТРУБА БУ БАЛКА Б/У РАЗРАБОТКА КОТЛОВАНА – «СТРОЙГЕОРЕСУРС»',
})
</script>

<template>
  <MainSlider/>
  <div class="wrap content home">
    <div class="wrap_cont">
      <h1>{{ page.title }}</h1>
      <div class="archetype archetype--720p">
        <SteelList/>
      </div>
      <div class="home__content two columns">
        <div class="column w65">
          <MainCalculator/>
        <div class="mobile mobile--720p">
          <SteelList/>
        </div>
      </div>
        <AboutBlock/>
        <NewsBlock/>
      </div>
    </div>
  </div>

  <PipeModal/>


  <div class="push"/>
</template>

<style scoped>

</style>
