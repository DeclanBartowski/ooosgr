<script setup lang="ts">
import FancyboxComponent from "~/components/parts/FancyboxComponent.vue";

const data = ref({
  diameter: [
    {
      name: '32',
      value: '32',
    },
    {
      name: '40',
      value: '40',
    },
    {
      name: '45',
      value: '45',
    },
    {
      name: '51',
      value: '51',
    },
    {
      name: '57',
      value: '57',
    },
    {
      name: '60',
      value: '60',
    },
    {
      name: '76',
      value: '76',
    },
    {
      name: '89',
      value: '89',
    },
  ],
  wall:[
    {
      name: '2',
      value: '2',
    },
    {
      name: '2.8',
      value: '2',
    },
    {
      name: '3',
      value: '3',
    },
    {
      name: '3.5',
      value: '3',
    },
    {
      name: '4',
      value: '4',
    },
    {
      name: '5.5',
      value: '5.5',
    },
    {
      name: '6.5',
      value: '6.5',
    },
    {
      name: '7.5',
      value: '7.5',
    },
    {
      name: '8.5',
      value: '8.5',
    },
    {
      name: '9.5',
      value: '9.5',
    },
    {
      name: '10.5',
      value: '10.5',
    },
    {
      name: '11.5',
      value: '11.5',
    },
  ]
})


const meters = ref('');
const tons = ref('');

const wallMenuActive = ref(false);
const wall = ref('');
const searchWall = ref('');
const pricePerTon = ref('');
const pricePerMeter = ref('');
const resultPrice = ref('');

const choseWall = (wallValue: string) => {
  wallMenuActive.value = false;
  wall.value = wallValue;
  searchWall.value = "";
}

watch(searchWall, (newValue, oldValue) => {
  if(!/^-?\d*$/.test(searchWall.value)) searchWall.value = oldValue;
})

const diameterMenuActive = ref(false);
const diameter = ref('');

watch(diameter, () => {
  const weightInKilo = (+diameter.value - +wall.value) * +wall.value * 0.02466;
  const weightInTons = (weightInKilo / 1000) * +meters.value;
  tons.value = weightInTons.toFixed(3);

  resultPrice.value = (+pricePerTon.value * +tons.value).toFixed(1);
})

watch(wall, () => {
  const weightInKilo = (+diameter.value - +wall.value) * +wall.value * 0.02466;
  const weightInTons = (weightInKilo / 1000) * +meters.value;
  tons.value = weightInTons.toFixed(3);

  resultPrice.value = (+pricePerTon.value * +tons.value).toFixed(1);
})

const searchDiameter = ref('');

const choseDiameter = (diameterValue: string) => {
  diameterMenuActive.value = false;
  diameter.value = diameterValue;
  searchDiameter.value = "";
}

watch(searchDiameter, (newValue, oldValue) => {
  if(!/^-?\d*$/.test(searchDiameter.value)) searchDiameter.value = oldValue;
})

watch(meters, (next, prev) => {
  if(+next == 0) meters.value = '';
  if(!/^(?:\d*|\d+\.\d*|\d*\.\d*|\.\d*)$/.test(next)) meters.value = prev;
  if(isNaN(+next)) meters.value = prev;

  resultPrice.value = (+pricePerTon.value * +tons.value).toFixed(1);
})

watch(tons, (next, prev) => {
  if(+next == 0) tons.value = '';
  if(!/^(?:\d*|\d+\.\d*|\d*\.\d*|\.\d*)$/.test(next)) tons.value = prev;
  if(isNaN(+next)) tons.value = prev;

  resultPrice.value = (+pricePerTon.value * +tons.value).toFixed(1);
})

const updateTons = () => {
  const weightInKilo = (+diameter.value - +wall.value) * +wall.value * 0.02466;
  const weightInTons = (weightInKilo / 1000) * +meters.value;
  tons.value = weightInTons.toFixed(3);
}

const updateMeters = () => {
  const weightInKilo = (+diameter.value - +wall.value) * +wall.value * 0.02466;
  const metersFromTons = (+tons.value/weightInKilo) * 1000;
  meters.value = metersFromTons.toFixed(3);
}

const updatePricePerMeter = () => {
  pricePerMeter.value = (+pricePerTon.value * 0.0019).toFixed(4);
  resultPrice.value = (+pricePerTon.value * +tons.value).toFixed(1);
}

const updatePricePerTon = () => {
  pricePerTon.value = (+pricePerMeter.value / 0.0019).toFixed(4);
  resultPrice.value = (+pricePerTon.value * +tons.value).toFixed(1);
}

watch(pricePerTon, (next, prev) => {
  if(+next == 0) pricePerTon.value = '';
  if(!/^(?:\d*|\d+\.\d*|\d*\.\d*|\.\d*)$/.test(next)) pricePerTon.value = prev;
})

watch(resultPrice, (next, prev) => {
  if(+next == 0) resultPrice.value = '';
  if(!/^(?:\d*|\d+\.\d*|\d*\.\d*|\.\d*)$/.test(next)) resultPrice.value = prev;
})

