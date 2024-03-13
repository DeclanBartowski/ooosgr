<script setup>
import TrenchBitrixForm from "~/components/forms/TrenchBitrixForm.vue";
import { Carousel, Slide } from 'vue3-carousel'

const carousel = ref(null);
const mobileCarousel = ref(null);

import 'vue3-carousel/dist/carousel.css'

const computerWidth = computed(() => {
  return window?.innerWidth > 576
})

</script>

<template>
  <div class="trench-preview">
    <img src="~/assets/images/trench/banner.png" class="trench-preview__img" alt="">
  </div>
  <h2 class="excavation-block__title">
    Земляные работы
  </h2>
  <div class="excavation-block">
    <div class="excavation-block-part">
      <p class="desc">
        Одно из основных направлений компании СТРОЙГЕОРЕСУРС является разработка котлованов для строительства зданий,
        дорог и других инженерных сооружений.
        Наша команда профессионалов специализируется на проектировании и строительстве котлованов любой
        обеспечивая высокое качество работ и соблюдение всех технических требований.
        <br>
        <br>
        Мы предлагаем комплексный подход к выполнению проектов, начиная с тщательного анализа местности,
        геологических условий, проектирования оптимальной конструкции котлована и заканчивая контролем исполнения работ.
        Наш профессиональный опыт позволяет обеспечить заказчиков надежными и эффективными решениями для разработки котлованов,
        соответствующими необходимым стандартам качества и безопасности.
      </p>
    </div>
    <div class="excavation-block-part">
      <img src="~/assets/images/trench/excavation1.png" alt="excavation">
    </div>
  </div>

  <h2 class="excavation-block__title visible">
    Высокие требования
  </h2>
  <div class="excavation-block excavation-block-part-no-reverse">
    <div class="excavation-block-part">
      <img src="~/assets/images/trench/excavation2.png" alt="excavation">
    </div>
    <div class="excavation-block-part blue excavation-block-part-padding">
      <h2 class="excavation-block__title in-block no-visible">
        Высокие требования
      </h2>
      <p class="center desc">
        Рытье котлована – очень важный подготовительный этап строительства.
        От качества котлованных работ зависит надежность фундамента и всего последующего сооружения.
        <br>
        <br>
        Компания СТРОЙГЕОРЕСУРС предлагает услуги по механизированной и ручной разработке грунта для организаций и частных заказчиков.
        Мы обеспечиваем высокое качество земляных работ, используя парк профессиональной спецтехники, даже в стесненных городских условиях.
      </p>
    </div>
  </div>

  <h2 class="excavation-block__title big-margin">
    Этапы разработки проекта
  </h2>

  <div class="stages-block">
    <p class="step-description">
      <span class="step-number">
        01
      </span>
      <span>
        <br>
        &emsp;
        Выполнение проектных работ с установлением параметров выемки
      </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          02
        </span>
      <span>
          <br>
          &emsp;
          Монтаж шпунтового ограждения стенок, забирки, обвязок и распорной системы
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          03
        </span>
      <span>
          <br>
          &emsp;
          Выбор грунта по проектным отметкам
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          04
        </span>
      <span>
          <br>
          &emsp;
         Погрузка, транспортировка, складирование грунта
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          05
        </span>
      <span>
          <br>
          &emsp;
          Утилизация грунта на специализированных полигонах
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          06
        </span>
      <span>
          <br>
          &emsp;
          Выполнение, выравнивание и укрепление откосов, берм
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          07
        </span>
      <span>
          <br>
          &emsp;
          планировка днища с уплотнением
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          08
        </span>
      <span>
          <br>
          &emsp;
          Обратная засыпка пазух с послойным трамбованием
        </span>
    </p>
  </div>
  <div class="feedback-form">
    <BitrixForm />
  </div>
  <h2 class="excavation-block__title">
    Спецтехника нашей компании
  </h2>
  <div class="excavation-block excavation-block-part-no-reverse">
    <div class="excavation-block-part">
      <p class="desc">
        Разработка и последующее устройство котлованов осуществляется с привлечением специализированной техники высокой производительности.
        Основная спецтехника на объекте – экскаваторы, самосвалы, буровые установки, вибропогружатели и краны.
        <br>
        <br>
        Но помимо них для оперативной и качественной работы, в зависимости от их характера,
        требуются другие машины: бульдозеры, погрузчики, грейдеры, манипуляторы, ямобуры, гидромолоты.
      </p>
    </div>
    <div class="excavation-block-part full-width">
      <img src="~/assets/images/trench/technique.png" alt="excavation">
    </div>
  </div>
  <div class="excavation-block excavation-block-part-no-reverse">
    <div class="excavation-block-part">
    </div>
    <div class="excavation-block-part no-full">
      <p class="tech-description">
        Компания СТРОЙГЕОРЕСУРС имеет в распоряжении достаточное количество спецтехники для выполнения работ нулевого цикла
      </p>
      <ul class="tech-list">
        <li class="tech-list__item"><div class="tech-list_item-block"><span class="bold">Экскаваторы</span> <span>2 {{ computerWidth ? 'единицы' : 'ед' }}</span> <span class="bold">Komatsu pc400, XCMG XE225DN</span></div></li>
        <li class="tech-list__item"><div class="tech-list_item-block"><span class="bold">Самосвалы</span> <span>5 {{ computerWidth ? 'единиц' : 'ед' }}</span> <span class="bold">Scania p440, Камаз 6520</span></div></li>
        <li class="tech-list__item"><div class="tech-list_item-block"><span class="bold">Длинномеры</span> <span>2 {{ computerWidth ? 'единицы' : 'ед' }}</span> <span class="bold">Scania r440</span></div></li>
        <li class="tech-list__item"><div class="tech-list_item-block"><span class="bold">Вибропогружатель</span> <span>1 {{ computerWidth ? 'единица' : 'ед' }}</span> <span class="bold">Мuller MS 24 HFV</span></div></li>
      </ul>
    </div>
  </div>
  <div class="title-block">
    <h2 class="excavation-block__title center">
      Для каждого проекта мы подбираем оптимальный состав землеройной техники по мощности и производительности, в том числе привлекаем подрядную. На данной технике работают опытные водители и операторы с необходимой квалификацией
    </h2>
  </div>
  <div class="tech-cards-block">
    <div class="tech-card">
      <img src="../assets/images/trench/tech/bulldozer.png" alt="bulldozer">
      <p>Бульдозер</p>
    </div>
    <div class="tech-card">
      <img src="../assets/images/trench/tech/tipper.png" alt="tipper">
      <p>Самосвал</p>
    </div>
    <div class="tech-card">
      <img src="../assets/images/trench/tech/excavator1.png" alt="excavator1">
      <p>Гусеничный экскаватор</p>
    </div>
    <div class="tech-card">
      <img src="../assets/images/trench/tech/excavator2.png" alt="excavator2">
      <p>Гусеничный экскаватор</p>
    </div>
    <div class="tech-card">
      <img src="../assets/images/trench/tech/hydraulic-hammer.png" alt="hydraulic">
      <p>Гидромолот</p>
    </div>
    <div class="tech-card">
      <img src="../assets/images/trench/tech/excavator3.png" alt="excavator3">
      <p>Колёсный экскаватор</p>
    </div>
  </div>
  <h2 class="excavation-block__title big-margin">
    Факторы, влияющие на стоимость проекта
  </h2>

  <div class="stages-block">
    <p class="step-description">
      <span class="step-number">
        01
      </span>
      <span>
        <br>
        &emsp;
        размер котлована: площадь и глубина
      </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          02
        </span>
      <span>
          <br>
          &emsp;
         расположение, транспортная доступность, возможность подъезда техники
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          03
        </span>
      <span>
          <br>
          &emsp;
         соседство со строениями, коммуникациями, зелеными насаждениями
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          04
        </span>
      <span>
          <br>
          &emsp;
         характеристика грунта: чистота, вторичный слой, грунтовые воды
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          05
        </span>
      <span>
          <br>
          &emsp;
          наличие распорной системы
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          06
        </span>
      <span>
          <br>
          &emsp;
         необходимость вывоза и утилизации грунта, его объем
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          07
        </span>
      <span>
          <br>
          &emsp;
          спецтехника и специалисты, задействованные в проекте
        </span>
    </p>
    <p class="step-description">
        <span class="step-number">
          08
        </span>
      <span>
          <br>
          &emsp;
          срок реализации проекта
        </span>
    </p>
  </div>
  <div class="advantages-block">
    <h2 class="advantages-block__title big-margin white">
      Наши преимущества
    </h2>
    <ul class="advantages-block__list">
      <li class="advantages-block__list-item">
        <p>
          опыт котлованных работ 14 лет
        </p>
      </li>
      <li class="advantages-block__list-item">
        <p>
          разработка всех типов котлованов
        </p>
      </li>
      <li class="advantages-block__list-item">
        <p>
          утилизация грунта с электронными талонами в АИС ОССИГ
        </p>
      </li>
      <li class="advantages-block__list-item">
        <p>
          быстрый выход на площадку
        </p>
      </li>
      <li class="advantages-block__list-item">
        <p>
          максимальный темп разработки
        </p>
      </li>
      <li class="advantages-block__list-item">
        <p>
          квалифицированные специалисты, необходимая спецтехника
        </p>
      </li>
      <li class="advantages-block__list-item">
        <p>
          эффективные решения по разработке, оптимизация расходов
        </p>
      </li>
      <li class="advantages-block__list-item">
        <p>
          качественная реализация сложных проектов
        </p>
      </li>
      <li class="advantages-block__list-item">
        <p>
          неукоснительное соблюдение технологии, техники безопасности, законодательства
        </p>
      </li>
    </ul>
  </div>
  <h2 class="excavation-block__title big-margin">
    Примеры работ
  </h2>
  <Carousel class="full-carousel" ref="carousel" :wrap-around="true" :items-to-show="3.4">
    <Slide v-for="slide in 4" :key="slide">
      <div class="carousel__item">
        <img :src="'/_nuxt/assets/images/trench/slider/'+slide+'.png'" alt="">
      </div>
    </Slide>
  </Carousel>

  <Carousel class="mobile-carousel" ref="mobileCarousel" :wrap-around="true" :items-to-show="2.5">
    <Slide v-for="slide in 4" :key="slide">
      <div class="carousel__item">
        <img :src="'/_nuxt/assets/images/trench/slider/'+slide+'.png'" alt="">
      </div>
    </Slide>
  </Carousel>
  <div class="slider-buttons-mobile">
    <button class="slider-btn" @click="mobileCarousel.prev()">
      <img src="~/assets/images/trench/prev.png" alt="">
    </button>
    <button class="slider-btn" @click="mobileCarousel.next()">
      <img src="~/assets/images/trench/next.png" alt="">
    </button>
  </div>

  <div class="slider-buttons-full">
    <button class="slider-btn" @click="carousel.prev()">
      <img src="~/assets/images/trench/prev.png" alt="">
    </button>
    <button class="slider-btn" @click="carousel.next()">
      <img src="~/assets/images/trench/next.png" alt="">
    </button>
  </div>
  <div class="feedback-form">
    <BitrixForm />
  </div>
  <div style="height: 20vh"></div>
