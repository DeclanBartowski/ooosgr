<script setup lang="ts">
import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";
import type { BalksItems } from '~/types/balks'

defineProps<{
  head: string[],
  items: BalksItems[]
}>()

const config = useRuntimeConfig();

const orderMessage = ref('');
</script>

<template>
  <div class="text">
    <table class="styled center_align archetype archetype--720p">
      <thead>
        <tr>
          <th
            v-for="headName in head"
            :key="headName"
          >
            {{ headName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.name"
        >
          <td
            style="white-space: nowrap;"
            v-html="item.name"
          />
          <td>
            <p style="text-align: left;">
              {{ item.text }}
            </p>
          </td>
          <td style="white-space: nowrap;">
            {{ item.price }}
          </td>
          <td class="pic">
            <!--noindex-->
            <NuxtLink
              v-if="item.picture"
              class="fancybox photo_thumb"
              :to="`${config.public.baseURL}${item.picture.src}`"
              target="_blank"
            >
              <img
                width="155" height="105"
                v-for="i in item.photo"
                :key="i.src"
                :alt="i.alt"
                :src="`${config.public.baseURL}${i.src}`"
              >
            </NuxtLink>
            <!--/noindex-->
            <div class="hide" />
            <!--noindex-->
            <FancyboxComponent
              :options="{
                defaultType:'html'
              }"
            >
              <a
                class="btn red fancybox_dialog js-fancyboxOrder"
                href="#bulk-order"
                data-fancybox="popup_bulks"
                @click="orderMessage = `[ ${item.name} ] ${item.text} * ${item.price}`"
              >
                Заказать
              </a>

            </FancyboxComponent>
          <!--/noindex-->
          </td>
        </tr>
      </tbody>
    </table>
    <OrderModal :id="'bulk-order'" :message="orderMessage"/>

    <ul class="products-list mobile mobile--720p">
      <li
        v-for="item in items"
        :key="item.name"
      >
        <div>
          <div class="products-list__item">
            <span v-html="item.name" />
          </div>
          <div class="products-list__data">
            {{ item.text }}
          </div>
        </div>

        <div>
          <div class="products-list__price">
            {{ item.price }}
          </div>
          <div class="products-list__picture">
            <!--noindex-->
            <NuxtLink
              v-if="item.picture"
              class="fancybox photo_thumb"
              :to="`${config.public.baseURL}${item.picture.src}`"
            >
              <img
                v-for="i in item.photo"
                :key="i.src"
                :alt="i.alt"
                :src="`${config.public.baseURL}${i.src}`"
              >
            </NuxtLink>
            <!--/noindex-->

            <div class="hide" />

            <!--noindex-->
            <a
              class="btn red fancybox_dialog js-fancyboxOrder"
              :data-message="`[ ${item.name} ] ${item.text} * ${item.price}`"
              href="#popup-order"
            >
              Заказать
            </a>
            <!--/noindex-->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
