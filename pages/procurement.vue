<script setup lang="ts">
  const page = ref({
    title:'Закупки',
    description:'<p style="text-align: justify;">Если у вас есть стальные трубы б/у в хорошем состоянии, и вы хотите продать их по выгодной цене – смело обращайтесь в нашу компанию «Стройгеоресурс». Мы предлагаем достойную цену за б/у трубы, которая превышает среднюю по рынку. Помимо этого, мы можем самостоятельно демонтировать и порезать ваши трубы, а также обеспечить их доставку.</p>\n' +
        '\n' +
        '                                    <p style="text-align: justify;">Ежегодно в Москве и Московской области меняют десятки километров стальных труб, срок эксплуатации которых уже закончился. В большинстве случаев такая замена вызвана необходимостью обновления инфраструктуры и коммуникаций в отдельно взятом районе.</p>',
    img:'https://ooosgr.ru/upload/Procurement.jpg',
  })
</script>

<template>
  <div class="wrap content page common page--procurement">
    <div class="wrap_cont">
      <h1>{{ page.title }}</h1>
      <div class="text">
        <div class="content pipes zakupki-cont">
          <ul class="category_list">
            <li style="list-style: none;">
              <div class="desc block-shadow">
                <h1>{{ page.title }}</h1>
                <div
                  class="text"
                  v-html="page.description"
                />
              </div>
              <div class="img block-shadow">
                <img
                  :alt="page.title"
                  :src="page.img"
                >
              </div>
            </li>
          </ul>
        </div>
        <ProcurementList />
      </div>
    </div>
    <BitrixForm />
    <div class="push" />
  </div>
</template>

<style scoped>
.content.pipes .category_list li .desc {
  padding: 20px 50px 34px 50px;
}
.zakupki-cont {
  margin-bottom: 35px;
}
.content h2 {
  margin-bottom: 35px;
}
</style>
