<script setup lang="ts">


import {useForm} from "vee-validate";
import axios from "axios";
import { useReCaptcha } from "vue-recaptcha-v3";

const props = defineProps(['message']);
const config = useRuntimeConfig()
const { executeRecaptcha } = useReCaptcha();

const { defineField, handleSubmit } = useForm({
  initialValues: {
    file: null,
    name: '',
    phone: '',
    parameters: props.message,
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

const [parameters, parametersAttrs] = defineField('parameters', {
  validateOnModelUpdate: false,
});

const status = ref('');

const onSubmit = async () => {
  const formData = new FormData();
  const token = await executeRecaptcha('orderModal');

  formData.append('file', file.value);
  formData.append('name', name.value);
  formData.append('phone', phone.value);
  formData.append('item', parameters.value);
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
};

const fileRef = ref(null);

const onFileLoad = () => {
  file.value = fileRef.value.files[0];
}

</script>

<template>

  <div
    id="popup-procurement"
    class="callback_form widget form form--procurement"
    style="display: none"
  >
    <template v-if="!status">
    <div class="title">
      Отправьте ваше предложение
    </div>
    <p>Заполните поля, и мы с вами свяжемся. Или отправьте предложение на почту <a href="mailto:info@ooosgr.ru">info@ooosgr.ru</a>.</p>

    <form
      name="procurement"
      @submit.prevent="onSubmit"
    >
      <div class="two columns">
        <div class="column w30">
          <div class="row">
            <div class="widget">
              <input
                id="procurement_name"
                type="text"
                required
                placeholder="Введите Ваше имя"
                autocomplete="off"
                data-placeholder="Введите Ваше имя"
                v-bind="nameAttrs"
                v-model="name"
              >
            </div>
          </div>
          <div class="row">
            <div class="widget">
              <input
                id="procurement_phone"
                type="text"
                required
                placeholder="Введите Ваш телефон"
                autocomplete="off"
                data-placeholder="Введите Ваш телефон"
                v-bind="phoneAttrs"
                v-model="phone"
              >
            </div>
          </div>
          <div class="row">
            <div class="widget">
              <input
                id="procurement_email"
                type="text"
                placeholder="Введите Ваш e-mail"
                autocomplete="off"
                data-placeholder="Введите Ваш e-mail"
                v-model="parameters"
                v-bind="parametersAttrs"
              >
            </div>
          </div>
        </div>
        <div class="column w70 text-pad-left">
          <div class="row">
            <div class="widget">
              <textarea
                id="procurement_message"
                required
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
                  <div id="order_attachments_0">
                    <input
                        id="order_attachments_0_id"
                        type="hidden"
                    >
                    <div class="widget_row clearfix">
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
                checked
                required
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
    </template>
    <template v-if="status" >
      <div class="title">
        Отправьте ваше предложение
      </div>
      <p>{{status ? " Предложение успешно отправлено!" : " Ошибка при отправке. Попробуйте позже."}}</p>
    </template>
  </div>
</template>

<style scoped>

</style>
