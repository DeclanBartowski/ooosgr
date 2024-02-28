<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'
import type { Fancybox as FancyboxType } from '@fancyapps/ui/types'
import * as Fancyapps from '@fancyapps/ui'
const Fancybox: typeof FancyboxType = Fancyapps.Fancybox

const props = defineProps<{
  options?: FancyboxType
}>()

const container = ref(null)

onMounted(() => {
  Fancybox.bind(container.value, '[data-fancybox]', {
    ...(props.options || {}),
    on: {
      init: () => {
        console.info('fancybox init')
      },
      done: (fancybox) => {
        // here `fancybox` refers to the current instance
      }
    }
  })
})

onUpdated(() => {
  Fancybox.unbind(container.value)
  Fancybox.close()

  Fancybox.bind(container.value, '[data-fancybox]', {
    ...(this.options || {})
  })
})

onUnmounted(() => Fancybox.destroy())
</script>

<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<style>
  @import '@fancyapps/ui/dist/fancybox/fancybox.css';
</style>
