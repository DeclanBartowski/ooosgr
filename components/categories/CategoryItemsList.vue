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
            <FancyboxComponent
                :options="{
                defaultType:'image'
              }"
            >
              <div
                  v-for="(i, key, index) in item.photo"
              >
                <a
                    :style="{display: (key == 0) ? 'block' : 'none'}"
                    class="fancybox photo_thumb"
                    :href="`${config.public.baseURL}${i.src}`"
                    target="_blank"
                    data-fancybox="gallery"
                >
                  <img

                      width="155" height="105"
                      :key="i.src"
                      :alt="i.alt"
                      :src="`${config.public.baseURL}${i.resize.src}`"
                  >
                </a>
              </div>


            </FancyboxComponent>

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
                data-fancybox="bulk"
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
            <FancyboxComponent
                :options="{
                defaultType:'image'
              }"
            >
              <div
                  v-for="(i, key, index) in item.photo"
              >
                <a
                    :style="{display: (key == 0) ? 'block' : 'none'}"
                    class="fancybox photo_thumb"
                    :href="`${config.public.baseURL}${i.src}`"
                    target="_blank"
                    data-fancybox="gallery"
                >
                  <img

                      width="155" height="105"
                      :key="i.src"
                      :alt="i.alt"
                      :src="`${config.public.baseURL}${i.src}`"
                  >
                </a>
              </div>
            </FancyboxComponent>

            <!--/noindex-->

            <div class="hide" />

            <FancyboxComponent
                :options="{
                defaultType:'html'
              }"
            >
              <a
                  class="btn red fancybox_dialog js-fancyboxOrder"
                  href="#bulk-order"
                  data-fancybox="bulk"
                  @click="orderMessage = `[ ${item.name} ] ${item.text} * ${item.price}`"
              >
                Заказать
              </a>

            </FancyboxComponent>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
