const express = require('express')
const app = express()
const port = 3000
const path = require("path");

app.use(express.static(__dirname + '/dist'));


let countryItems = [
    {id:1, name:"Зимбабве", name_eng:"Zimbabwe", link: "Zimbabwe", picture: "zimbabwe.jpg", description: "Многие туристы, побывавшие в Зимбабве, приезжают сюда снова. В чем секрет такой преданности? Ландшафты Зимбабве заставляют поверить, что от сотворения мира прошло всего ничего, людей на Земле исключительно мало, а рай — вот он, прямо перед тобой, на просторах Африки."},
    {id:2, name:"Кения", name_eng:"Kenia", link: "Kenia", picture: "kenia.jpg", description: "Курорты побережья Индийского океана и красоты национальных парков — вот две главные фишки туристической Кении — одного из самых популярных направлений мирового туризма в Африке. Кения — это раскаленный воздух саванны, слоны, львы, жирафы, а главное — гармония с природой."},
    {id:3, name:"Мадагаскар", name_eng:"Madagaskar", link: "Madagaskar", picture: "madagaskar.jpg", description: "Туры на Мадагаскар заинтересуют в первую очередь фанатов живой природы во всем ее разнообразии. Дело в том, что Мадагаскар — родина огромного количества эндемичных, то есть не встречающихся больше нигде в мире, животных и растений. И именно лемуры, баобабы, орхидеи, огромные бабочки, хамелеоны, змеи, птицы и выступают в качестве главной мадагаскарской достопримечательности."},
    {id:4, name:"Мозамбик", name_eng:"Mozambique", link: "Mozambique", picture: "mozambique.jpg", description: "Мозамбик — одно из самых древних государств на Земле, где жизнь била ключом уже около двух миллионов лет назад. Это страна удивительной природы (причем как наземной, так и подводной), богатой фауны, древних городов и шикарных пляжей."},
    {id:5, name:"Намибия", name_eng:"Namibia", link: "Namibia", picture: "namibia.jpg", description: "Первые ассоциации, которые возникают при упоминании туров в Намибию, — это бескрайние пески, огромные алмазы размером и вальяжно разгуливающие на расстоянии вытянутой руки львы и гепарды. Экзотичность направления и достойный сервис создали Намибии репутацию отличного варианта, как посетить Африку, не отказываясь от привычного комфорта в быту."},
    {id:6, name:"Танзания", name_eng:"Tanzania", link: "Tanzania", picture: "tanzania.jpg", description: "Танзания способна удивить даже бывалого путешественника. Самобытная, гостеприимная, улыбчивая, красочная Танзания манит туристов со всего света, и в их числе с каждым годом все больше россиян. Каждый найдет здесь что-то для себя: и любители природы, и те, кто предпочитает активный или пляжный отдых."},
    {id:7, name:"ЮАР", name_eng:"UAR", link: "UAR", picture: "uar.jpg", description: "Одна из удивительных и ярчайших стран, пользующаяся интересом у туристов со всего мира. Некогда привлекавшая искателей приключений алмазами и золотом, Южная Африка по-прежнему не перестает удивлять своими богатствами: два океана, мыс Доброй Надежды, Столовая Гора, парк Крюгера, город солнца – Sun Сity, сафари, пингвины, киты... и это лишь малая часть сокровищ, которыми готова поделиться эта сказочная страна."},
]

let countryMenuItems = countryItems.map(function(item) {
    return {
        link: item.link,
        name: item.name
    }
})

