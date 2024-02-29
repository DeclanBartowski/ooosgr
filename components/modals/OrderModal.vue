<script setup lang="ts">

</script>

<template>
  <div
    id="popup-order"
    class="popup"
    style="display: none;"
  >
    <div class="callback_form widget form form--order">
      <div class="title">
        Оставить заявку
      </div>
      <p>Заполните поля, и наш менеджер свяжется с Вами в ближайшее время.</p>

      <form
        name="order"
        method="post"
        action="/callback/order"
        class="ajaxMultipart"
        data-container=".form--order"
        enctype="multipart/form-data"
      >
        <div>
          <div>
            <div class="row">
              <div class="widget">
                <input
                  id="order_name"
                  type="text"
                  name="order[name]"
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
                  id="order_phone"
                  type="text"
                  name="order[phone]"
                  required="required"
                  placeholder="Введите Ваш телефон"
                  autocomplete="off"
                  data-placeholder="Введите Ваш телефон"
                >
              </div>
            </div>
            <div class="row">
              <div class="widget">
                <textarea
                  id="order_message"
                  name="order[message]"
                  readonly="readonly"
                  required="required"
                  class="js-orderMessage"
                  placeholder="Введите диаметр труб и др. параметры заказа"
                  autocomplete="off"
                  data-placeholder="Введите диаметр труб и др. параметры заказа"
                />
              </div>
            </div>
            <div class="js-files files_rows files_rows--self">
              <div class="row">
                <div class="widget">
                  <div id="order_attachments_0">
                    <input
                      id="order_attachments_0_id"
                      type="hidden"
                      name="order[attachments][0][id]"
                    ><div class="widget_row clearfix">
                      <div class="file_selector icon-file">
                        <div class="file_message">
                          Нажмите, чтобы прикрепить файл.
                        </div>
                        <div class="widget">
                          <input
                            id="order_attachments_0_file"
                            type="file"
                            name="order[attachments][0][file]"
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
                  id="order_attachments"
                  placeholder="order.entity.attachments"
                  autocomplete="off"
                  data-prototype="<div class=&quot;row&quot;>    <div class=&quot;widget&quot;><div id=&quot;order_attachments___name__&quot;><input type=&quot;hidden&quot; id=&quot;order_attachments___name___id&quot; name=&quot;order[attachments][__name__][id]&quot; /><div class=&quot;widget_row clearfix&quot;>
        <div class=&quot;file_selector icon-file&quot;>
            <div class=&quot;file_message&quot;>Нажмите, чтобы прикрепить файл.</div>
            <div class=&quot;widget&quot;><input type=&quot;file&quot; id=&quot;order_attachments___name___file&quot; name=&quot;order[attachments][__name__][file]&quot; /></div>
        </div>
    </div></div></div>
    </div>"
                />
              </div>
            </div>
            <div class="row row--checkbox">
              <input
                id="order_privacy"
                checked=""
                required=""
                type="checkbox"
              >
              <label for="order_privacy">Даю согласие на <a
                href="/privacy"
                target="_blank"
              >политику обработки персональных данных</a>.</label>
            </div>
          </div>
          <div class="center_align">
            <button
              type="submit"
              class="btn red"
            >
              Отправить
            </button>
          </div>
        </div>
        <div class="row">
          <div class="widget">
            <input
              id="order_company"
              type="text"
              name="order[company]"
              class="company"
              placeholder=""
              autocomplete="off"
            >
          </div>
        </div><input
          id="order__token"
          type="hidden"
          name="order[_token]"
          placeholder="order.entity._token"
          autocomplete="off"
          data-placeholder="order.entity._token"
          value="8SoODsuJTuk5aW5LnVsBN6FsTsIYNG9Gwtxf5cDsTzA"
        >
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
