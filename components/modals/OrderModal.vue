<script setup lang="ts">
import {useForm} from "vee-validate";
import axios from "axios";
import { useReCaptcha } from "vue-recaptcha-v3";

const props = defineProps(['message', 'id']);
const config = useRuntimeConfig()
const { executeRecaptcha } = useReCaptcha();

const { defineField, handleSubmit } = useForm({
  initialValues: {
    file: null,
    name: '',
    phone: '',
  }
});


const [file, fileAttrs] = defineField('file', {
  validateOnModelUpdate: false,
});

const [name, nameAttrs] = defineField('name', {
  validateOnModelUpdate: false,
});

const [phone, phoneAttrs] = defineField('phone', {
  validateOnModelUpdate: false,
});

const status = ref('');

const onSubmit = handleSubmit( async () => {
  const formData = new FormData();
  const token = await executeRecaptcha('orderModal');

  formData.append('file', file.value);
  formData.append('name', name.value);
  formData.append('phone', phone.value);
  formData.append('item', props.message);
  formData.append('email', 'testemail@gmail.com');
  formData.append('diametr', '12');
  formData.append('token', token);

  const res = await axios({
    method: "POST",
    url: config.public.baseAPI+'form/send_offer',
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });

  if(res.status == 200) {
    if(res?.data?.status == 'success') {
      status.value = 'success';
    } else {
      status.value = 'error';
    }
  } else {
    status.value = 'error';
  }
});

const fileRef = ref(null);

const onFileLoad = () => {
  file.value = fileRef.value.files[0];
}

</script>

<template>
  <div
    :id="id ? id : 'popup-order'"
    class="popup"
    style="display: none;"
  >
    <div v-if="!status" class="callback_form widget form form--order">
      <div class="title">
        Оставить заявку
      </div>
      <p>Заполните поля, и наш менеджер свяжется с Вами в ближайшее время.</p>

      <form
        @submit.prevent="onSubmit"
      >
        <div>
          <div>
            <div class="row">
              <div class="widget">
                <input
                  id="order_name"
                  type="text"
                  required
                  v-bind="nameAttrs"
                  v-model="name"
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
                  required
                  v-bind="phoneAttrs"
                  v-model="phone"
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
                  readonly
                  required
                  class="js-orderMessage"
                  placeholder="Введите диаметр труб и др. параметры заказа"
                  autocomplete="off"
                  data-placeholder="Введите диаметр труб и др. параметры заказа"
                  :value="message"
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
                    ><div class="widget_row clearfix">
                      <div class="file_selector icon-file">
                        <div class="file_message">
                          {{file?.name ? file?.name : 'Нажмите, чтобы прикрепить файл.'}}

                        </div>
                        <div class="widget">
                          <input
                            id="order_attachments_0_file"
                            type="file"
                            :disabled="!!file"
                            @change="onFileLoad"
                            ref="fileRef"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a v-if="file" href="#" @click.prevent="file=null" class="remove-tag">✖</a>
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
                checked
                required
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
              class="company"
              placeholder=""
              autocomplete="off"
            >
          </div>
        </div><input
          id="order__token"
          type="hidden"
          placeholder="order.entity._token"
          autocomplete="off"
          data-placeholder="order.entity._token"
          value="8SoODsuJTuk5aW5LnVsBN6FsTsIYNG9Gwtxf5cDsTzA"
        >
      </form>
    </div>
    <div v-if="status" class="callback_form widget form form--order">
      <div class="title">
        Оставить заявку
      </div>
      <p>{{status ? " Запрос отправлен успешно!" : " Запрос не отправлен. Попробуйте позже"}}</p>
    </div>
  </div>

</template>

<style scoped>

</style>