let destinationItems = [
    {id:1, name:"Сафари-тур", link: "SafariTour", picture: "safari_tour.jpg", icon:"safari_icon.svg",  description: "Нетронутые цивилизацией места - это совершенно другой мир, дикий и прекрасный, который позволит почувствовать себя первооткрывателем и увидеть экзотических животных в их естественной среде обитания.", description2: "Сафари-туры позволят вам запечатлеть всю красоту африканской природы и увидеть животных в их естественной среде обитания."},
    {id:2, name:"Этно-тур", link: "EtnoTour", picture: "etno_tour.jpg", icon:"etno_icon.svg", description: "Знакомство с культурой, обычаями и ритуалами народов Африки, возможность погрузиться в их жизнь, увидеть своими глазами настоящую Африку и расширить границы своего мироощущения.", description2: "Этно-туры позволят Вам познакомиться с культурой и обычаями народов Африки, дадут возможность погрузиться в жизнь африканскитх племен и принять участие в повседневных и праздничных ритуалах.  Вы не только прочувствуете настоящую Африку, но и и расширите границы своего мировоззрения."}, 
    {id:3, name:"Пляжный тур", link: "BeachTour", picture: "beach_tour.jpg", icon:"beach_icon.svg", description: "Любители пляжного отдыха ценят в нем совершенно разные вещи. Одним важна бурная ночная жизнь и развлечения, другим, напротив, уединение и спокойствие, а третьим – красоты окружающей природы.", description2: "Пляжные туры подарят вам удивительное спокойствие и безмятежность. Вы насладитесь шумом океанских волн и красотой заката."}
]

let destinationMenuItems = destinationItems.map(function(item) {
    return {
        link: item.link,
        name: item.name
    }
})


