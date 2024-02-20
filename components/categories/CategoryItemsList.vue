<script setup lang="ts">
defineProps(['head', 'items'])
</script>

<template>
  <div class="text">
    <table class="styled center_align archetype archetype--720p">
      <thead>
      <tr>
        <th v-for="headName in head">{{ headName }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items">
        <td style="white-space: nowrap;" v-html="item.htmlName"></td>
        <td><p style="text-align: left;">{{ item.text }}</p></td>
        <td style="white-space: nowrap;">{{ item.priceFormated }}</td>
        <td class="pic">
          <!--noindex-->
          <a v-if="item.img" class="fancybox photo_thumb" :rel="item.img.rel" :href="item.img.big"
             :title="item.img.title" target="_blank"
          >
            <img alt="" :src="item.img.small"/>
          </a>
          <!--/noindex-->
          <div class="hide">
          </div>
          <!--noindex-->
          <a
              class="btn red fancybox_dialog js-fancyboxOrder"
              :data-message="`[ ${item.name} ] ${item.text} * ${item.priceFormated}`"
              href="#popup-order"
          >
            Заказать
          </a>
          <!--/noindex-->
        </td>
      </tr>
      </tbody>
    </table>

    <ul class="products-list mobile mobile--720p">
      <li v-for="item in items">
        <div>
          <div class="products-list__item">
            {{ item.mobilePrefixName }} <span v-html="item.htmlName"></span>
          </div>
          <div class="products-list__data">
            {{ item.text }}
          </div>
        </div>

        <div>
          <div class="products-list__price">
            {{ item.priceFormated }}
          </div>
          <div class="products-list__picture">

            <!--noindex-->
            <a v-if="item.img"
               class="fancybox photo_thumb"
               :rel="item.img.rel"
               :href="item.img.big"
               :title="item.img.title"
               target="_blank"
            >
              <img alt="" :src="item.img.small"/>
            </a>
            <!--/noindex-->

            <div class="hide">
            </div>

            <!--noindex-->
            <a
                class="btn red fancybox_dialog js-fancyboxOrder"
                :data-message="`[ ${item.name} ] ${item.text} * ${item.priceFormated}`"
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

<style scoped>

</style>
