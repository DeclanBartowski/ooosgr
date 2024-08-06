<script setup lang="ts">
defineProps(['headerdata']);
import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";
const config = useRuntimeConfig()

const route = useRoute();
const router = useRouter();
const hideShadow = ref(false);
const isHeaderFixed = ref(false);
const headerHeight = ref(0);
const initialOffsetTop = ref(0);
const { $checkShadowByRouteName , $initSlidingMenus,$closeSlidingMenus} = useNuxtApp();
const initializeHeader = () => {
  const header = document.querySelector('.js-header');
  const menu = document.querySelector('.main_menu');
  headerHeight.value = header.offsetHeight;
  initialOffsetTop.value = menu.offsetTop;
};
const handleScroll = () => {
  isHeaderFixed.value = window.scrollY > initialOffsetTop.value;
  document.querySelector('.js-header').parentElement.style.paddingBottom =
      isHeaderFixed.value ? `${headerHeight.value}px` : '';
};
onMounted(()=>{
  hideShadow.value = $checkShadowByRouteName(route.name);
  initializeHeader();
  window.addEventListener('scroll', handleScroll);
  handleScroll();

});
watch(() => route.name, (newName) => {
  $closeSlidingMenus();
  hideShadow.value = $checkShadowByRouteName(newName);
  $initSlidingMenus();
});

const searchInputValue = ref('');
</script>

<template>
  <header
    class="wrap archetype--980p"
    :class="{'hide-shadow':hideShadow===true}"
  >
    <div
      class="js-header"
      :class="{'header--fixed': isHeaderFixed}"
    >
      <div class="wrap_cont clearfix">
        <NuxtLink
          :to="'/'"
          :class="'logo'"
          :title="'На главную'"
        >
          <img
            class="logo_image"
            alt="СТРОЙГЕОРЕСУРС"
            src="https://ooosgr.ru/bundles/app/images/logo-alt.png?51080781afe3f2dcd50bc049a8d5083a"
          >
          <img
            class="logo_image_alt"
            alt="СТРОЙГЕОРЕСУРС"
            src="https://ooosgr.ru/bundles/app/images/logo-alt.png?51080781afe3f2dcd50bc049a8d5083a"
          >
        </NuxtLink>
        <div class="title js-title">
          {{ headerdata.header.name }}
        </div>
        <div class="title title--hide js-short-title">
          {{ headerdata.header.preview_text }}
        </div>
        <div class="right">
          <div class="top">
            <div class="two columns">
              <div class="column text-pad-right">
                <span style="white-space: nowrap;color:#27297b;font-weight:bold;">{{ headerdata.header_email.name }} <a
                  :href="`mailto:${headerdata.header_email.preview_text}`"
                  title="Написать письмо"
                >{{ headerdata.header_email.preview_text }}</a></span>
                <div class="search">
                  <div class="form form_inline">
                    <form
                      @submit.prevent="
                        navigateTo({path: '/search', query: {
                          q: searchInputValue,

                        }, force: true});"
                    >
                      <div class="row">
                        <div class="widget">
                          <input
                            v-model="searchInputValue"
                            class="query"
                            name="q"
                            placeholder="Поиск"
                            type="text"
                          >
                          <button
                            class="icon-search"
                            title="Искать"
                            type="submit"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="column text-pad-left">
                <div class="phone">
                  <a
                    class="callibri_phone"
                    style="white-space: nowrap;"
                    :href="headerdata.header_phone.detail_text"
                    v-html="headerdata.header_phone.preview_text"
                  />
                </div>
                <FancyboxComponent
                  :options="{
                    defaultType:'html'
                  }"
                >
                  <a
                    href="#popup-callback"
                    class="is_block btn red"
                    data-fancybox="callback"
                  >
                    Заказать звонок </a>
                </FancyboxComponent>
              </div>
            </div>
          </div>
          <div class="phone phone--hidden">
            <a
              class="callibri_phone"
              :href="headerdata.header_phone.detail_text"
              v-html="headerdata.header_phone.preview_text"
            />
          </div>
          <div class="main_menu">
            <ul>
              <li
                v-for="(item, index) in headerdata.menu"
                :key="index"
                :class="{ first: index === 0, last: index === headerdata.menu.length - 1, current: item.link == route.path}"
              >
                <nuxt-link
                  :to="item.link"
                >
                  {{ item.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="header header--simple wrap mobile mobile--980p">
    <div class="header__data-mobile">
      <NuxtLink
        :to="'/'"
        :class="'logo'"
        :title="'На главную'"
      >
        <img
          alt=""
          :src="`${config.public.baseURL}${headerdata.header.preview_picture.src}`"
        >
      </NuxtLink>
    </div>
    <a
      class="callibri_phone-mobile"
      :href="headerdata.header_phone.detail_text"
      v-html="headerdata.header_phone.preview_text"
    />

    <div class="wrap_cont-mobile">
      <div class="header__menu js-menu">
        <div
          class="menu-switcher js-menu__switcher"
        >
          <div class="lines">
            <span class="line line--1" />
            <span class="line line--2" />
            <span class="line line--3" />
            <span class="line line--4" />
          </div>
        </div>

        <div
          class="menu-options js-menu__options"
        >
          <ul>
            <li
              v-for="(item, index) in headerdata.menu"
              :key="index"
              :class="{ first: index === 0, last: index === headerdata.menu.length - 1, current: item.link == route.path }"
            >
              <nuxt-link
                :to="item.link"
              >
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .header--simple.mobile .header__menu .menu-options {
    position: absolute;
    left: -144px;
    background: rgb(241, 241, 242);
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
  }
  header .main_menu ul {
    display:flex;
    justify-content:space-between;
    text-align: justify;
    line-height: 0;
    font-size: 1px;
    text-align-last: justify
  }
  header .main_menu ul:after {
    /*width: 100%;
    height: 0;
    visibility: hidden;
    overflow: hidden;
    content: '';
    display: inline-block*/
  }
  @media only screen and (max-width: 980px) {
    .mobile--980p {
      display: flex !important;
      justify-content:space-around;
      align-items:center;
    }
    .header--simple .header__menu .menu-switcher .lines {
      height: 27px;
      margin-right: 0px;
      position: relative;
      width: 27px
    }
    .callibri_phone-mobile {
      color: #2d2f8e;
      font-size: 23px;
      font-weight: bold;
    }
    .wrap_cont-mobile .header__menu {
      font-size: 13px;
      line-height: 20px;
      margin-bottom: 0;
      text-align: center;
      position: relative;
    }
    .header__data-mobile .logo{
      margin:0;
    }
    .header--simple a.logo img {
      max-height: 45px;
    }
    .header--simple .header__menu .menu-switcher {
      background: transparent;
    }
    .header--simple .header__menu .menu-switcher .line{
      background-color: #2d2f8e;
    }
  }
  .main_menu .current a {color: #ffffff; text-shadow:none}
</style>
