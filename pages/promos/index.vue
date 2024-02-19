<script setup lang="ts">
import type {Ref} from "vue";
import type {Page} from "~/types/root";

const page:Ref<Page> = ref({
  title: 'Акции нашей компании ',
})
</script>

<template>
  <div class="wrap content category promo">
    <div class="wrap_cont">
      <div class="past-deals">
        <h1>{{ page.title }}</h1>
        <PromoList/>
        <div class="paginator">

          <div class="pagination">


            <span class="current">1</span>

            <span class="page">
                <a href="/promos/?page=2">2</a>
            </span>

            <span class="page">
                <a href="/promos/?page=3">3</a>
            </span>

            <span class="page">
                <a href="/promos/?page=4">4</a>
            </span>

            <span class="page">
                <a href="/promos/?page=5">5</a>
            </span>


            <span class="next">
            <a href="/promos/?page=2">&gt;</a>
        </span>

            <span class="last">
            <a href="/promos/?page=6">&gt;&gt;</a>
        </span>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="push"></div>
</template>

<style scoped>

</style>
