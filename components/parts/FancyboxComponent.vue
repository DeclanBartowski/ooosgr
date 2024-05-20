<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'
import type { Fancybox as FancyboxType } from '@fancyapps/ui/types'
import * as Fancyapps from '@fancyapps/ui'
const Fancybox: typeof FancyboxType = Fancyapps.Fancybox

const props = defineProps<{
  options?: FancyboxType
}>()

const container = ref(null)
const route = useRoute();

onMounted(() => {
  Fancybox.bind(container.value, '[data-fancybox]', {
    ...(props.options || {}),
    on: {
      init: () => {
        console.info('fancybox init ' + container.value)
      },
      done: (fancybox) => {
        // here `fancybox` refers to the current instance
      },
    }
  })
})

onUpdated(() => {
  Fancybox.unbind(container.value)
  Fancybox.close()

  Fancybox.bind(container.value, '[data-fancybox]', {
    ...(props.options || {})
  })
})

//onUnmounted(() => Fancybox.destroy());

watch(() => route.name, () => {
  Fancybox.unbind(container.value)
  Fancybox.close()

  Fancybox.bind(container.value, '[data-fancybox]', {
    ...(props.options || {})
  })
});
</script>

<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<style>
  @import '@fancyapps/ui/dist/fancybox/fancybox.css';
</style>
