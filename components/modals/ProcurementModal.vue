<script setup lang="ts">

</script>

<template>
  <div
    id="popup-procurement"
    class="callback_form widget form form--procurement"
    style="display: none"
  >
    <div class="title">
      Отправьте ваше предложение
    </div>
    <p>Заполните поля, и мы с вами свяжемся. Или отправьте предложение на почту <a href="mailto:info@ooosgr.ru">info@ooosgr.ru</a>.</p>

    <form
      name="procurement"
      method="post"
      action="/callback/procurement"
      class="ajaxMultipart"
      data-container=".form--procurement"
      enctype="multipart/form-data"
    >
      <div class="two columns">
        <div class="column w30">
          <div class="row">
            <div class="widget">
              <input
                id="procurement_name"
                type="text"
                name="procurement[name]"
                required="required"
                placeholder="Введите Ваше имя"
                autocomplete="off"
                data-placeholder="Введите Ваше имя"
              >
            </div>
          </div>
          <div class="row">
            <div class="widget">
              <input
                id="procurement_phone"
                type="text"
                name="procurement[phone]"
                required="required"
                placeholder="Введите Ваш телефон"
                autocomplete="off"
                data-placeholder="Введите Ваш телефон"
              >
            </div>
          </div>
          <div class="row">
            <div class="widget">
              <input
                id="procurement_email"
                type="text"
                name="procurement[email]"
                placeholder="Введите Ваш e-mail"
                autocomplete="off"
                data-placeholder="Введите Ваш e-mail"
              >
            </div>
          </div>
        </div>
        <div class="column w70 text-pad-left">
          <div class="row">
            <div class="widget">
              <textarea
                id="procurement_message"
                name="procurement[message]"
                required="required"
                placeholder="Введите диаметр труб и др. параметры заказа"
                autocomplete="off"
                data-placeholder="Введите диаметр труб и др. параметры заказа"
              />
            </div>
          </div>
        </div>
        <div class="two columns">
          <div class="column w70 text-pad-right">
            <div class="js-files files_rows">
              <div class="row">
                <div class="widget">
                  <div id="procurement_attachments_0">
                    <input
                      id="procurement_attachments_0_id"
                      type="hidden"
                      name="procurement[attachments][0][id]"
                    ><div class="widget_row clearfix">
                      <div class="file_selector icon-file">
                        <div class="file_message">
                          Нажмите, чтобы прикрепить файл.
                        </div>
                        <div class="widget">
                          <input
                            id="procurement_attachments_0_file"
                            type="file"
                            name="procurement[attachments][0][file]"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="widget">
                <div
                  id="procurement_attachments"
                  placeholder="procurement.entity.attachments"
                  autocomplete="off"
                  data-prototype="<div class=&quot;row&quot;>    <div class=&quot;widget&quot;><div id=&quot;procurement_attachments___name__&quot;><input type=&quot;hidden&quot; id=&quot;procurement_attachments___name___id&quot; name=&quot;procurement[attachments][__name__][id]&quot; /><div class=&quot;widget_row clearfix&quot;>
        <div class=&quot;file_selector icon-file&quot;>
            <div class=&quot;file_message&quot;>Нажмите, чтобы прикрепить файл.</div>
            <div class=&quot;widget&quot;><input type=&quot;file&quot; id=&quot;procurement_attachments___name___file&quot; name=&quot;procurement[attachments][__name__][file]&quot; /></div>
        </div>
    </div></div></div>
    </div>"
                />
              </div>
            </div>
            <div
              class="row row--checkbox"
              style="margin-top: 10px;"
            >
              <input
                id="procurement_privacy"
                checked=""
                required=""
                type="checkbox"
              >
              <label for="procurement_privacy">Даю согласие на <a
                href="/privacy"
                target="_blank"
              >политику обработки персональных данных</a>.</label>
            </div>
          </div>
          <div class="column w30 right_align">
            <button
              type="submit"
              class="btn red"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="widget">
          <input
            id="procurement_company"
            type="text"
            name="procurement[company]"
            class="company"
            placeholder=""
            autocomplete="off"
          >
        </div>
      </div><input
        id="procurement__token"
        type="hidden"
        name="procurement[_token]"
        placeholder="procurement.entity._token"
        autocomplete="off"
        data-placeholder="procurement.entity._token"
        value="4c9iYY8gWGRcX9sD7vTp-zFkCdpubZ6voCjurlz6b0o"
      >
    </form>
  </div>
</template>

<style scoped>

</style>
