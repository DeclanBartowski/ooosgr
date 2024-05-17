<script setup lang="ts">
import Calculator from "~/components/categories/Calculator.vue";
defineProps(['repair']);
const config = useRuntimeConfig()
</script>

<template>
  <div class="text">
    <div class="content pipes block-shadow pipes--vosstanovlenie vosstanovlenie-cont">
      <ul class="category_list">
        <li style="list-style: none;">
          <div class="desc">
            <h1>{{ repair.restore_main.name }}</h1>
            <div
              class="text"
              v-html="repair.restore_main.preview"
            />
            <NuxtLink
              class="pipe_category_more"
              :to="repair.restore_main.btnLink"
              :title="repair.restore_main.btnName"
            >{{
                repair.restore_main.btnName
            }}</NuxtLink>
          </div>

          <div
            class="img"
            style="height: 390px;"
          >
            <img
              :alt="repair.restore_main.name"
              :src="`${config.public.baseURL}${repair.restore_main.picture.src}`"
              style="width: 707px; height: 390px;"
            >
          </div>
        </li>
      </ul>
    </div>
    <div v-html="repair.restore_main.detail"></div>
  </div>
  <div class="wrap content page pipes">
    <ul class="category_list">
      <template v-for="item in repair.items">
        <li class="archetype archetype--1280p">
          <div class="clearfix desc_cont">
            <div class="desc">
              <NuxtLink
                :to="item.btnLink"
                :title="item.btnName"
                class="title"
              >
                <h2>{{ item.name }}</h2>
              </NuxtLink>

              <div
                class="text"
                v-html="item.preview"
              />
              <NuxtLink
                :to="item.btnLink"
                :title="item.btnName"
                class="pipe_category_more"
              >
                {{ item.btnName }}
              </NuxtLink>
            </div>
            <div
              v-if="item.picture.src"
              class="img"
              :style="{ background: `url('${config.public.baseURL}${item.picture.src}') right top / cover`, height: '385px' }"
            />
          </div>

          <div
            v-if="item.photo"
            class="gallery clearfix"
          >
            <NuxtLink
              v-for="slide in item.photo"
              class="photo_thumb fancybox"
              :to="`${config.public.baseURL}${slide.src}`"
              :title="slide.alt"
              :rel="slide.alt"
            >
              <img
                      width="155"
                      height="150"
                :alt="slide.alt"
                :src="`${config.public.baseURL}${slide.src}`"
              >
            </NuxtLink>
          </div>
        </li>
        <li
          v-if="item.showCalculator"
          class="archetype archetype--1280p mb-10"
        >
        <Calculator :items="repair.sibar_filter" :description="repair.text_link" :priceList="`${config.public.baseURL}${repair.file}`"
        :link="repair.trub.url"  :title="repair.trub.title"
                    :btnLink="repair.btnLink"
        />
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>
