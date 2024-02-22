<script setup lang="ts">
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
  ]
})
</script>

<template>
  <div
      id="pipe-calculator"
      class="widget pipe_calculator"
      style="left: -465px; display: block;"
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
                    style="display: none;"
                >
                  <option value=""/>
                  <option v-for="diameter in data.diameter" :value="diameter.value">
                    {{ diameter.name }}
                  </option>
                </select>
                <div
                    id="pipe_calculator_parameters_diameter_chosen"
                    class="chosen-container chosen-container-single"
                    style="width: 145px;"
                    title=""
                >
                  <a
                      class="chosen-single chosen-default"
                      tabindex="-1"
                  ><span>Диаметр</span>
                    <div><b/></div>
                  </a>
                  <div class="chosen-drop">
                    <div class="chosen-search">
                      <input
                          type="text"
                          autocomplete="off"
                      >
                    </div>
                    <ul class="chosen-results"/>
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
                    required="required"
                    class="input_mask_decimal_positive ng-pristine ng-untouched ng-invalid ng-invalid-required"
                    ng-change="updateMeters()"
                    ng-model="data.tons"
                    placeholder="Тонны"
                    data-placeholder="Тонны"
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
                    ng-change="updateMetersOrTons()"
                    ng-model="data.thickness"
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
                    style="width: 145px;"
                    title=""
                >
                  <a
                      class="chosen-single chosen-default"
                      tabindex="-1"
                  ><span>Стенка</span>
                    <div><b/></div>
                  </a>
                  <div class="chosen-drop">
                    <div class="chosen-search">
                      <input
                          type="text"
                          autocomplete="off"
                      >
                    </div>
                    <ul class="chosen-results"/>
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
                    ng-change="updateTons()"
                    ng-model="data.meters"
                    placeholder="Метры"
                    data-placeholder="Метры"
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
                    required="required"
                    class="input_mask_decimal_positive ng-pristine ng-untouched ng-invalid ng-invalid-required"
                    ng-change="updatePricePerMeter()"
                    ng-model="data.pricePerTon"
                    placeholder="Цена за тонну"
                    data-placeholder="Цена за тонну"
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
                    ng-change="updatePricePerTon()"
                    ng-model="data.pricePerMeter"
                    placeholder="Цена за метр"
                    data-placeholder="Цена за метр"
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
                    readonly="readonly"
                    required="required"
                    ng-model="data.totalPrice"
                    placeholder="Итоговая стоимость"
                    data-placeholder="Итоговая стоимость"
                    class="ng-pristine ng-untouched ng-valid ng-valid-required"
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
            <a
                class="btn red fancybox_dialog js-fancyboxOrder js-calculatorData"
                data-message=""
                href="#popup-order"
            >
              Заказать </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