</template>

<style scoped>

.trench-preview {
  width: 100%;
  max-width: 1260px;

  margin: auto;
}

.trench-preview__img {
  width: 100%;
  box-shadow: 0 25px 20px -20px rgba(0,0,0,0.75);
}

.trench-preview__title {
  font-family: 'RoadRadio', sans-serif;
  font-weight: 300;
  font-size: calc(22px + (48 + 48 * 0.2) * ((100vw - 392px) / 1920));
  color: #ffffff;
  line-height: normal;
  width: 60%;
  padding: 5% 5%;
  text-transform: uppercase;
}

@media(max-width: 576px) {

  .trench-preview__title {
    width: 70%;
    padding: 10% 5%;
  }
}

.excavation-block {
  width: 100%;
  max-width: 1260px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 100px;
}

.excavation-block-part {
  width: 50%;
}

.excavation-block-part .in-block {
  width: 100%;
  margin-top: 0;
}

.excavation-block .desc {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: calc(14px + (2 + 2 * 0.2) * ((100vw - 392px) / 1920));
  line-height: normal;
  width: 98%;
  margin: auto;
}


.excavation-block-part img {
  width: 100%;
  height: 100%;
}

.excavation-block-part-padding {
  padding: 3% 3%;
}

.excavation-block-part + .full-width img {
  height: auto;
  width: 100%;
}

