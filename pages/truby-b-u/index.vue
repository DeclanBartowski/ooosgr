<script setup lang="ts">
const category = ref({
  template: '',
  priceList: 'https://ooosgr.ru/files/pipe/category/5a97a18be80e79e940079c3f3b8fc169a29c9e7f9.pdf',
  name: 'Трубы бу',
  previewTextHtml: '<p>Мы предлагаем широкий выбор бывших в употреблении стальных <strong>труб бу</strong> в компании &laquo;СтройГеоРесурс&raquo;. В нашем ассортименте имеются тонкостенные и толстостенные трубы бу различных диаметров - от 114 до 1420 мм. Мы также предоставляем услуги по очистке и восстановлению труб, а также нанесению ВУС-изоляции. Доставку заказа мы осуществляем в тот же день, а отгрузку - быстро и оперативно. Важно отметить, что в Москве и Подмосковье мы не требуем предоплаты. Стоимость указана за тонну с учетом НДС.</p>',
  slider: [
    {
      big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      small: 'https://ooosgr.ru/cache/pipe_category_big/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      title: '219х9',
      rel: 'gallery_5_slider',
    },
    {
      big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      small: 'https://ooosgr.ru/cache/pipe_category_big/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      title: '1',
      rel: 'gallery_5_slider',
    },
    {
      big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      small: 'https://ooosgr.ru/cache/pipe_category_big/files/pipe/category/photos/5/b40415b7a53f0210838ca6e6ed061b7f12140834.jpeg',
      title: '219х9',
      rel: '2014-12-23 09',
    }
  ],
  showMenu: true,
  textHtml: '<h2><span style="font-size:20px;"><span style="text-align: justify;">Главные разновидности стальных труб бу</span></span></h2>\n' +
      '<div>\n' +
      '<p>Существует несколько способов классификации стальных труб бу, основным из которых является подразделение по предназначению: водопроводные, паровые, газопроводные и нефтепроводные. Такие трубы бу называются магистральными, потому что они используются для передачи сырья из области добычи в конечную точку.</p>\n' +
      '\n' +
      '<p>Трубопроводы могут быть бывшими в употреблении, восстановленными, лежалыми, недолго применявшимися или находившимися на хранении и регулярно обрабатываемыми антикоррозионными составами. Воздушные трубы, которые пролегают над землей, характеризуются отличным состоянием и малым коррозионным разрушением.</p>\n' +
      '\n' +
      '<p>Особо выделяют трубы бу, которые используются в качестве свай или футляров. В этом случае используется бесшовная водопроводная труба, которая обладает надежностью и долговечностью, но при этом стоит дешевле других видов.</p>\n' +
      '\n' +
      '<p>Трубы б у могут отличаться по габаритам - малые, средние и трубы большого диаметра. Они могут быть с швами или без них.</p>\n' +
      '\n' +
      '<p>Фирма "СтройГеоРесурс" предлагает огромный выбор труб и поможет подобрать наиболее подходящий вариант.</p>\n' +
      '\n' +
      '<h2>Преимущества использования бывших в употреблении трубопроводов</h2>\n' +
      '\n' +
      '<p>Бывшие в употреблении трубопроводы имеют ряд преимуществ, среди которых высокая прочность, низкая стоимость и широкий ассортимент габаритов и стенок. Эти трубы также отличаются небольшой массой, что упрощает их монтаж и демонтаж. Кроме того, максимальная нагрузка на погонный метр может достигать свыше 140 тонн, что делает их идеальным выбором для многих инфраструктурных проектов.</p>\n' +
      '\n' +
      '<p>Одним из главных преимуществ б/у труб является их многофункциональность. Они могут быть использованы как защитное покрытие для других трубопроводов, а также могут выступать в качестве элементов осветительных систем и фундаментных конструкций.</p>\n' +
      '\n' +
      '<p>В "СтройГеоРесурсе" предоставляются услуги по восстановлению б/у труб, включая нарезку фасок, отрезков и изоляционных материалов, а также нанесение внутренней защиты от коррозии. Мы предлагаем широкий выбор качественных труб разных габаритов и стенок для вашего проекта.</p>\n' +
      '\n' +
      '<h2 style="text-align: justify;">Области эксплуатации бывших в употреблении труб</h2>\n' +
      '\n' +
      '<p style="text-align: justify;">Стальные трубы повсеместно используются при сооружении сезонных и капитальных зданий, в инфраструктурной и производственной сферах.</p>\n' +
      '\n' +
      '<p style="text-align: justify;">Немаловажно иметь в виду, что бывшие в употреблении трубы не применяются вновь в той же области, что и первоначально. Применение таких труб допускается только в следующих целях:</p>\n' +
      '\n' +
      '<ul style="text-align: justify;">\n' +
      '\t<li>Усиление железного фундаментного носителя.</li>\n' +
      '\t<li>В качестве свай для фундамента (в трубы заливаются всевозможные смеси ради усиления структуры).</li>\n' +
      '\t<li>Сборка опалубки несъемного типа.</li>\n' +
      '\t<li>Уплотнение котлованного днища, недопущение сползания его стенок (в виде фиксирующей решетки, шпунта).</li>\n' +
      '\t<li>Постройка укрепительных сооружений на речных, озерных, морских берегах (в виде шпунтовой изгороди).</li>\n' +
      '\t<li>Постройка путепроводов, пристаней, портов, верфей, волнорезов.</li>\n' +
      '\t<li>Транспортировка грузов по воде – на понтонах, собранных из отрезков трубопровода б/у значительного диаметра.</li>\n' +
      '\t<li>Сборка осветительных сооружений, в том числе ЛЭП (как основная часть фундаментных опор).</li>\n' +
      '\t<li>Водоотвод, обустройство слива отходов (при сооружении дорог, на производственных и аграрных объектах).</li>\n' +
      '\t<li>Изоляция расположенных под землей и водоемами тоннелей от воздействия агрессивных природных веществ и химических реагентов, а также растворенных в воде солей и подземного электричества – в виде оболочки, покрытия, гильзы (когда необходимо оборудовать футляр в подвальном помещении).</li>\n' +
      '\t<li>Установка рекламных стендов и знаков дорожного движения.</li>\n' +
      '\t<li>Прокладка коммуникаций между искусственными и естественными водными бассейнами.</li>\n' +
      '\t<li>Постройка загородных поселков (в качестве основы дешевых железных изгородей и печных дымоходов, в теплицах и на водостоках, в банях, при усилении дорог, полегающих над траншеями или глубокими рытвинами).</li>\n' +
      '</ul>\n' +
      '\n' +
      '<p style="text-align: justify;">Специалисты по трубам б/у подскажут, какой толщины должна быть стенка и какой необходим диаметр для конкретной цели. Не исключено, что вполне пригодными окажутся восстановленные трубы – об их наличии на складе можно спросить, сделав звонок.</p>\n' +
      '\n' +
      '<p style="text-align: justify;">Проявив взвешенный подход к приобретению стройматериалов можно, не теряя в качестве, сократить расходы на проект и тем самым сэкономить половину сметы.</p>\n' +
      '\n' +
      '<h2 style="text-align: justify;">Выгодные стороны закупки бывших в употреблении труб у "СтройГеоРесурса"</h2>\n' +
      '\n' +
      '<p style="text-align: justify;">В компании "СтройГеоРесурс" можно купить трубы бу прямо с московского склада или же заказать поставку продукции с объекта, где производится демонтаж.</p>\n' +
      '\n' +
      '<p style="text-align: justify;">Во многих случаях мы готовы работать на еще более выгодных условиях:</p>\n' +
      '\n' +
      '<ul style="text-align: justify;">\n' +
      '\t<li>При покупке начиная с двух машин мы делаем существенные скидки.</li>\n' +
      '\t<li>Оплачивается сделка после доставки без необходимости предоплаты для московских и подмосковных клиентов.</li>\n' +
      '\t<li>Постоянным покупателям предоставляются дополнительные скидки.</li>\n' +
      '\t<li>В случае покупки прямо с участка разборки стоимость становится ниже.</li>\n' +
      '\t<li>Всякая отгрузка стопроцентно сопровождается в документарном виде.</li>\n' +
      '\t<li>Перевозка клиенту б/у труб и прочего проката осуществляется своевременно и без повреждений.</li>\n' +
      '\t<li>Функционирует департамент проверки качества, обязательно осуществляется замер радиационного фона продукции.</li>\n' +
      '</ul>\n' +
      '\n' +
      '<p style="text-align: justify;">Мы открыты для обоюдовыгодной кооперации, оказываем клиентам помощь в совершении выгодных закупок и реализации строительных планов точно в установленное время, а также без лишних расходов на стройматериалы.</p>\n' +
      '\n' +
      '<h2 style="text-align: justify;">Купить трубы бу с московского склада или же с участка, где они демонтируются?</h2>\n' +
      '\n' +
      '<p style="text-align: justify;">Когда появляется необходимость купить б/у трубу, то сначала надо изучить, сколько будет стоить доставка и как она будет осуществляться. В "СтройГеоРесурсе" клиенты имеют возможность забрать прокат самовывозом или заказать доставку по указанному адресу.</p>\n' +
      '\n' +
      '<p style="text-align: justify;">Вдобавок ко всему появляется возможность сократить расходы. Дело в том, что закупка с участка демонтажа позволяет получить прокат по сниженной стоимости. Такая сделка предусматривает доставку продукции прямо с места разборки на объект. Данный метод кооперации особенно выгоден, так как цена становится ниже на размер посреднической наценки.</p>\n' +
      '\n' +
      '<h2 style="text-align: justify;">Где купить трубы б у в Москве и Подмосковье по низкой цене?</h2>\n' +
      '\n' +
      '<p style="text-align: justify;">Наша товарная номенклатура состоит из огромного множества труб, имеющих разные параметры. Мы окажем содействие в выгодной покупке трубы б/у клиентам из любого населенного пункта. Мы осуществим доставку собственными силами как в Москву, так и в любой регион.</p>\n' +
      '</div>',
  itemsHead: [
    'Диаметр',
    'Описание',
    'Цена',
    'Фото'
  ],
  items: [
    {
      name: '114х7,8',
      htmlName: '114<span style="font-size:11px">х</span>7,8',
      mobilePrefixName: 'ø', // Вы должны явно указать значение для mobilePrefixName, так как в HTML коде нет информации об этом
      text: 'Длинная, ровная, в изоляции снаружи',
      priceFormated: '49 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/47/88b08f5e2f500a2c1918bb55109c5e56ae13961e.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/47/88b08f5e2f500a2c1918bb55109c5e56ae13961e.jpeg',
        title: '114х7,8 мм',
        rel: 'pipe47',
      }
    },
    {
      name: '159х5',
      htmlName: '159<span style="font-size:11px">х</span>5',
      mobilePrefixName: 'ø',
      text: 'В пленочной изоляции, вся длинная, ровная',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/80/24539ae7c35c21bc2be6b39778818855794c7c4e.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/80/24539ae7c35c21bc2be6b39778818855794c7c4e.jpeg',
        title: '159х5 мм',
        rel: 'pipe80',
      }
    },
    {
      name: '159х6',
      htmlName: '159<span style="font-size:11px">х</span>6',
      mobilePrefixName: 'ø',
      text: 'Практически без наружной изоляции, вся длинная и ровная',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/150/d9c6f1c2b852f3028046b63cf1bbc9fe1de2ef3b.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/150/d9c6f1c2b852f3028046b63cf1bbc9fe1de2ef3b.jpeg',
        title: '159х6 мм',
        rel: 'pipe150',
      }
    },
    {
      name: '168х8',
      htmlName: '168<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Высокого качества, под восстановление, наружная изоляция снята, вся чистая, ровная',
      priceFormated: '53 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/153/d99f7fb269d1f08257b73999811292f8e2cac5ef.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/153/d99f7fb269d1f08257b73999811292f8e2cac5ef.jpeg',
        title: '168х8 мм',
        rel: 'pipe153',
      }
    },
    {
      name: '219х5',
      htmlName: '219<span style="font-size:11px">х</span>5',
      mobilePrefixName: 'ø',
      text: 'Ровная, в остатках пленочной изоляции',
      priceFormated: '57 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/130/d4ba7582ae5adc3315cca6efadd6b4bc58050198.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/130/d4ba7582ae5adc3315cca6efadd6b4bc58050198.jpeg',
        title: '219х5',
        rel: 'pipe130',
      }
    },
    {
      name: '219х6',
      htmlName: '219<span style="font-size:11px">х</span>6',
      mobilePrefixName: 'ø',
      text: 'Высокого качества, вся ровная, почищена "под лопату"',
      priceFormated: '56 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/84/9de6bbd76a3b102dbb8cba6ba8523061398bddb0.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/84/9de6bbd76a3b102dbb8cba6ba8523061398bddb0.jpeg',
        title: '219х6 мм',
        rel: 'pipe84',
      }
    },
    {
      name: '219х6',
      htmlName: '219<span style="font-size:11px">х</span>6',
      mobilePrefixName: 'ø',
      text: 'Высокого качества, вся ровная, почищена "под лопату"',
      priceFormated: '56 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/84/9de6bbd76a3b102dbb8cba6ba8523061398bddb0.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/84/9de6bbd76a3b102dbb8cba6ba8523061398bddb0.jpeg',
        title: '219х6 мм',
        rel: 'pipe84',
      }
    },
    {
      name: '219х6',
      htmlName: '219<span style="font-size:11px">х</span>6',
      mobilePrefixName: 'ø',
      text: 'Демонтирована с нерабочей ветки, отличного качества, в частичной пленочной изоляции',
      priceFormated: '57 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/85/e60374c87dc9beb54979051b8a46faf4ca101338.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/85/e60374c87dc9beb54979051b8a46faf4ca101338.jpeg',
        title: '219х6 мм',
        rel: 'pipe85',
      }
    },
    {
      name: '219х7',
      htmlName: '219<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'Практически без наружной изоляции, вся длинная и ровная',
      priceFormated: '57 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/87/7906a6c55ddb9f51d75b7d0123f7dd33c0bb1cbb.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/87/7906a6c55ddb9f51d75b7d0123f7dd33c0bb1cbb.jpeg',
        title: '219х7 мм',
        rel: 'pipe87',
      }
    },
    {
      name: '219х8',
      htmlName: '219<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, в пленочной изоляции, стенка восьмерка в плюсе',
      priceFormated: '57 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/89/e2776985fb3d7ed157755d937f9b9108341ef9d1.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/89/e2776985fb3d7ed157755d937f9b9108341ef9d1.jpeg',
        title: '219х8 мм',
        rel: 'pipe89',
      }
    },
    {
      name: '219х9',
      htmlName: '219<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Полностью промытая, снаружи слабая пленочная изоляция',
      priceFormated: '57 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/139/431ec529e77942e2f88841eeaf2c9658445f8269.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/139/431ec529e77942e2f88841eeaf2c9658445f8269.jpeg',
        title: '219х9 мм',
        rel: 'pipe139',
      }
    },
    {
      name: '219х10',
      htmlName: '219<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Толстостенная, снаружи механически очищена от изоляции, вся длинная, ровная',
      priceFormated: '57 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/91/bc25997621bfd2b544fc278e329899c20d3ffea0.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/91/bc25997621bfd2b544fc278e329899c20d3ffea0.jpeg',
        title: '219х10 мм',
        rel: 'pipe91',
      }
    },
    {
      name: '273х6',
      htmlName: '273<span style="font-size:11px">х</span>6',
      mobilePrefixName: 'ø',
      text: 'Вся длинная и ровная, механически очищена снаружи',
      priceFormated: '54 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/32/3cad2728ba726002ed2ee788acda6f76a137a550.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/32/3cad2728ba726002ed2ee788acda6f76a137a550.jpeg',
        title: '273х6 мм',
        rel: 'pipe32',
      }
    },
    {
      name: '273х6',
      htmlName: '273<span style="font-size:11px">х</span>6',
      mobilePrefixName: 'ø',
      text: 'Высокого качества, под восстановление, наружная изоляция снята, вся чистая, ровная',
      priceFormated: '53 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/93/85c798cbb6c8ebb1873d02e87c93d6e64159ebe5.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/93/85c798cbb6c8ebb1873d02e87c93d6e64159ebe5.jpeg',
        title: '273х6 мм',
        rel: 'pipe93',
      }
    },
    {
      name: '273х7',
      htmlName: '273<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, наружная изоляция механически снята, отгружаем с места собственного демонтажа',
      priceFormated: '53 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/94/d16399bfe3fcc4e6f18fdf60d51644b5175f4f05.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/94/d16399bfe3fcc4e6f18fdf60d51644b5175f4f05.jpeg',
        title: '273х7 мм',
        rel: 'pipe94',
      }
    },
    {
      name: '273х8',
      htmlName: '273<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, вся длинная, бесшовная, снаружи остатки битумной изоляции, внутри пропарена, ведем собственный демонтаж',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/95/eb50266f3bbe52ff9aafdcc5d7b5e5bd1be45fa9.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/95/eb50266f3bbe52ff9aafdcc5d7b5e5bd1be45fa9.jpeg',
        title: '273х8 мм',
        rel: 'pipe95',
      }
    },
    {
      name: '273х8',
      htmlName: '273<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Цельнотянутая, под восстановление, присутствуют остатки битумной изоляции',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/131/f440bbd6d8149ee69d5253e8c4bfdcb4d3e380e3.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/131/f440bbd6d8149ee69d5253e8c4bfdcb4d3e380e3.jpeg',
        title: '273х8 мм',
        rel: 'pipe131',
      }
    },
    {
      name: '273х9',
      htmlName: '273<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Пропаренная изнутри, снаружи остатки битума',
      priceFormated: '53 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/59/c2273e6bc30eeaee5078e33861c33137ee059afc.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/59/c2273e6bc30eeaee5078e33861c33137ee059afc.jpeg',
        title: '273х9 мм',
        rel: 'pipe59',
      }
    },
    {
      name: '273х10',
      htmlName: '273<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Длинная, ровная, снаружи остатки изоляции',
      priceFormated: '53 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/33/ddd22bbf3f7316d587c8be62c52509d677da846d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/33/ddd22bbf3f7316d587c8be62c52509d677da846d.jpeg',
        title: '273х10 мм',
        rel: 'pipe33',
      }
    },
    {
      name: '273х10',
      htmlName: '273<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, в пленочной изоляции, сами регулярно осуществляем демонтаж, завозим на склад',
      priceFormated: '51 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/96/177604ae9ea4ba1b7cbe0f0cb373867b3fed84d3.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/96/177604ae9ea4ba1b7cbe0f0cb373867b3fed84d3.jpeg',
        title: '273х10 мм',
        rel: 'pipe96',
      }
    },
    {
      name: '325х7',
      htmlName: '325<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'Практически без наружной изоляции, вся длинная и ровная',
      priceFormated: '56 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/143/2c88e46f5450db5afeb028de8d14d402b18c8eef.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/143/2c88e46f5450db5afeb028de8d14d402b18c8eef.jpeg',
        title: '325х7 мм',
        rel: 'pipe143',
      }
    },
    {
      name: '325х8',
      htmlName: '325<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Хорошая, малоработавшая, наружная изоляция механически снята',
      priceFormated: '56 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/98/8ffa6bcbbdb19cf9333c26e2617d712d1a064e46.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/98/8ffa6bcbbdb19cf9333c26e2617d712d1a064e46.jpeg',
        title: '325х8 мм',
        rel: 'pipe98',
      }
    },
    {
      name: '325х9',
      htmlName: '325<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Демонтирована с нерабочей ветки, отличного качества, в частичной пленочной изоляции',
      priceFormated: '55 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/144/9d6ad9e264162b06726566fe0648c700d6f0bd80.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/144/9d6ad9e264162b06726566fe0648c700d6f0bd80.jpeg',
        title: '325х9 мм',
        rel: 'pipe144',
      }
    },
    {
      name: '325х10',
      htmlName: '325<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, вся длинная, бесшовная, снаружи остатки битумной изоляции, внутри пропарена, ведем собственный демонтаж',
      priceFormated: '56 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/146/c2a2b2960b20cb636cca9070eae4a9d3eba9f273.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/146/c2a2b2960b20cb636cca9070eae4a9d3eba9f273.jpeg',
        title: '325х10 мм',
        rel: 'pipe146',
      }
    },
    {
      name: '377х7',
      htmlName: '377<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'С остатками битума, механически почищена от наружной изоляции, под восстановление',
      priceFormated: '62 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/7/ac73d188cf287e2e653640ce25dcdd0179b0b9ca.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/7/ac73d188cf287e2e653640ce25dcdd0179b0b9ca.jpeg',
        title: '377х7 мм',
        rel: 'pipe7',
      }
    },
    {
      name: '377х8',
      htmlName: '377<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Бесшовная, наружная изоляция снята, длинная',
      priceFormated: '58 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/43/c05df0bdb7d0c25904dc887f4503226592b473c5.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/43/c05df0bdb7d0c25904dc887f4503226592b473c5.jpeg',
        title: '377х8 мм',
        rel: 'pipe43',
      }
    },
    {
      name: '377х9',
      htmlName: '377<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'С остатками битума, подходит под восстановление',
      priceFormated: '62 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/61/e254aa6279ab415dd527590b178bd394e6bd478f.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/61/e254aa6279ab415dd527590b178bd394e6bd478f.jpeg',
        title: '377х9 мм',
        rel: 'pipe61',
      }
    },
    {
      name: '377х10',
      htmlName: '377<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Длинная, ровная, снаружи с остатками битума, изнутри чистая',
      priceFormated: '62 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/46/a411867bd724e3d3203edfea059d3336aec957d8.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/46/a411867bd724e3d3203edfea059d3336aec957d8.jpeg',
        title: '377х10 мм',
        rel: 'pipe46',
      }
    },
    {
      name: '426х8',
      htmlName: '426<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Отличная, поставка с места демонтажа трубопровода, изоляция при поставке снимается',
      priceFormated: '65 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/104/4fdde8e334fcd299dd96a6d900652c6dceaf9799.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/104/4fdde8e334fcd299dd96a6d900652c6dceaf9799.jpeg',
        title: '426х8 мм',
        rel: 'pipe104',
      }
    },
    {
      name: '426х9',
      htmlName: '426<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Снаружи механически почищена, внутри чистая, порезана по швам, под восстановление',
      priceFormated: '64 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/106/9c56cd652552c46e00779e30c78910fece37ca9c.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/106/9c56cd652552c46e00779e30c78910fece37ca9c.jpeg',
        title: '426х9 мм',
        rel: 'pipe106',
      }
    },
    {
      name: '426х10',
      htmlName: '426<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'С нерабочей ветки, снаружи без изоляции, внутри совершенно чистая, подходит под восстановление',
      priceFormated: '65 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/107/24d54adf15f6f0373fc67cce831a5520bc41f4cd.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/107/24d54adf15f6f0373fc67cce831a5520bc41f4cd.jpeg',
        title: '426х10 мм',
        rel: 'pipe107',
      }
    },
    {
      name: '508х10',
      htmlName: '508<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Изнутри промытая, снаружи в остатках битумной и пленочной изоляции, длинная',
      priceFormated: '56 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/122/e52f8c702aae0a173edae82139851757af39e393.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/122/e52f8c702aae0a173edae82139851757af39e393.jpeg',
        title: '508х10 мм',
        rel: 'pipe122',
      }
    },
    {
      name: '530х8',
      htmlName: '530<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Отличного качества, под восстановление, частичная битумная изоляция, вся ровная, длинная',
      priceFormated: '57 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/110/7be70391e5401802e6b211e18a4c5c77c080b7d6.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/110/7be70391e5401802e6b211e18a4c5c77c080b7d6.jpeg',
        title: '530х8 мм',
        rel: 'pipe110',
      }
    },
    {
      name: '530х9',
      htmlName: '530<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Под восстановление, вся ровная, длинная, изоляция механически снята',
      priceFormated: '58 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/112/3ec7df27b48f898feb2a027d521ab1f00b93b686.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/112/3ec7df27b48f898feb2a027d521ab1f00b93b686.jpeg',
        title: '530х9 мм',
        rel: 'pipe112',
      }
    },
    {
      name: '530х10',
      htmlName: '530<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'С нерабочей ветки, снаружи без изоляции, внутри совершенно чистая, подходит под восстановление',
      priceFormated: '59 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/149/c944924d9a00a779f787699931b14b10cfe48d29.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/149/c944924d9a00a779f787699931b14b10cfe48d29.jpeg',
        title: '530х10 мм',
        rel: 'pipe149',
      }
    },
    {
      name: '630х7',
      htmlName: '630<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'Очищена под лопату, со снятой наружной изоляцией',
      priceFormated: '64 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/29/ea00ed6510aee76fedd9ce880cd6344d67fb6a1e.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/29/ea00ed6510aee76fedd9ce880cd6344d67fb6a1e.jpeg',
        title: '630х7 мм',
        rel: 'pipe29',
      }
    },
    {
      name: '630х8',
      htmlName: '630<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, промытая, харцизская, пленочная изоляция',
      priceFormated: '63 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/114/50e51cc9faea8122d11cb7342b670b3c675ae299.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/114/50e51cc9faea8122d11cb7342b670b3c675ae299.jpeg',
        title: '630х8 мм',
        rel: 'pipe114',
      }
    },
    {
      name: '720х8',
      htmlName: '720<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Прямошовная, без пленочной изоляции, длинная',
      priceFormated: '53 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/11/df93a03641a34ec5213d28193a9b3e5000e764aa.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/11/df93a03641a34ec5213d28193a9b3e5000e764aa.jpeg',
        title: '720х8 мм',
        rel: 'pipe11',
      }
    },
    {
      name: '720х9',
      htmlName: '720<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Прямошовная, длинная, почищена снаружи "под лопату"',
      priceFormated: '53 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/64/43248167b83d0b3a4f6652298477ec7d4ba563e3.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/64/43248167b83d0b3a4f6652298477ec7d4ba563e3.jpeg',
        title: '720х9 мм',
        rel: 'pipe64',
      }
    },
    {
      name: '720х10',
      htmlName: '720<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'С остатками пленки снаружи, вся ровная, длинная',
      priceFormated: '54 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/63/e25717b9f9fa8d06755fd3c38291d47c34ee1de5.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/63/e25717b9f9fa8d06755fd3c38291d47c34ee1de5.jpeg',
        title: '720х10 мм',
        rel: 'pipe63',
      }
    },
    {
      name: '820х9',
      htmlName: '820<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Бесшовная, очищенная снаружи от пленки "под лопату"',
      priceFormated: '54 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/65/8542b070f17ae4a1dc43120317c14189b6be0c9e.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/65/8542b070f17ae4a1dc43120317c14189b6be0c9e.jpeg',
        title: '820х9 мм',
        rel: 'pipe65',
      }
    },
    {
      name: '820х10',
      htmlName: '820<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Без поперечки, чистая, вся длинная, ровная',
      priceFormated: '55 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/66/ebf5407b354d6f393e28c1dc9f1fce346c7bcbd3.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/66/ebf5407b354d6f393e28c1dc9f1fce346c7bcbd3.jpeg',
        title: '820х10 мм',
        rel: 'pipe66',
      }
    },
    {
      name: '920х9',
      htmlName: '920<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Бесшовная, вся ровная, чистая снаружи и изнутри',
      priceFormated: '62 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/67/ac11d041371e68f58e3d60aec3ef8c7897daf151.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/67/ac11d041371e68f58e3d60aec3ef8c7897daf151.jpeg',
        title: '920х9 мм',
        rel: 'pipe67',
      }
    },
    {
      name: '920х10',
      htmlName: '920<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Почищена механически "под лопату", присутствуют остатки битума',
      priceFormated: '62 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/13/96f91f3f4913616d8fba10a033ac35076104b056.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/13/96f91f3f4913616d8fba10a033ac35076104b056.jpeg',
        title: '920х10 мм',
        rel: 'pipe13',
      }
    },
    {
      name: '1020х10',
      htmlName: '1020<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Ровная, вся длинная, без изоляции, газовка',
      priceFormated: '53 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/14/f4ad54ab1419454fbf6009199d0079334aa1bf01.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/14/f4ad54ab1419454fbf6009199d0079334aa1bf01.jpeg',
        title: '1020х10 мм',
        rel: 'pipe14',
      }
    },
    {
      name: '1020х10',
      htmlName: '1020<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Ровная, вся длинная, без изоляции',
      priceFormated: '53 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/124/e8372e7cfa1fc0bd998ad8d79bfe9d88408c8a7e.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/124/e8372e7cfa1fc0bd998ad8d79bfe9d88408c8a7e.jpeg',
        title: '1020х10 мм',
        rel: 'pipe124',
      }
    },
    {
      name: '1020х10',
      htmlName: '1020<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Вся ровная, длинная, с остатками изоляции снаружи',
      priceFormated: '55 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/123/5b7578c2d01b70b3f73e5e5deacb2641a8e9618a.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/123/5b7578c2d01b70b3f73e5e5deacb2641a8e9618a.jpeg',
        title: '1020х10 мм',
        rel: 'pipe123',
      }
    },
    {
      name: '1020х11',
      htmlName: '1020<span style="font-size:11px">х</span>11',
      mobilePrefixName: 'ø',
      text: 'Внутри чистая, пропаренная, длинная, снаружи в остатках изоляции',
      priceFormated: '53 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/69/db42bd60ec1056208c05bd8f5a3b68f08d82bf6e.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/69/db42bd60ec1056208c05bd8f5a3b68f08d82bf6e.jpeg',
        title: '1020х11 мм',
        rel: 'pipe69',
      }
    },
    {
      name: '1020х12',
      htmlName: '1020<span style="font-size:11px">х</span>12',
      mobilePrefixName: 'ø',
      text: 'Прямошовная, в остатках битума',
      priceFormated: '56 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/70/67bf74aae45acd3b7a0af9627d3bfc2da0729ea8.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/70/67bf74aae45acd3b7a0af9627d3bfc2da0729ea8.jpeg',
        title: '1020х12 мм',
        rel: 'pipe70',
      }
    },
    {
      name: '1020х12',
      htmlName: '1020<span style="font-size:11px">х</span>12',
      mobilePrefixName: 'ø',
      text: 'Прямошовная, без пленочной изоляции, чистая',
      priceFormated: '56 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/125/886400388d19ef8b1aae68b951dcfd29c0feaa8d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/125/886400388d19ef8b1aae68b951dcfd29c0feaa8d.jpeg',
        title: '1020х12 мм',
        rel: 'pipe125',
      }
    },
    {
      name: '1020х14',
      htmlName: '1020<span style="font-size:11px">х</span>14',
      mobilePrefixName: 'ø',
      text: 'Прямошовная, длинная, почищена снаружи "под лопату"',
      priceFormated: '58 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/126/fccc9e13e60af6cd09077e73dd873c4dfc30337b.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/126/fccc9e13e60af6cd09077e73dd873c4dfc30337b.jpeg',
        title: '1020х14 мм',
        rel: 'pipe126',
      }
    },
    {
      name: '1220х12',
      htmlName: '1220<span style="font-size:11px">х</span>12',
      mobilePrefixName: 'ø',
      text: 'Прямошовная, ровная, снаружи в остатках изоляции',
      priceFormated: '56 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/15/a1d76dbb2d0865824a59e0ad2861229f5a5b910c.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/15/a1d76dbb2d0865824a59e0ad2861229f5a5b910c.jpeg',
        title: '1220х12 мм',
        rel: 'pipe15',
      }
    },
    {
      name: '1220х14',
      htmlName: '1220<span style="font-size:11px">х</span>14',
      mobilePrefixName: 'ø',
      text: 'Без битума, без пленочной изоляции, прямошовная, прямая',
      priceFormated: '57 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/71/67135aa5d9265a861295ef82a23979198e72661d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/71/67135aa5d9265a861295ef82a23979198e72661d.jpeg',
        title: '1220х14 мм',
        rel: 'pipe71',
      }
    },
    {
      name: '1420х16',
      htmlName: '1420<span style="font-size:11px">х</span>16',
      mobilePrefixName: 'ø',
      text: 'Чистая снаружи и изнутри, отличного качества, без изоляции',
      priceFormated: '59 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/133/b6d54c0443e5f37af3d98fa174db3abbd514ea1f.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/133/b6d54c0443e5f37af3d98fa174db3abbd514ea1f.jpeg',
        title: '1420х16 мм',
        rel: 'pipe133',
      }
    },
    {
      name: '1420х18,7',
      htmlName: '1420<span style="font-size:11px">х</span>18,7',
      mobilePrefixName: 'ø',
      text: 'Снаружи в частичной пленочной изоляции, ровная',
      priceFormated: '57 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/79/7f7839f51d22bc13834ddf1c5a88ec0b04e6304c.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/79/7f7839f51d22bc13834ddf1c5a88ec0b04e6304c.jpeg',
        title: '1420х18,7 мм',
        rel: 'pipe79',
      }
    },
    {
      name: '159х7',
      htmlName: '159<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'Вся длинная и ровная, механически очищена снаружи',
      priceFormated: '56 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/151/36013690920a2428c631a608f586724922029071.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/151/36013690920a2428c631a608f586724922029071.jpeg',
        title: '159х7 мм',
        rel: 'pipe151',
      }
    },
    {
      name: '159х7',
      htmlName: '159<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'Демонтаж с нерабочей ветки, отличного качества, в частичной пленочной изоляции',
      priceFormated: '55 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/152/fe9f8cbdb4f8245347a24678b9444056fa0cb448.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/152/fe9f8cbdb4f8245347a24678b9444056fa0cb448.jpeg',
        title: '159х7 мм',
        rel: 'pipe152',
      }
    },
    {
      name: '159х8',
      htmlName: '159<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, пропаренная, длинная, ровная, снаружи пленка',
      priceFormated: '57 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/83/b179ed3586bfa0e5a172cea297aab8b5d8abdff7.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/83/b179ed3586bfa0e5a172cea297aab8b5d8abdff7.jpeg',
        title: '159х8 мм',
        rel: 'pipe83',
      }
    },
    {
      name: '219х7',
      htmlName: '219<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, сами осуществляем демонтажные работы теплотрассы, наружную изоляцию снимаем',
      priceFormated: '56 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/140/5371aa507e6e8e07b3fb6d4ecc3695cecb130fdf.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/140/5371aa507e6e8e07b3fb6d4ecc3695cecb130fdf.jpeg',
        title: '219х7 мм',
        rel: 'pipe140',
      }
    },
    {
      name: '219х8',
      htmlName: '219<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Полностью промытая, снаружи слабая пленочная изоляция',
      priceFormated: '58 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/88/9b066b575615770e79345d24c1963c1466f5f8c6.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/88/9b066b575615770e79345d24c1963c1466f5f8c6.jpeg',
        title: '219х8 мм',
        rel: 'pipe88',
      }
    },
    {
      name: '219х8',
      htmlName: '219<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Высокого качества, под восстановление, наружная изоляция снята, вся чистая, ровная',
      priceFormated: '56 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/7d15ff29697c195664c2b6747ce2314d05da83bb.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/5/7d15ff29697c195664c2b6747ce2314d05da83bb.jpeg',
        title: '219х8 мм',
        rel: 'pipe141',
      }
    },
    {
      name: '325х6',
      htmlName: '325<span style="font-size:11px">х</span>6',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, малоработавшая, с остатками битумной изоляции',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/97/684f720e298eb604781ecfb5ad8a6d3ff454408d.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/97/684f720e298eb604781ecfb5ad8a6d3ff454408d.jpeg',
        title: '325х6 мм',
        rel: 'pipe97',
      }
    },
    {
      name: '325х8',
      htmlName: '325<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Вся длинная и ровная, механически очищена снаружи',
      priceFormated: '55 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/31e6ac7423a9e535a3fc41e3a31779cb77db9bc2.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/5/31e6ac7423a9e535a3fc41e3a31779cb77db9bc2.jpeg',
        title: '325х8 мм',
        rel: 'pipe145',
      }
    },
    {
      name: '377х7',
      htmlName: '377<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'С мало работавшей ветки, хорошего качества, без наружной изоляции',
      priceFormated: '57 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/100/570bb11b1fdc7e8e0dfc63ee54a61f836949d57b.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/100/570bb11b1fdc7e8e0dfc63ee54a61f836949d57b.jpeg',
        title: '377х7 мм',
        rel: 'pipe100',
      }
    },
    {
      name: '377х8',
      htmlName: '377<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Бесшовная, наружная изоляция полностью снята, толщина стенки плюсовая',
      priceFormated: '57 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/101/07af22dd0819041aa0060eea50360ceb00591e6c.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/101/07af22dd0819041aa0060eea50360ceb00591e6c.jpeg',
        title: '377х8 мм',
        rel: 'pipe101',
      }
    },
    {
      name: '426х6',
      htmlName: '426<span style="font-size:11px">х</span>6',
      mobilePrefixName: 'ø',
      text: 'Отличного качества, нерабочая ветка, без изоляции, качество металла - под восстановление, прямые поставки с места демонтажа',
      priceFormated: '60 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/102/bf29360b2d316f59c09c63826738fdbb661d3acd.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/102/bf29360b2d316f59c09c63826738fdbb661d3acd.jpeg',
        title: '426х6 мм',
        rel: 'pipe102',
      }
    },
    {
      name: '426х7',
      htmlName: '426<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'Очень хорошего качества, сами осуществляем демонтажные работы теплотрассы, наружную изоляцию снимаем',
      priceFormated: '62 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/103/1745023b57e9042d48941e4143bbd0cbd0cf0215.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/103/1745023b57e9042d48941e4143bbd0cbd0cf0215.jpeg',
        title: '426х7 мм',
        rel: 'pipe103',
      }
    },
    {
      name: '426х8',
      htmlName: '426<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Демонтирована с нерабочей ветки, отличного качества, в частичной пленочной изоляции',
      priceFormated: '62 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/category/photos/5/31e6ac7423a9e535a3fc41e3a31779cb77db9bc2.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/category/photos/5/31e6ac7423a9e535a3fc41e3a31779cb77db9bc2.jpeg',
        title: '426х8 мм',
        rel: 'pipe142',
      }
    },
    {
      name: '426х9',
      htmlName: '426<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Порезана по швам, в наружной битумной изоляции',
      priceFormated: '62 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/105/f3c13695f51b23eac6fa65e7a0dd1264a73c3263.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/105/f3c13695f51b23eac6fa65e7a0dd1264a73c3263.jpeg',
        title: '426х9 мм',
        rel: 'pipe105',
      }
    },
    {
      name: '159*7',
      htmlName: '159*7',
      mobilePrefixName: 'ø',
      text: 'Трубы бу 159*7мм. Большой объем в наличии на складе.',
      priceFormated: '56 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/154/17f5e0adcacb375acb42be94d92b0d308bd988e6.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/154/17f5e0adcacb375acb42be94d92b0d308bd988e6.jpeg',
        title: '159*7мм',
        rel: 'pipe154',
      }
    },
    {
      name: '426х12',
      htmlName: '426<span style="font-size:11px">х</span>12',
      mobilePrefixName: 'ø',
      text: 'Идеальная под восстановление, снаружи изоляция снята, внутри абсолютно чистая',
      priceFormated: '62 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/108/04a32d9bfab9552146cb618bfbf48b98efff57b7.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/108/04a32d9bfab9552146cb618bfbf48b98efff57b7.jpeg',
        title: '426х12 мм',
        rel: 'pipe108',
      }
    },
    {
      name: '530х7',
      htmlName: '530<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'Очень хорошего качества, сами осуществляем демонтажные работы теплотрассы, наружную изоляцию снимаем',
      priceFormated: '60 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/147/5ae62382b8711f363393e41d7deba6026ab146a0.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/147/5ae62382b8711f363393e41d7deba6026ab146a0.jpeg',
        title: '530х7 мм',
        rel: 'pipe147',
      }
    },
    {
      name: '530х8',
      htmlName: '530<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, длинная, ровная, битумная изоляция снаружи',
      priceFormated: '57 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/111/38796537d15520eaeaa5c05b81f65ac1f5665827.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/111/38796537d15520eaeaa5c05b81f65ac1f5665827.jpeg',
        title: '530х8 мм',
        rel: 'pipe111',
      }
    },
    {
      name: '630х7',
      htmlName: '630<span style="font-size:11px">х</span>7',
      mobilePrefixName: 'ø',
      text: 'Обожженная от битума, со снятой наружной изоляцией, длинная',
      priceFormated: '59 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/113/682609ec8fae23279e8cb62157f6294ef8c603c0.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/113/682609ec8fae23279e8cb62157f6294ef8c603c0.jpeg',
        title: '630х7 мм',
        rel: 'pipe113',
      }
    },
    {
      name: '630х9',
      htmlName: '630<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Очень неплохого качества, вся длинная, ровная, в пленочной изоляции',
      priceFormated: '59 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/115/9d8f00f75ed2d26a6340483fe301c6f8ee6a1402.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/115/9d8f00f75ed2d26a6340483fe301c6f8ee6a1402.jpeg',
        title: '630х9 мм',
        rel: 'pipe115',
      }
    },
    {
      name: '720х8',
      htmlName: '720<span style="font-size:11px">х</span>8',
      mobilePrefixName: 'ø',
      text: 'Хорошего качества, подходит под восстановление',
      priceFormated: '44 500 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/116/f95391dd0a1fd6cda26ee54a612828b19ab8c6dc.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/116/f95391dd0a1fd6cda26ee54a612828b19ab8c6dc.jpeg',
        title: '720х8 мм',
        rel: 'pipe116',
      }
    },
    {
      name: '820х9',
      htmlName: '820<span style="font-size:11px">х</span>9',
      mobilePrefixName: 'ø',
      text: 'Крепкая, механически почищена от изоляции, хорошо подойдет под футляры, распорки, проч.',
      priceFormated: '54 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/117/0c9c01309db1857ea061212c9f49143e35d26955.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/117/0c9c01309db1857ea061212c9f49143e35d26955.jpeg',
        title: '820х9 мм',
        rel: 'pipe117',
      }
    },
    {
      name: '920х10',
      htmlName: '920<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Подходит под восстановление, снаружи пленка, ведем собственный демонтаж',
      priceFormated: '52 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/118/f3b080d6fd3b7932963692f0aa2929530d0dc1b2.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/118/f3b080d6fd3b7932963692f0aa2929530d0dc1b2.jpeg',
        title: '920х10 мм',
        rel: 'pipe118',
      }
    },
    {
      name: '1020х10',
      htmlName: '1020<span style="font-size:11px">х</span>10',
      mobilePrefixName: 'ø',
      text: 'Механически почищена, со снятой наружной изоляцией, хорошего качества',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/119/588da24db1fc7682a03316e184122ddb558addbe.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/119/588da24db1fc7682a03316e184122ddb558addbe.jpeg',
        title: '1020х10 мм',
        rel: 'pipe119',
      }
    },
    {
      name: '1220х12',
      htmlName: '1220<span style="font-size:11px">х</span>12',
      mobilePrefixName: 'ø',
      text: 'Под восстановление, снаружи пленочная изоляция',
      priceFormated: '55 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/120/5ef9c96040c528525858d0441ea28b646c8063d8.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/120/5ef9c96040c528525858d0441ea28b646c8063d8.jpeg',
        title: '1220х12 мм',
        rel: 'pipe120',
      }
    },
    {
      name: '1420х15,7',
      htmlName: '1420<span style="font-size:11px">х</span>15,7',
      mobilePrefixName: 'ø',
      text: 'Вся ровная, без пленочной изоляции, внутри чистая',
      priceFormated: '53 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/16/eb14e7f6e4e6c4195020cde5edc27564177a7cc9.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/16/eb14e7f6e4e6c4195020cde5edc27564177a7cc9.jpeg',
        title: '1420х15,7 мм',
        rel: 'pipe16',
      }
    },
    {
      name: '1420х15,7',
      htmlName: '1420<span style="font-size:11px">х</span>15,7',
      mobilePrefixName: 'ø',
      text: 'Отличного качества, под восстановление, очищена от наружной изоляции',
      priceFormated: '53 000 руб.',
      img: {
        big: 'https://ooosgr.ru/cache/pipe_category_fancybox/files/pipe/pipe/photos/121/486bed7b44aabb846bc55f1fcfaf2cb0dacf31f8.jpeg',
        small: 'https://ooosgr.ru/cache/pipe_category_small/files/pipe/pipe/photos/121/486bed7b44aabb846bc55f1fcfaf2cb0dacf31f8.jpeg',
        title: '1420х15,7 мм',
        rel: 'pipe121',
      }
    }
  ]
})
</script>

<template>
  <CategorySliderMobile />
  <div class="wrap content page pipe">
    <div class="wrap_cont">
      <div class="two columns columns--adaptive">
        <Sidebar />
        <Category :category="category" />
      </div>
    </div>
  </div>
  <BitrixForm />
  <div class="push" />
</template>

<style scoped>

</style>
