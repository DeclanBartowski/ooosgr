<script setup lang="ts">
const data = ref([
  {
    name: 'Наименование организации',
    value: 'ООО «СтройГеоРесурс»',
  },
  {
    name: 'Контактные лица',
    value: 'Антон, Татьяна, Рафаиль, Иван, Алексей',
  },
  {
    name: 'Адрес офиса',
    value: '117105, Город Москва, вн.тер.г. муниципальный округ Нагатино-Садовники, ул Нагатинская, д.1',
  },
  {
    name: 'Адрес склада',
    value: 'Московская область, Ступинский район, деревня Семеновское',
  },
  {
    name: 'Телефоны',
    value: [
      '+7 (495) 777-36-46 Офис',
      '+7 (977) 310-02-32 Антон',
      '+7 (915) 297-17-05 Татьяна',
      '+7 (977) 712-14-50 Рафаиль',
      '+7 (902) 002-28-28 Иван',
      '+7 (926) 787-36-46 Алексей',
    ],
  },
  {
    name: 'E-mail',
    value: 'info@ooosgr.ru',
  },
])
</script>

<template>
  <div class="wrap content page contacts page--kontakty">
    <div class="wrap_cont">
      <h1>Контакты</h1>
      <div class="text">
        <table class="info_table archetype archetype--720p">
          <tbody>
          <tr>
            <th style="width: 235px;"/>
            <th style="width: 300px;">
              Центральный офис
            </th>
          </tr>
          <tr v-for="param in data">
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
            <p v-for="param in data">
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
    <div class="push"/>
  </div>
</template>

<style scoped>

</style>
