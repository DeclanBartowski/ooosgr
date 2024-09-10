import {VueReCaptcha} from 'vue-recaptcha-v3';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LeE-jwqAAAAANhJNMHGn_eQEwHxCKNGq9lhcyh8',
    });
});
