<script setup lang="ts">
import type { AboutPartner } from '~/types/about'

defineProps<{
  partners: AboutPartner,
    menu: object
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="parallax_cont about_partner">
    <div class="parallax">
      <img
        :alt="partners.img.alt"
        :src="`${config.public.baseURL}${partners.img.src}`"
      >
    </div>

    <div class="text white">
      <div class="two columns">
        <div class="column text-pad-right">
          <h2 class="big white">
            {{ partners.title }}
          </h2>

          <div
            class="text"
            v-html="partners.text"
          />
          <div class="text--center">
            <p style="font-family: 'RoadRadio', Verdana, sans-serif; font-weight: bold;">
              Звоните: <span class="callibri_phone"><a :href="'tel:' + partners.phone">
                {{ partners.phone }}</a></span>
            </p>
          </div>
          <NewsMenu :class-name="'news__link-about'" :menu="menu" />
        </div>

        <div class="column text-pad-left">
          <h2 class="big white">
            {{ partners.reqTitle }}
          </h2>

          <div
            class="text white"
            style="font-size: 14px"
          >
            <table>
              <tbody>
                <tr
                  v-for="req in partners.reqItems"
                  :key="req.name"
                >
                  <td><b>{{ req.name }}</b></td>
                  <template v-if="req.type == 'phone'">
                    <td><span class="callibri_phone">{{ req.value }}</span></td>
                  </template>
                  <template v-else>
                    <td>{{ req.value }}</td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="bottom-req">
            <small style="display: inline-block;width: 350px;line-height: 1.8em">{{ partners.warning }}</small>

            <div
              class="text-pad-left is_inline_block"
              style="vertical-align: top;"
            >
              <NuxtLink :to="`${config.public.baseURL}${partners.reqFile}`">
                <span
                  class="icon-pdf left_align c-white"
                  style="cursor: pointer"
                ><span
                  style="text-decoration: underline;
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: bold;
    line-height: 1.4em;"
                >Скачать реквизиты<br>
                  нашей организации</span> </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about_partner {
  background: #38424e;
  color: #fff;
  height: 600px;
  margin: 0 -45px;
  padding: 50px 45px 50px 45px
}

.content .text p {
  font-size: 16px;
  text-align: left;
  margin-bottom: 110px;
  margin-top: 170px;
}

.bottom-req {
  margin-top: 115px;
}

.about_partner p .callibri_phone {
  margin-left: 10px;
}

@media only screen and (max-width: 980px) {
  .content .text p {
    margin-bottom: 0;
    margin-top: 0;
  }

  .about_partner {
    height: 100%;
  }

  .text-pad-left {
    padding-left: 0px;
    margin-top: 10px;
  }
  .bottom-req {
    margin-top: 0;
  }
}
</style>