watch(pricePerMeter, (next, prev) => {
  if(!/^(?:\d*|\d+\.\d*|\d*\.\d*|\.\d*)$/.test(next)) pricePerMeter.value = prev;
})

const pipeMessage = ref(`
  Диаметр: ${diameter.value}мм
  Стенка:  ${wall.value}мм
  Тонны:  ${tons.value}тн
  Цена за тонну:  ${pricePerTon.value}руб/тн
  Цена за метр:  ${pricePerMeter.value}руб/м
  -----
  * Итоговая стоимость: ${resultPrice.value} руб.
`);

</script>

<template>
  <div
      id="pipe-calculator"
      class="widget pipe_calculator"
      style="display: none;"
  >
    <div class="title">
      Основные параметры
    </div>

    <div class="form form_horizontal">
      <form
          name="pipe_calculator"
          method="post"
          action=""
          ng-app="pipeCalculator"
          ng-controller="calculatorController"
          class="ng-pristine ng-scope ng-invalid ng-invalid-required"
      >
        <p>Введите исходные данные</p>
        <div class="two columns">
          <div class="column">
            <div class="row">
              <div class="widget">
                <select
                    id="pipe_calculator_parameters_diameter"
                    name="pipe_calculator[parameters][diameter]"
                    ng-change="updateMetersOrTons()"
                    ng-model="data.diameter"
                    placeholder="Диаметр"
                    data-placeholder="Диаметр"
                    class="ng-pristine ng-untouched ng-valid"
                    style="display: none"
                >
                  <option value=""/>
                  <option v-for="diameter in data.diameter" :value="diameter.value">
                    {{ diameter.name }}
                  </option>
                </select>
                <div
                    id="pipe_calculator_parameters_diameter_chosen"
                    class="chosen-container chosen-container-single"
                    :class="{'chosen-with-drop' : diameterMenuActive, 'chosen-container-active': diameterMenuActive}"
                    style="width: 145px;"
                    title=""
                >
                  <a
                      class="chosen-single chosen-default"
                      tabindex="-1"
                      @click="diameterMenuActive = !diameterMenuActive"
                  ><span>{{diameter ? diameter : "Диаметр"}}</span>
                    <div v-if="diameter">
                      <abbr class="search-choice-close" @click="choseDiameter('')"></abbr>
                    </div>
                    <div>
                      <b/>
                    </div>
                  </a>
                  <div class="chosen-drop">
                    <div class="chosen-search">
                      <input
                          type="text"
                          autocomplete="off"
                          v-model="searchDiameter"
                      >
                    </div>
                    <ul class="chosen-results">
                      <div v-if="searchDiameter">
                        <li
                            v-for="diameter in data.diameter.filter((item) => item.name.includes(searchDiameter))"
                            @click="choseDiameter(diameter.name)"
                            class="active-result"
                            :data-option-array-index="diameter.value"
                            v-html="diameter.value.replace(searchDiameter, '<u>'+searchDiameter+'</u>')"
                        >

                        </li>
                      </div>
                      <div v-else>
                        <li v-for="diameter in data.diameter" @click="choseDiameter(diameter.name)" class="active-result" :data-option-array-index="diameter.value">
                          {{ diameter.name }}
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="symbol">
                <label for="pipe_calculator_parameters_diameter">
                  мм</label>
              </div>
            </div>
            <div class="row">
              <div class="widget">
                <input
                    id="pipe_calculator_parameters_tons"
                    type="text"
                    name="pipe_calculator[parameters][tons]"
                    required
                    class="input_mask_decimal_positive ng-pristine ng-untouched ng-invalid ng-invalid-required"
                    placeholder="Тонны"
                    data-placeholder="Тонны"
                    v-model="tons"
                    @input="updateMeters"
                >
              </div>
              <div class="symbol">
                <label
                    for="pipe_calculator_parameters_tons"
                    class="required"
                >
                  тн</label>
              </div>
            </div>
          </div>
          <div class="column text-pad-left">
            <div class="row">
              <div class="widget">
                <select
                    id="pipe_calculator_parameters_thickness"
                    name="pipe_calculator[parameters][thickness]"
                    placeholder="Стенка"
                    data-placeholder="Стенка"
                    class="ng-pristine ng-untouched ng-valid"
                    style="display: none;"
                >
                  <option value=""/>
                  <option v-for="wall in data.wall" :value="wall.value">
                    {{ wall.name }}
                  </option>
                </select>
                <div
                    id="pipe_calculator_parameters_thickness_chosen"
                    class="chosen-container chosen-container-single"
                    :class="{'chosen-with-drop' : wallMenuActive, 'chosen-container-active': wallMenuActive}"
                    style="width: 145px;"
                    title=""
                >
                  <a
                      class="chosen-single chosen-default"
                      @click="wallMenuActive = !wallMenuActive"
                      tabindex="-1"
                  ><span>{{wall ? wall : "Стенка"}}</span>
                    <div v-if="wall">
                      <abbr class="search-choice-close" @click="choseWall('')"></abbr>
                    </div>
                    <div><b/></div>
                  </a>
                  <div class="chosen-drop">
                    <div class="chosen-search">
                      <input
                          type="text"
                          autocomplete="off"
                          v-model="searchWall"
                      >
                    </div>
                    <ul class="chosen-results">
                      <div v-if="searchWall">
                        <li v-for="wall in data.wall.filter((item) => item.name.includes(searchWall))"
                            @click="choseWall(wall.name)"
                            :value="wall.value"
                            class="active-result"
                            :data-option-array-index="wall.value"
                            v-html="wall.value.replace(searchWall, '<u>'+searchWall+'</u>')"
                        >
                        </li>
                      </div>
                      <div v-else>
                        <li v-for="wall in data.wall" @click="choseWall(wall.name)" class="active-result" :data-option-array-index="wall.value">
                          {{ wall.name }}
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="symbol">
                <label for="pipe_calculator_parameters_thickness">
                  мм</label>
              </div>
            </div>
            <div class="row">
              <div class="widget">
                <input
                    id="pipe_calculator_parameters_meters"
                    type="text"
                    name="pipe_calculator[parameters][meters]"
                    required="required"
                    class="input_mask_decimal_positive ng-pristine ng-untouched ng-invalid ng-invalid-required"
                    placeholder="Метры"
                    data-placeholder="Метры"
                    v-model="meters"
                    @input="updateTons"
                >
              </div>
              <div class="symbol">
                <label
                    for="pipe_calculator_parameters_meters"
                    class="required"
                >
                  м</label>
              </div>
            </div>
          </div>
        </div>
        <p>Укажите цену, чтобы рассчитать стоимость</p>
        <div class="two columns">
          <div class="column">
            <div class="row">
              <div class="widget">
                <input
                    id="pipe_calculator_price_price_per_ton"
                    type="text"
                    name="pipe_calculator[price][price_per_ton]"
                    required
                    class="input_mask_decimal_positive ng-pristine ng-untouched ng-invalid ng-invalid-required"
                    placeholder="Цена за тонну"
                    data-placeholder="Цена за тонну"
                    v-model="pricePerTon"
                    @input="updatePricePerMeter"
                >
              </div>
              <div class="symbol">
                <label
                    for="pipe_calculator_price_price_per_ton"
                    class="required"
                >
                  руб/тн</label>
              </div>
            </div>
          </div>
          <div class="column text-pad-left">
            <div class="row">
              <div class="widget">
                <input
                    id="pipe_calculator_price_price_per_meter"
                    type="text"
                    name="pipe_calculator[price][price_per_meter]"
                    required="required"
                    class="input_mask_decimal_positive ng-pristine ng-untouched ng-invalid ng-invalid-required"
                    placeholder="Цена за метр"
                    data-placeholder="Цена за метр"
                    v-model="pricePerMeter"
                    @input="updatePricePerTon"
                >
              </div>
              <div class="symbol">
                <label
                    for="pipe_calculator_price_price_per_meter"
                    class="required"
                >
                  руб/м</label>
              </div>
            </div>
          </div>
        </div>
        <p>Итоговая стоимость</p>
        <div class="two columns">
          <div class="column">
            <div class="row">
              <div class="widget">
                <input
                    id="pipe_calculator_total_price_total_price"
                    type="text"
                    name="pipe_calculator[total_price][total_price]"
                    readonly
                    required
                    placeholder="Итоговая стоимость"
                    data-placeholder="Итоговая стоимость"
                    class="ng-pristine ng-untouched ng-valid ng-valid-required"
                    v-model="resultPrice"
                >
              </div>
              <div class="symbol">
                <label
                    for="pipe_calculator_total_price_total_price"
                    class="required"
                >
                  руб.</label>
              </div>
            </div>
          </div>
          <div class="column text-pad-left">
            <FancyboxComponent
                :options="{
                  defaultType:'html'
                }"
            >

                <a
                    class="btn red fancybox_dialog js-fancyboxOrder js-calculatorData"
                    href="#popup-order"
                    @click="pipeMessage =
`Диаметр: ${diameter} мм
Стенка:  ${wall} мм
Тонны:  ${tons} тн
Цена за тонну:  ${pricePerTon} руб/тн
Цена за метр:  ${pricePerMeter} руб/м
-----
* Итоговая стоимость: ${resultPrice} руб.
`"
                    data-fancybox="pipe"
                >
                  Заказать
                </a>

            </FancyboxComponent>
        </div>
        </div>
      </form>
      <OrderModal :message="pipeMessage"/>
    </div>
  </div>
</template>

<style scoped>
.pipe_calculator.widget {
  position: relative;
  left: 0;
  top: 0;
  background-color: rgba(221, 225, 235, 1);
}
</style>
