<script setup>
const page = ref({
  title: 'Все статьи',
})

</script>

<template>
  <div class="wrap content category">
    <div class="wrap_cont">
      <div class="articles__title">
        <h1>{{ page.title }}</h1>
      </div>
      <ArticlesList/>
      <div class="paginator">

        <div class="pagination">


          <span class="current">1</span>

          <span class="page">
                <a href="/articles/articles/?page=2">2</a>
            </span>

          <span class="page">
                <a href="/articles/articles/?page=3">3</a>
            </span>

          <span class="page">
                <a href="/articles/articles/?page=4">4</a>
            </span>

          <span class="page">
                <a href="/articles/articles/?page=5">5</a>
            </span>


          <span class="next">
            <a href="/articles/articles/?page=2">&gt;</a>
        </span>

          <span class="last">
            <a href="/articles/articles/?page=6">&gt;&gt;</a>
        </span>
        </div>

      </div>

    </div>
  </div>
  <div class="push"></div>
</template>

<style scoped>

</style>