let toursItems = [   
    {id: 1, picture: "africaRoally.jpg", title:"Африка по-королевски", destinationId: 1, price: 3740, countryId: 7, duration: 8, link: "africaRoally", description: "Тур 'Африка по-королевски' дарит вам редкий шанс отправиться в настоящее африканское путешествие в атмосфере роскоши и эксклюзивности. Вас ожидает поездка на знаменитом поезде Rovos Rail, посещение национального парка Крюгер и многое другое.",
                                programm: [
                                {number: "1", place: "Йоханнесбург", description: "Прилет в Йоханнесбург. Трансфер и размещение в отеле. Прогулка по городу."
                                },
                                {number: "2", place: "Rovos Rail", description: "Поездка на знаменитом поезде Rovos Rail в столицу ЮАР, Преторию. Вы окунётесь в обстановку наивысшего комфорта, которая превратит вашу поездку в незабываемое путешествие." 
                                },
                                {number: "3", place: "Rovos Rail", description: "Продолжение поездки на знаменитом поезде Rovos Rail в столицу ЮАР, Преторию."
                                },
                                {number: "4", place: "Претория", description: "Трансфер в отель. Размещение и отдых.  Экскурсии по Претории с русско-говорящим гидом: посещение Львиного Парка, Голдриф Сити."
                                },
                                {number: "5", place: "Претория", description: "Посещение алмазной шахты Каллинен, она является одной из самых знаменитых в мире. Значительная часть предприятия доступна для посещения в рамках экскурсии, здесь можно своими глазами увидеть, как происходит добыча и обработка алмазов."
                                },
                                {number: "6", place: "Парк Крюгер", description: "Сафари на джипах в национальный парк Крюгер. В парке обитают слоны, бегемоты, жирафы, носороги, львы, леопарды, нильские крокодилы, антилопы."
                                },
                                {number: "7", place: "Парк Крюгер", description: "Исследование парка с гидом, наблюдение за различными животными."
                                },
                                {number: "8", place: "Йоханнесбург", description: "Возвращение в Йоханнесбург. Трансфер до аэропорта для регистрации на рейс и вылета домой."
                                }
                                ],
                                picture1: "africaRoally1.jpg", picture2: "africaRoally2.jpg", picture3: "africaRoally3.jpg"
    },
    {id: 2, picture: "BazarutoIsland.jpg", title:"Остров Базаруто", destinationId: 3, price: 2780, countryId: 4, duration: 6, link: "BazarutoIsland", description: "Тур 'Остров Базаруто' дарит вам редкий шанс побывать на одном из наиболее красивых мест на всём Африканском континенте. Километр за километром по побережью тянутся пустынные песчаные пляжи один другого невероятнее.",
                                programm: [
                                {number: "1", place: "Мапуто", description: "Прилет в Мапуто - столицу Мозамбика. Трансфер и размещение в отеле. Осмотр города, посещение рыбного рынка."
                                },
                                {number: "2", place: "Остров Базаруто", description: "Перелет на остров Базаруто - крупнейший остров архипелага Базаруто. Территория архипелага объявлена национальным парком, в том числе коралловые рифы вокруг островов (это единственный морской заповедник Мозамбика). Парк — один из крупнейших в Индийском океане, и это настоящий, почти нетронутый рай на земле. Заселение в Бунгало. Отдых на пляже."
                                },
                                {number: "3", place: "Остров Базаруто", description: "Отдых на пляже. По желанию можно заняться дайвингом или посетить колонию фламинго. Можно прогуляться до единственного на озере маяка."
                                },
                                {number: "4", place: "Остров Базаруто", description: "Экскурсия на традиционной лодке на другие острова архипелага - Санта-Каролина, Бенгуэрра, Магарук. ПИкник на каком-то из этих островом в атмосфере абсолютной тишины и безмятежности. "
                                },
                                {number: "5", place: "Остров Базаруто", description: "Отдых на пляже. По желанию можно отправится на спортивную рыбалку. Окружающая архипелаг территория — лучшее место для ловли чёрного марлина в восточной части Индийского океана. Марлины подплывают близко к берегу, и часто их можно увидеть за кормлением среди косяков разных видов тунца." 
                                },
                                {number: "6", place: "Мапуто", description: "Возвращение в Мапуто. Прогулка по городу. Свободное время. Трансфер до аэропорта для регистрации на рейс и вылета домой."
                                }
                                ],
                                picture1: "BazarutoIsland1.jpg", picture2: "BazarutoIsland2.jpg", picture3: "BazarutoIsland3.jpg"
    },
    { id: 3, picture: "tripToZanzibar.jpg", title:"Поездка на Занзибар", destinationId: 3, price: 4205, countryId: 6, duration: 15, link: "tripToZanzibar", description: "Тур 'Поездка на Занзибар' позволит вам очутиться на райском острове с бедоснежным песком и зелеными пальмами. Вы насладитесь шумом прибоя и закатом солнца. Вы сможете не только поплавать с аквалангом и посмотреть на подводный мир острова Занзибар, но и отправиться в путешествие на традиционных африканских лодках вокруг острова.",
                                programm: [
                                {number: "1", place: "Дар-Эс-Салам", description: "Прилет в Дар-Эс-Салам (Танзания). Заселение в отель. Отдых."
                                },
                                {number: "2", place: "Дар-Эс-Салам", description: "Осмотр города. Посещение местного рыбного рынка."
                                },
                                {number: "3", place: "Занзибар", description: "Переезд в аэропорт и вылет на остров Занзибар. Первая ночь - в Стоун Тауне, одном из самых красивых городов Восточной Африки. Желающие могут посетить кафе Фредди Меркури, уроженца этого города, зайти на бывший рынок рабов, побродить по городу и купить сувениры."
                                },
                                {number: "4", place: "Занзибар", description: "Утром желающие могут посетить остров, на котором живет сейшельская черепаха, один из трех видов оставшихся на Земле сухопутных гигантских рептилий. Днем переезд на северное побережье, вселение в гостиницу на коралловом пляже с белоснежным песком."
                                },
                                {number: "5", place: "Занзибар", description: "Желающие могут отправиться в морскую экскурсию под парусом с местными рыбаками в традиционной рыбацкой лодке «нгалава» к грандиозному барьерному рифу, опоясывающему остров, заняться дайвингом или морской рыбалкой. Изучение богатейшей фауны литорали."
                                },
                                {number: "6", place: "Занзибар", description: "Свободный «пляжный» день на Занзибаре. Прогулки пешком или на велосипеде вдоль безлюдных белых коралловых пляжей, вытянутых на десятки километров."
                                },
                                {number: "7-10", place: "Занзибар", description: "Отдых на пляже. Возможность заняться дайвингом."
                                },
                                {number: "11-12", place: "Занзибар", description: "Поездка на катере вокруг острова, купание в лагуеах. Ночевка на катере."
                                },
                                {number: "13-14", place: "Занзибар", description: "Поездка в ближайшую деревню в центр острова к местным жителям для знакомства с их бытом и традициями."
                                },
                                {number: "15", place: "Стоун Таун", description: "Днем - возвращение в Стоун Таун, есть время для прогулки, вечерний или ночной вылет домой."
                                }
                                ],
                                picture1: "tripToZanzibar1.jpg", picture2: "tripToZanzibar2.jpg", picture3: "tripToZanzibar3.jpg"
    },
    {id: 4, picture: "secretsOfAfrica.jpg", title:"Загадки Африки", destinationId: 2, price: 3890, countryId: 2, duration: 9, link: "secretsOfAfrica", description: "Тур 'Загадки Африки' познакомит вас с обычаями и традициями различных африканских племен. Вы посетите различные поселения племен, посмотрите на быт африканцев, попробуете традиционную африканскую еду и даже сможете поучаствовать в танцевальных обрядах и церемониях.",
                                programm: [
                                {number: "1", place: "Найроби", description: "Прибытие в Найроби (столицу Кении), заселение в отель. Экскурсия по городу."
                                },
                                {number: "2", place: "Парк Самбуру", description: "Переезд на джипах-внедорожниках в национальный парк Самбуру, расположенный в районе сухих саван, находящихся на севере страны. Сафари по парку. Здесь можно увидеть жирафов, слонов, львов, антилоп, бабуинов и др. Посещение поселений племени самбуру. Знакомство с традициями и бытом. Участие в танцевальных обрядах."
                                },
                                {number: "3", place: "Озеро Туркана", description: "Переезд на джипах до озера Туркано. Путь пролегает через лавовую пустыню, одну из наиболее впечатляющих пустынь Африки. Размещение в отеле."
                                },
                                {number: "4", place: "Озеро Туркана", description: "Выезд в деревню племени эльмоло. Экскурсия по окрестностям озера, во время которой можно познакомиться с представителями его богатого животного мира." 
                                },
                                {number: "5", place: "Нанюки", description: "Переезд в город Нанюки, расположенный в центральной Кении, недалеко от национального парка Накуру."
                                },
                                {number: "6", place: "Парк Накуру", description: "Поездка в национальный парк Накуру. Сафари по парку (тысячи фламинго, белые носороги, львы, жирафы, антилопы, бабуины, водяные козлы)."
                                },
                                {number: "7", place: "Парк Цаво", description: "Переезд на индивидуальном туристическом автобусе на юг страны в район национального парка Цаво. Обед в ресторане. Размещение в базовом лагере."
                                },
                                {number: "8", place: "Парк Цаво", description: "Посещение племени масаи, участие в охоте. Дикое сафари. Вечером ужин из жареного барашка. Ночевка в базовом лагере."
                                },
                                {number: "9", place: "Вылет домой", description: "Возвращение в Найроби. Трансфер до аэропорта для регистрации на рейс и вылета домой."
                                }
                                ],
                                picture1: "secretsOfAfrica1.jpg", picture2: "secretsOfAfrica2.jpg", picture3: "secretsOfAfrica3.jpg",
    },
    {id: 5, picture: "toVisitLemurs.jpg", title:"В гости к лемурам", destinationId: 3, price: 4800, countryId: 3, duration: 11, link: "toVisitLemurs", description: "Тур 'В гости к лемурам' познакомит вас с удивительным островом Мадагаскар, примостившимся к боку Африки. Песчаные пляжи, бухты и коралловые рифы, потухшие вулканы и заросли баобабов, удивительные животные и растения будут удивлять и восхищать вас в течение всего тура.",
                                programm: [
                                {number: "1", place: "Антананариву", description: "Прибытие Антананариву, заселение в отель. Экскурсия по городу."
                                },
                                {number: "2", place: "Антананариву", description: "Осмотр города, посещение местного рынка."
                                },
                                {number: "3", place: "Мадагаскар", description: "Переезд на пляж. Отдых на пляже."
                                },
                                {number: "4", place: "Мадагаскар", description: "По желанию экскурсия по острову. Посещение долины баобабов и тропических лесов Ацинананы." 
                                },
                                {number: "5", place: "Парк Монтань Д’Амбре", description: "Посещение национального парка Монтань Д’Амбре. Наблюдение за жизнью хамелеонов, лемуров и других животных, птиц и насекомых."
                                },
                                {number: "5", place: "Вулкан Анкаратра", description: "Поездка на Вулкан Анкаратра, который образовался в результате раскола материков миллионы лет назад во время формирования современного облика планеты."
                                },
                                {number: "6", place: "Мадагаскар", description: "Переезд на другой пляж. Заселение в бунгало на пляже с белым песком. Возможность поплавать на традиционной малагасийской лодке, рыбалка."
                                },
                                {number: "6", place: "Мадагаскар", description: "Отдых на пляже, осмотр соседних пляжей."
                                },
                                {number: "7", place: "Остров Святой Марии", description: "Переезд на катере на остров Святой Марии. Дайвинг, наблюдение за морскими животными, отдых на пляже. Ночевка на острове."
                                },
                                {number: "8-10", place: "Мадагаскар", description: "Возвращение на Мадагаскар, отдых на пляже."
                                },
                                {number: "11", place: "Вылет домой", description: "Трансфер до аэропорта для регистрации на рейс и вылета домой."
                                }
                                ],
                                picture1: "toVisitLemurs1.jpg", picture2: "toVisitLemurs2.jpg", picture3: "toVisitLemurs3.jpg",
    },
    { id: 6, picture: "unforgettableTanzania.jpg", title:"Незабываемая Танзания", destinationId: 1, price: 4150, countryId: 6, duration: 10, link: "unforgettableTanzania", description: "Вы когда-нибудь видели, как искрятся на солнце озера, отражая в своих водах несущиеся мимо стада антилоп? Как могучие конусы спящих вулканов врезаются в просторный небосвод, а над горячими источниками клубится пар? Как высокотравные саванны перемежаются с густыми лесами, а широкие равнины – с огромными скалами? Звучит невероятно, но все эти богатства находятся в одной стране – Танзании.",
                                programm: [
                                {number: "1", place: "Аруша", description: "Прилет в Арушу (Танзания). Заселение в отель. Отдых."
                                },
                                {number: "2", place: "Аруша", description: "Осмотр города. Посещение местных достопримечательностей, центра города, рынка."
                                },
                                {number: "3", place: " Парк Тарангире", description: "Джип-сафари в парке Тарангире. Парк славится не только удивительным изобилием слонов, но и такими редкими животными, как ориксы, и даже жирафовые газели. Здесь довольно высока вероятность встретить африканских хищников - льва, гепарда и леопарда."
                                },
                                {number: "4", place: "Килиманджаро", description: "Поездка к подножию Килиманджаро. Возможность увидеть потухший вулкан и поразиться наличию снега на африканском континенте."
                                },
                                {number: "5", place: "Парк Серенгети", description: "Переезд в отель рядом с национальным парком Серенгети. Вечер в отеле."
                                },
                                {number: "6-8", place: "Парк Серенгети", description: "Сафари на джипах в парке Серенгети. Есть возможность увидеть «большую пятерку» - слонов, буйволов, львов, леопардов и носорогов."
                                },
                                {number: "9", place: "Парк Серенгети", description: "Поездка в кратер Нгоронгоро - уникальную экосистему Танзании. В парке Нгоронгоро нашли приют сотни видов животных, ранним утром здесь можно повстречать осторожных каракалов и сервалов, а в лесах мирно пасущиеся стада слонов. На равнине неспешно прогуливаются буйволы, резвятся зебры, а антилопы гну загадочным взглядом провожают сафари-машины."
                                },
                                {number: "10", place: "Аруша", description: "Возвращение в Арушу, прогулка по городу, вечерний или ночной вылет домой."
                                }
                                ],
                                picture1: "unforgettableTanzania1.jpg", picture2: "unforgettableTanzania2.jpg", picture3: "unforgettableTanzania3.jpg"
    },
    {id: 7, picture: "fairytalesOfGreatZimbabwe.jpg", title:"Сказки великого Зимбабве", destinationId: 1, countryId: 1, price: 3930, duration: 16, link: "fairytalesOfGreatZimbabwe", description: "Тур 'Сказки великого Зимбабве' познакомит вас с удивительной страной Зимбабве. Вы сможете поучаствовать в сафари в парке Чиверо, восхититься балансирующими камнями в парке гигантских камней и, самое главное, своими глазами увидеть одно из самых главных и удивительных мест в Африке - Водопад Виктория.",
                                programm: [
                                {number: "1", place: "Хараре", description: "Прилет в город Хараре (столицу Зимбабве), заселение в отель. Осмотр города, посещение местного рынка."
                                },
                                {number: "2", place: "Парк Чиверо", description: "Поездка на джипах-внедорожниках на сафари в парк Чиверо. Здесь можно увидеть зебр, жирафов, носорогов и других африканских животных."
                                },
                                {number: "3", place: "Парк камней Эпворт", description: "Поездка в парк балансирующих камней в Эпворте.Это фантастическое каменное царство: гигантский гриб с ножкой и шляпкой - махина, на вершине которой на наклонной плоскости непонятно каким образом держатся многотонные валуны - пирамида из глыб, покоящихся одна на другой."
                                },
                                {number: "4", place: "Виктория-Фоллс", description: "Перелет в город Виктория-Фоллс. Заселение в бунгало. Отдых." 
                                },
                                {number: "5-7", place: "Водопад Виктория", description: "Осмотр водопада Виктория - самого крупного водопада в Африке. Второе название водопада -'Гремящий дым', ведь брызги от водопада разлетаются на несколько сотен километров, а шум и грохот слышны на несколько километров. Посещение нескольких смотровых площадок. По желанию можно искупаться в купели Дьявола."
                                },
                                {number: "8", place: "Парк Хванге", description: "Переезд в отель рядом с национальным парком Хванге. Отдых в отеле."
                                },
                                {number: "9-11", place: "Парк Хванге", description: "Посещение национального парка Хванге - одного из крупнейших заповедников дикой природы, в котором обитает больше 1000 разновидностей животных и более 400 видов птиц. Сафари по разным местам парка."
                                },
                                {number: "12", place: "Парк Матобо", description: "Переезд в отель рядом с национальным парком Матобо. Отдых в отеле."
                                },
                                {number: "13-14", place: "Парк Матобо", description: "Посещение национального парка Матобо. Сафари по разным местам парка."
                                },
                                {number: "15", place: "Масвинго", description: "Переезд в Масвинго. Посещение руин древнего Зимбабве и великого Холма с остатками крепости."
                                },
                                {number: "16", place: "Вылет домой", description: "Возвращение в Хараре. Трансфер до аэропорта для регистрации на рейс и вылета домой."
                                }
                                ],
                                picture1: "fairytalesOfGreatZimbabwe1.jpg", picture2: "fairytalesOfGreatZimbabwe2.jpg", picture3: "fairytalesOfGreatZimbabwe3.jpg",
    },
    {id: 8, picture: "desertTreasures.jpg", title:"Сокровища пустыни", destinationId: 2, price: 2720, countryId: 5, duration: 8, link: "desertTreasures", description: "Тур 'Сокровища пустыни' познакомит вас с обычаями и традициями различных племен Намибии. В своем путешествии по пустынной Намибии вы не только увидите поразительные ландшафты, но и посетите различные поселения племен, посмотрите на быт африканцев и узнаете, как они выживают в таких суровых условиях.",
                                programm: [
                                {number: "1", place: "Виндхук", description: "Прибытие в город Виндхук (столицу Намибии), заселение в отель. Экскурсия по городу."
                                },
                                {number: "2", place: "Поселение бушменов", description: "Поездка на джипах-внедорожниках в поселение племени бушменов - одним из самых древних африканских племен. Знакомство с традициями, бытом и участие в различных обрядах."
                                },
                                {number: "3", place: "Пустыня Намиб", description: "Поездка в пустыню Намиб - одну из самых засушливых пустынь. Осмотр и фото в мертвой долине. Долина окружена высокими песчаными красными дюнами, высота которых может достигать 400 метров."
                                },
                                {number: "4", place: "Поселение Херере", description: "Выезд в деревню племени херере. Женщины данного племени знамениты своими необычными одеждами и головными уборами в виде рогов." 
                                },
                                {number: "5", place: "Намибия", description: "Переезд на север Намибии, заселение в отель, день отдыха в отеле."
                                },
                                {number: "6", place: "Поселение химба", description: "Поездка в деревню племени Химба, женщины которого знамениты своим необычным цветом кожи и странными прическами. Знакомство с их традициями, осмотр жилищ, участие в ритуалах и приготовлении пищи."
                                },
                                {number: "7", place: "Намибия", description: "Переезд на запад страны к океану. Катание на квадроциклах по дюнам высотой около 300 метров. Отдых в отеле."
                                },
                                {number: "8", place: "Вылет домой", description: "Трансфер до аэропорта для регистрации на рейс и вылета домой."
                                }
                                ],
                                picture1: "desertTreasures1.jpg", picture2: "desertTreasures2.jpg", picture3: "desertTreasures3.jpg",
    },
            
    {id: 9, picture: "brightColoursOfCapeTown.jpg", title:"Яркие краски Кейптауна", destinationId: 1, price: 3100, countryId: 7, duration: 6, link: "brightColoursOfCapeTown", description: "Тур 'Яркие краски Кейптауна' дарит вам редкий шанс познакомится с одним из самых противоречивых городов Африки - Кейптауном. Вы увидите пингвинов, подниметесь на Столовую гору, побываете на мысе Доброй Надежды.",
                                programm: [
                                {number: "1", place: "Кейптаун", description: "Прилет в Кейптаун. Трансфер и размещение в отеле. Вечером Вы сможете прогуляться по знаменитой набережной «Виктория и Альфред». Это одно из самых популярных мест отдыха как среди кейптаунцев, так и среди гостей города."
                                },
                                {number: "2", place: "Кейптаун", description: "Экскурсия по Кейптауну. Знакомство с его культурой, историей и архитектурой. Посещение района Бо-Каап - самого яркого района Кейптауна. Посещение разноцветных деревянных домиков на пляже."
                                },
                                {number: "3", place: "Кейптаун", description: "Путешествие на Мыс Доброй Надежды - здесь сливаются воды Антлантического и Индийского океана. По завершении - трансфер в отель, отдых."
                                },
                                {number: "4", place: "Кейптаун", description: "Подъем на Столовую гору, с которой открывается удивительный вид на Кейптаун с высоты. Поездка по канатной дороге."
                                },
                                {number: "5", place: "Кейптаун", description: "Экскурсия на знаменитый пляж 'Болдерс бич', где можно увидеть самую большую колонию пингвинов в Африке." 
                                },
                                {number: "6", place: "Вылет домой", description: "Прогулка по городу. Свободное время. Трансфер до аэропорта для регистрации на рейс и вылета домой."
                                }
                                ],
                                picture1: "brightColoursOfCapeTown1.jpg", picture2: "brightColoursOfCapeTown2.jpg", picture3: "brightColoursOfCapeTown3.jpg"
    },
    { id: 10, picture: "safariInMozambique.jpg",title:"Сафари в Мозамбике", destinationId: 1, price: 3360, countryId: 4, duration: 9, link: "safariInMozambique", description: "Тур 'Сафари в Мозамбике' позволит вам осуществить давнюю мечту и понаблюдать за множеством животных, обитающих в Африке. Вы сможете наблюдать жизнь слонов, жирафов, буйволов, львов и других африканских животных в их естественной среде обитания.",
                                programm: [
                                {number: "1", place: "Мапуто", description: "Прилет в Мапуто - столицу Мозамбика. Трансфер и размещение в отеле. Осмотр достопримечательностей города, посещение рыбного рынка."
                                },
                                {number: "2", place: "Мапуто", description: "Экскурсия к местным шаманам. Возможность поучаствовать в различных ритуалах и обрядах, предсказать судьбу и загадать желание."
                                },
                                {number: "3", place: "Парк Горонгоса", description: "Перелет в отель рядом с национальным парком Горонгоса. Заселение в отель. Отдых."
                                },
                                {number: "4-5", place: "Парк Горонгоса", description: "Сафари на открытом джипе в национальном парке Горонгоса в поисках  жирафов и буйволов, львов, антилоп и гепардов. После сафари свободное время для отдыха."
                                },
                                {number: "6", place: "Озеро Ньяса", description: "Перелет в отель к озеру Ньяса. Заселение в отель. Отдых и вечерняя прогулка."
                                },
                                {number: "7-8", place: "Озеро Ньяса", description: "Прогулки у озера. Возможность заняться дайвингом или снорклингом. Сафари в окрестностях озера."
                                },
                                {number: "9", place: "Мапуто", description: "Возвращение в Мапуто. Поездка в аэропорт и вылет домой."
                                }
                                ],
                                picture1: "safariInMozambique1.jpg", picture2: "safariInMozambique2.jpg", picture3: "safariInMozambique3.jpg"
    },
]

