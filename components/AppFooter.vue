<script setup lang="ts">
import PipeModal from "~/components/modals/PipeModal.vue";

const footerText  = ref({
    "copyright" : '© 2024 Металлобаза трубы б/у труба бу - СтройГеоРесурс.<br>Все права защищены. Копирование информации преследуется по закону.<br>Статья 146 УК РФ.',
    "address": '117105, Город Москва, вн.тер.г. муниципальный округ Нагатино-Садовники, ул Нагатинская, д.1',
    "phone": "+7 (495) 777-36-46",
    "email":"info@ooosgr.ru"
});
</script>

<template>
  <footer class="wrap">
    <div class="wrap_cont clearfix">
      <div
        class="copyright"
        v-html="footerText.copyright"
      />
      <div class="address">
        {{ footerText.address }}<br>
        <span class="callibri_phone1">{{ footerText.phone }}</span>,
        <a
          href="mailto:info@ooosgr.ru"
          title="Написать письмо"
        >{{ footerText.email }}</a>
      </div>
      <social-footer />
    </div>
  </footer>
  <div class="popup" id="popup-callback">
    <BitrixForm :title="'Мы вам перезвоним'"/>
  </div>
  <BitrixAgreementModal />
  <PipeModal />
  <OrderModal />
  <ProcurementModal />
</template>

<style scoped>
 .wrap_cont.clearfix {
   line-height: 20px;
 }
</style>
