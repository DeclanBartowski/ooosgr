<script setup lang="ts">
import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";
import type { ProcurementData } from '~/types/procurement'

const header = ref([
    'Наименование',
    'Объем',
    'Период',
    'Интересуемая цена',
    ''
  ]
)

defineProps<{
  data: ProcurementData
}>()
</script>

<template>
  <h2>{{ data.title }}</h2>

  <table
    border="1"
    cellpadding="1"
    cellspacing="1"
    class="table_procurement archetype archetype--720p"
  >
    <colgroup>
      <col>
      <col width="150">
      <col width="200">
      <col width="225">
    </colgroup>
    <thead>
      <tr>
        <th
          v-for="item in header"
          :key="item"
          scope="col"
        >
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in data.items"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.volume }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.price }}</td>
        <td>
          <FancyboxComponent
            :options="{
              defaultType:'html'
            }"
          >
            <a
              class="is_block btn red fancybox_inline"
              href="#popup-procurement"
              data-fancybox
            >ПРЕДЛОЖИТЬ</a>
          </FancyboxComponent>
        </td>
      </tr>
    </tbody>
  </table>

  <ul class="simple-list mobile mobile--720p">
    <li
      v-for="item in data.items"
      :key="item.name"
    >
      <div>
        <div class="simple-list__highlight">
          {{ item.name }}
        </div>

        <div>{{ item.date }}</div>

        <div>Цена: {{ item.price }}</div>
      </div>

      <div>
        <FancyboxComponent
          :options="{
            defaultType:'html'
          }"
        >
          <a
            class="is_block btn red fancybox_inline"
            href="#popup-procurement"
            data-fancybox
          >ПРЕДЛОЖИТЬ</a>
        </FancyboxComponent>
      </div>
    </li>
  </ul>
  <span
    class="procurement-description"
    v-html="data.info.detail_text"
  />
</template>

<style scoped>
.procurement-description {
  margin-top: 30px;
  display: block;
}
.table_procurement {
  margin-top: 35px;
}
</style>