let popularToursIds = [1,3,5,9]

let popularToursMenuItems = toursItems.filter(function(item) {
    return popularToursIds.includes(item.id)
})

popularToursMenuItems = popularToursMenuItems.map(function(item) {
    return {
        name: item.title,
        link: item.link
    
    }
})

let informationItems = [
    {id: 1, title:"О визе", link: "AboutVisa", picture: "visa.jpg", description: "В Африке есть страны, куда въезд россиянам разрешен без виз, есть страны с упрощенным визовым режимом, когда виза ставится сразу же после прилета на границе, есть страны, в которые визу необходимо получать заранее. Разобраться в этих вопросах вам помогут наши специалисты."},
    {id: 2, title:"О страховке", link: "AboutInsurance", picture: "insurance.jpg", description: "Страховку для путешествия в Африку рекомендуется приобретать обязательно и экономить на ней не стоит. Непривычные климат и еда, антисанитария, дикие животные все это создает дополнительные риски. Наши специалисты проконсультируют вас по данному вопросу."},
    {id: 3, title:"О прививках", link: "AboutVaccination", picture: "vaccination.jpg", description: "Прививки, которые понадобятся вам в случае путешествия в Африку зависят от конкретной страны, которую вы выберете. Есть страны, которые абсолютно безопасны и не требуют вакцинации, в другие страны, наоборот, без сделанных прививок ехать очень опасно. После того, как вы определитесь с туром, наши специалисты проконсультируют вас по данному вопросу."},
]