.excavation-block__title {
  font-family: 'RoadRadio', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #292B7C;
  line-height: normal;
  text-transform: uppercase;
  width: 90%;
  max-width: 1260px;
  margin: 60px auto 40px;
}

@media(max-width: 576px) {
  .excavation-block__title {
    margin: 100px auto 30px;
  }
}

.visible {
  display: none;
}

.big-margin {
  margin-bottom: 50px;
}

@media(max-width: 1260px) {
  .excavation-block {
    flex-direction: column-reverse;
  }

  .excavation-block-part-padding {
    padding: 0;
  }

  .excavation-block  p {
    width: 95%;
  }

  .excavation-block .no-visible {
    display: none;
  }

  .visible {
    display: block;
  }

  .excavation-block-part {
    width: 100%;
  }

  .excavation-block-part + .no-full {
    width: 90%;
    margin: auto;
  }

  .excavation-block-part:nth-child(2) {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .excavation-block-part-no-reverse {
    flex-direction: column;
  }

}

@media(max-width: 576px) {
  .excavation-block {
    width: 100%;
    margin: 0 auto 50px;
  }

  .excavation-block p {
    width: 95%;
    margin: auto;
    padding: 0;
  }
}

.excavation-block .blue {
  background-color: #DFE8F1;
}

.stages-block {
  width: 95%;
  max-width: 1260px;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(auto-fill, min-content);
  grid-template-columns: repeat(auto-fill, minmax(300px, 500px));
  justify-content: space-between;
  grid-row-gap: 60px;
}

@media(max-width: 1200px) {
  .stages-block {
    grid-template-columns: repeat(auto-fill, 400px);
  }
}

@media(max-width: 992px) {
  .stages-block {
    grid-template-columns: repeat(auto-fill, minmax(200px, 600px));
    justify-content: center;
  }
}

.step-number {
  font-family: 'RoadRadio', sans-serif;
  font-weight: 700;
  font-size: calc(36px + (22 + 22 * 0.2) * ((100vw - 392px) / 1920));
  color: #8A8C8B;
}

.step-description {
  font-family: 'RoadRadio', sans-serif;
  width: 100%;
  line-height: normal;
  font-weight: 700;
  font-size: calc(20px + (4 + 4 * 0.2) * ((100vw - 392px) / 1920));
  display: flex;
  align-content: start;
  height: min-content;
}

.tech-description {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: calc(16px + (8 + 8 * 0.2) * ((100vw - 392px) / 1920));
  line-height: normal;
  margin-bottom: 65px!important;
}

.tech-list{
  width: 100%;
}

.tech-list__item {
  list-style-type: disc!important;
  margin-left: 15px;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: calc(14px + (4 + 4 * 0.2) * ((100vw - 392px) / 1920));
  line-height: normal;
}

.tech-list_item-block {
  display: grid;
  grid-template-columns: 30% minmax(auto, 30%) minmax(auto, 40%);
}

.tech-list_item-block .bold {
  font-weight: 600;
}

@media(max-width: 576px) {
  .tech-list_item-block {
    grid-template-columns: 45% minmax(auto, 10%) minmax(auto, 45%);
  }
}

.title-block {
  width: 100%;
  max-width: 1620px;
  background-color: #DFE8F1;
  margin: auto;
  text-align: center;
}

.title-block .excavation-block__title {
  padding: 75px 30px;
  font-size: calc(20px + (20 + 20 * 0.2) * ((100vw - 392px) / 1920));
}

@media(max-width: 576px) {
  .title-block .excavation-block__title {
    padding: 75px 15px;
  }
}

.tech-cards-block {
  width: 85%;
  max-width: 1260px;
  margin: 0 auto 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 500px));
  grid-template-rows: repeat(auto-fill, minmax(auto, auto));
  row-gap: 65px;
  justify-content: space-between;
}

