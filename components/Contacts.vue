<script setup lang="ts">
import type { NameValue } from '~/types/root'

defineProps<{
  contact: NameValue[]
}>()
</script>

<template>
  <div class="wrap content page contacts page--kontakty">
    <div class="wrap_cont">
      <h1>Контакты</h1>
      <div class="text">
        <table class="info_table archetype archetype--720p">
          <tbody>
            <tr>
              <th style="width: 235px;" />
              <th style="width: 300px;">
                Центральный офис
              </th>
            </tr>
            <tr
              v-for="param in contact"
              :key="param.name"
            >
              <td><b>{{ param.name }}</b></td>
              <td>
                <template v-if="typeof param.value =='object' && param.value">
                  <ul>
                    <li
                      v-for="(item, index) in param.value"
                      :key="index"
                      :class="{'callibri_phone': index === 0}"
                    >
                      {{ item ?? '' }}
                    </li>
                  </ul>
                </template>
                <template v-else>
                  {{ param.value ?? '' }}
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul class="simple-list simple-list--full mobile mobile--720p">
        <li>
          <div>
            <p class="simple-list__headline">
              Центральный офис
            </p>
            <p
              v-for="param in contact"
              :key="param.name"
            >
              <b>{{ param.name }}</b><br>
              <template v-if="typeof param.value =='object' && param.value">
                <ul>
                  <li
                    v-for="(item, index) in param.value"
                    :key="index"
                    :class="{'callibri_phone': index === 0}"
                  >
                    {{ item ?? '' }}
                  </li>
                </ul>
              </template>
              <template v-else>
                {{ param.value ?? '' }}
              </template>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <br>
    <BitrixForm />
    <div class="push" />
  </div>
</template>

<style scoped>

</style>
