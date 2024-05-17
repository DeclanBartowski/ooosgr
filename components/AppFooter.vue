<script setup lang="ts">
import PipeModal from "~/components/modals/PipeModal.vue";
defineProps(['footerdata']);
</script>

<template>
  <footer class="wrap">
    <div class="wrap_cont clearfix">
      <div
        class="copyright"
        v-html="footerdata.copyright.preview_text"
      />
      <div class="address" v-html="footerdata.address.preview_text">
      </div>
      <social-footer :socials="footerdata.social" />
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
