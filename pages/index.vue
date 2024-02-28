<script setup lang="ts">
const page =ref({
  title:'МЕТАЛЛОБАЗА ТРУБА БУ БАЛКА Б/У РАЗРАБОТКА КОТЛОВАНА – «СТРОЙГЕОРЕСУРС»',
})
</script>

<template>
  <MainSlider />
  <div class="wrap content home">
    <div class="wrap_cont">
      <h1>{{ page.title }}</h1>
      <div class="archetype archetype--720p">
        <SteelList />
      </div>
      <div class="home__content two columns">
        <div class="column w65">
          <MainCalculator />
          <div class="mobile mobile--720p">
            <SteelList />
          </div>
        </div>
        <div class="column w35 text-pad-left">
          <AboutBlock />
        </div>
        <BitrixForm />
        <NewsBlock />
      </div>
    </div>
  </div>
  <div class="push" />
</template>

<style scoped>

</style>
