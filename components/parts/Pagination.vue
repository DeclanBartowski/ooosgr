<script setup lang="ts">
  defineProps(['currentPage', 'pageCount', 'url']);
</script>

<template>
  <div class="paginator">
    <div class="pagination">

      <span class="last" v-if="(currentPage) > 1">
        <NuxtLink :to="url+'page='+1">&lt;&lt;</NuxtLink>
      </span>

      <span class="next" v-if="(currentPage) > 1">
        <NuxtLink :to="url+'page='+(currentPage-1)">&lt;</NuxtLink>
      </span>

      <template v-if="currentPage > 2">
        <span class="page">
          <NuxtLink :to="url+'page='+(currentPage-2)">{{currentPage-2}}</NuxtLink>
        </span>

        <span class="page">
          <NuxtLink :to="url+'page='+(currentPage-1)">{{currentPage-1}}</NuxtLink>
        </span>
      </template>
      <template v-if="currentPage == 2">
         <span class="page">
          <NuxtLink :to="url+'page='+(currentPage-1)">{{currentPage-1}}</NuxtLink>
        </span>
      </template>

      <span class="current">{{currentPage}}</span>

      <span class="page" v-for="n in Math.min(2, pageCount-currentPage)" >
            <NuxtLink :to="url+'page='+(currentPage+n)">{{currentPage+n}}</NuxtLink>
      </span>


      <span class="next" v-if="(pageCount-currentPage) >= 1">
        <NuxtLink :to="url+'page='+(currentPage+1)">&gt;</NuxtLink>
      </span>

      <span class="last" v-if="(pageCount-currentPage) >= 1">
        <NuxtLink :to="url+'page='+pageCount">&gt;&gt;</NuxtLink>
      </span>
    </div>
  </div>
</template>

<style scoped>
.paginator span {
  border-radius: 5px;
  margin: 0 2px;
}
</style>
