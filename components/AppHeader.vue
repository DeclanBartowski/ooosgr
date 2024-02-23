<script setup lang="ts">
const header  = ref({
    "mainLogo" : 'https://ooosgr.ru/bundles/app/images/logo.png?51080781afe3f2dcd50bc049a8d5083a',
    "altLogo": 'https://ooosgr.ru/bundles/app/images/logo-alt.png?51080781afe3f2dcd50bc049a8d5083a',
    "title": "СТРОЙГЕОРЕСУРС",
    "menu": [
        {
            "link": '/truby-b-u',
            "title": "Труба б/у"
        },
        {
            "link": '/balks',
            "title": "Балка б/у"
        },
        {
          "link": '/kotlovan',
          "title": "Котлован"
        },
        {
            "link": '/truby-stalnye-v-vus-izolyaczii',
            "title": "ВУС"
        },
        {
            "link": '/vosstanovlenie-trub',
            "title": "Восстановление"
        },
        {
            "link": '/promos/',
            "title": "Акции"
        },
        {
            "link": '/procurement',
            "title": "Закупки"
        },
        {
            "link": '/about-company',
            "title": "О компании"
        },
        {
            "link": '/kontakty',
            "title": "Контакты"
        },
    ]
});
</script>

<template>
  <header class="wrap archetype--980p">
    <div class="js-header">
      <div class="wrap_cont clearfix">
        <a
          class="logo"
          href="/"
          title="На главную"
        >
          <img
            class="logo_image"
            alt="СТРОЙГЕОРЕСУРС"
            src="https://ooosgr.ru/bundles/app/images/logo.png?51080781afe3f2dcd50bc049a8d5083a"
          >
          <img
            class="logo_image_alt"
            alt="СТРОЙГЕОРЕСУРС"
            src="https://ooosgr.ru/bundles/app/images/logo-alt.png?51080781afe3f2dcd50bc049a8d5083a"
          >
        </a>
        <div class="title js-title">
          ООО "СТРОЙГЕОРЕСУРС"
        </div>
        <div class="title title--hide js-short-title">
          ООО "СГР"
        </div>
        <div class="right">
          <div class="top">
            <div class="two columns">
              <div class="column text-pad-right">
                <span style="white-space: nowrap;color:#27297b;font-weight:bold;">e-mail: <a
                  href="mailto:info@ooosgr.ru"
                  title="Написать письмо"
                >info@ooosgr.ru</a></span>
                <div class="search">
                  <div class="form form_inline">
                    <form
                      action="/search/"
                      method="get"
                    >
                      <div class="row">
                        <div class="widget">
                          <input
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
                    href="tel:+74957773646"
                  >
                    <small>+7 (495) </small>777-36-46
                  </a>
                </div>
                <a
                  href="#popup-callback"
                  class="is_block btn red fancybox_dialog"
                >
                  Заказать звонок </a>
              </div>
            </div>
          </div>
          <div class="phone phone--hidden">
            <a
              class="callibri_phone"
              href="tel:+74957773646"
            ><small>+7 (495) </small>777-36-46</a>
          </div>
          <div class="main_menu">
            <ul>
                <li v-for="(item, index) in header.menu"
                    :key="index" :class="{ first: index === 0, last: index === header.menu.length - 1 }"
                >
                    <nuxt-link
                            :to="item.link"
                    >
                        {{ item.title }}
                    </nuxt-link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
    <div class="header header--simple wrap mobile mobile--980p">
        <div class="header__data wrap_cont">
            <a
                    class="logo"
                    href="/"
                    title="На главную"
            >
                <img
                        alt=""
                        src="https://ooosgr.ru/bundles/app/images/logo-alt.png?51080781afe3f2dcd50bc049a8d5083a"
                >
            </a>
            <div class="title">
                «СТРОЙГЕОРЕСУРС»
            </div>
        </div>

        <div class="options">
            <div class="options__email icon-email">
                <a
                        href="mailto:info@ooosgr.ru"
                        title="Написать письмо"
                >info@ooosgr.ru</a>
            </div>
            <div class="options__phone icon-phone">
                <a
                        class="callibri_phone"
                        href="tel:+74957773646"
                >+7 (495) 777-36-46</a>
            </div>
        </div>

        <div class="wrap_cont">
            <div class="header__menu js-menu">
                <div class="menu-switcher js-menu__switcher">
                    <div class="lines">
                        <span class="line line--1"/>
                        <span class="line line--2"/>
                        <span class="line line--3"/>
                        <span class="line line--4"/>
                    </div>
                    Меню сайта
                </div>

                <div class="menu-options js-menu__options">
                    <ul>
                        <li v-for="(item, index) in header.menu"
                            :key="index" :class="{ first: index === 0, last: index === header.menu.length - 1 }"
                        >
                            <nuxt-link
                                    :to="item.link"

                            >
                                {{ item.title }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>

            <a
                    class="btn red fancybox_dialog"
                    href="#popup-callback"
            >
                Заказать обратный звонок </a>
        </div>
    </div>
</template>

<style scoped>
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
</style>