@media(max-width: 1200px) {
  .tech-cards-block {
    grid-template-columns: repeat(auto-fill, minmax(auto, 400px));
    justify-content: space-between;
  }
}

@media(max-width: 992px) {
  .tech-cards-block {
    grid-template-columns: repeat(auto-fill, minmax(auto, 450px));
    justify-content: center;
  }
}

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tech-card p {
  font-family: 'RoadRadio', sans-serif;
  font-size: calc(24px + (12 + 12 * 0.2) * ((100vw - 392px) / 1920));
  font-weight: 700;
  text-align: center;
  margin-top: 10px;
  line-height: 1.3;
}

.tech-card img {
  width: 100%;
}

.advantages-block {
  margin-top: 150px;
  width: 100%;
  background:  url(~/assets/images/trench/advantages-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 85px 0;
}

.advantages-block__title {
  font-family: 'RoadRadio', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
  line-height: normal;
  text-transform: uppercase;
  width: 80%;
  margin: 0 auto 40px;
}

.advantages-block__list {
  width: 75%;
  margin: auto;
}

.advantages-block__list-item {
  list-style-type: disc;
  font-family: 'Open Sans', sans-serif;
  font-size: calc(14px + (8 + 8 * 0.2) * ((100vw - 392px) / 1920));
  line-height: 1.5;
  font-weight: 400;
  color: #ffffff;
  word-wrap: normal;
  height: min-content;
}

@media(max-width: 576px) {
  .advantages-block__title {
    margin: 0 auto 30px;
    width: 90%;
  }
  .advantages-block {
    margin-top: 100px;
    padding: 30px 0 40px;
  }
}

.carousel__item {
  width: 90%;
  border-radius: 5%;
}

.carousel__item img {
  width: 100%;
}

.slider-buttons-full {
  margin-top: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.slider-btn {
  width: 72px;
  height: 72px;
  outline: none;
  border: none;
  border-radius: 50px;
  background-color: #D9D9D9;
  cursor: pointer;
  margin: 0 10px;
}

.mobile-carousel {
  display: none;
}

.full-carousel {
  display: block;
}

.slider-buttons-mobile {
  display: none;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.85);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--visible {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.85);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.85);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.85);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

@media(max-width: 576px) {
  .slider-btn {
    width: 36px;
    height: 36px;
  }

  .slider-btn img {
    width: 60%;
  }

   .mobile-carousel {
    display: block;
  }

  .full-carousel {
    display: none;
  }

  .slider-buttons-full {
    display: none;
  }

  .slider-buttons-mobile {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }

  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.75);
  }

  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.75);
  }

  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.75);
  }

  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
  }
}

.feedback-form {
  margin-top: 100px;
  margin-bottom: 100px;
}

@media(max-width: 576px) {
  .feedback-form {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}

</style>