let  informationMenuItems = informationItems.map(function(item) {
    return {
        link: item.link,
        name: item.title
    }
})

app.get('/countryItems', (req, res) => {
    res.json( 
        countryItems
    )
}),

app.get('/destinationItems', (req, res) => {
    res.json(
        destinationItems
    )
}),

app.get('/toursItems', (req, res) => {
    res.json( 
        toursItems
    )
}),

app.get('/popularToursIds', (req, res) => {
    res.json(
        popularToursIds
    )
}),



app.get('/menuItems', (req, res) => {
    res.json({ 
    logo: "logo_new.svg",
    menu:[
                    {name: "Главная", link: ""},
                    {name: "Выбрать тур", link: "choice"},
                    {name: "Страны", link: "countries",
                        subMenuItems: countryMenuItems
                    },
                    {name: "Направления", link: "destinations",
                        subMenuItems: destinationMenuItems
                    },
                    {name: "Популярные туры", link: "tours",
                        subMenuItems: popularToursMenuItems
                    },
                    {name: "Информация", link: "informations",
                        subMenuItems: informationMenuItems
                    },
                    {name: "Контакты", link: "contacts"}
                ]
            })
}),


app.get('/informationItems', (req, res) => {
    res.json( 
        informationItems
    )
}),



app.get('/contactsItems', (req, res) => {
    res.json({ 
        tradeMark:{logo: "logo_new.svg", description:"&#169; Legenda Travel 2018. Все права защищены"},
        contacts: [
            {icon: '<i class="fa fa-envelope"></i>', description:"legenda_travel@gmail.com"},
            {icon: '<i class="fa fa-phone"></i>', description:"+7-950-004-27-42"},
            {icon: '<i class="fas fa-home"></i>', description:"СПб, Учебный переулок, 8"}
        ],
        socialSites: [
            {icon: '<i class="fab fa-vk"></i>'},
            {icon: '<i class="fab fa-twitter"></i>'},
            {icon: '<i class="fab fa-facebook-f"></i>'},
            {icon: '<i class="fab fa-skype"></i>'},
        ]
    })
}),

app.post('/form', (req, res) => {
    res.json({ok: 1})
}),

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))