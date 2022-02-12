// page where you can customize your mapa
//http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html

map_custome_style = [];
/*
[
	{
	"featureType": "road",
	"stylers": 
		[
		{ "color": "#37bb80" },
		{ "hue": "#f600ff" },
		{ "lightness": -58 }
		]
	},
	{
	"featureType": "landscape",
	"stylers": 
		[
		{ "color": "#3a8080" },
		{ "gamma": 1.42 },
		{ "lightness": -14 },
		{ "hue": "#ff9100" },
		{ "saturation": -68 }
		]
	},
	{
	"featureType": "poi",
	"stylers": 
		[
			{ "visibility": "off" }
		]
	},
	{
	"featureType": "administrative",
	"stylers": 
		[
		{ "visibility": "off" }
		]
	},
	{
	"featureType": "water",
	"stylers": 
		[
		{ "visibility": "off" }
		]
	}
]
*/
window.placesRef = {
  "places": [{
      "lat": 31.96716,
      "type": 1,
      "address": "Baja California",
      "lng": -116.65296,
      "name": "Vinícola Retorno",
      "telephone": "646 151 9247",
      "web": "http://vinicolaretorno.com",
      "desc": "Retorno es una productora familiar creada en 2008 que se caracteriza por no realizar 'correcciones' a los vinos, respetando así las características intrínsecas del terruño y la diversidad de uva utilizada.",
      "img": "retorno.jpg"
    },
    {
      "lat": 31.96713,
      "type": 1,
      "address": "Santos Degollado",
      "lng": -116.64605,
      "name": "Vinisterra Vineyard",
      "telephone": "646 178 3310",
      "web": "http://vinisterra.com",
      "desc": "Esta casa vitivinícola busca expresar en los vinos las diferentes características de los valles y sus viñedos en la región, trabajando con máximo cuidado en los detalles y representando con orgullo su origen bajacaliforniano.",
      "img": "vinisterra.jpg"
    },
    {
      "lat": 31.96527,
      "type": 1,
      "address": "Baja California",
      "lng": -116.6421,
      "name": "Vinícola Tres Valles",
      "telephone": "646 178 8052",
      "web": "http://vinostresvalles.com",
      "desc": "Tres Valles elabora vinos honestos, respetando lo que brinda la naturaleza respecto a suelo, agua y clima. Su imagen y marcas están basadas en los primeros pobladores de Baja California, pretendiendo el difundir la cultura y tradiciones indígenas. ",
      "img": "tres_valles.jpg"
    },
    {
      "lat": 32.02667,
      "type": 1,
      "address": "Carretera Tecate-Ensenada 87.5 San Antonio de las Minas, Valle de Guadalupe",
      "lng": -116.62241,
      "name": "Viñas de la Erre",
      "telephone": "686 223 1737",
      "web": "https://www.facebook.com/vinasdlaerre",
      "desc": "Joven vitivinícola abre sus puertas los fines de semana para degustación de sus vinos acompañados de una hermosa vista.",
      "img": "vinas_erre.jpg"
    },
    {
      "lat": 32.11798,
      "type": 1,
      "address": "Baja California",
      "lng": -116.51705,
      "name": "LA Cetto",
      "telephone": "646 155 2179",
      "web": "http://www.cettowines.com/",
      "desc": "Pionera en la vitinicultura del Valle de Guadalupe, se enfoca en la introducción de variedades de uvas finas, explorando diversas tierras y climas de toda la región. Alcanza 27 mercados internacionales y más de 150 premios en concursos del rubro.",
      "img": "la_cetto.jpg"
    },
    {
      "lat": 32.12351,
      "type": 1,
      "address": "Carretera Federal 3",
      "lng": -116.53945,
      "name": "Domecq",
      "telephone": "646 155 2249",
      "web": "http://www.domecq.com.mx/",
      "desc": "Pernod Ricard México representa lo mejor de 2 mundos: la tradición, la cultura local y la experiencia global del grupo Pernod Ricard. Tracudiéndose en factores de competitividad, confianza y empatía entre las emmpresas, sus clientes y socios.",
      "img": "pernod.jpg"
    },
    {
      "lat": 32.09486,
      "type": 1,
      "address": "Carretera Tecate - Ensenada Kilómetro 103",
      "lng": -116.58751,
      "name": "Monte Xanic",
      "telephone": "646 174 6035",
      "web": "http://www.montexanic.com.mx",
      "desc": "Pioneros tanto en tecnología y procesos, como en posicionamiento dentro del mercado Premium; son productores de vinos de una consistente alta calidad. Pretende ser el referente permanente dentro de la industria realizando vinos con procesos modernos.",
      "img": "monte_xanic.jpg"
    },
    {
      "lat": 31.96287,
      "type": 2,
      "address": "Rancho Cimarrón",
      "lng": -116.63378,
      "name": "Ochentos Pizza",
      "telephone": "646 156 8305",
      "web": "http://www.ochentospizza.com/",
      "desc": "Pizzería rústica que se caracteriza por utilizar un horno tradicional, brindándole un sabor único y casero a sus pizzas. Cuenta con una hermosa vista al Valle de Guadalupe en su terraza y un ambiente cálido familiar.",
      "img": "ochentos_pizza.jpg"
    },
    {
      "lat": 32.069187,
      "type": 3,
      "address": "Carretera Federal 3, Baja California, Mexico",
      "lng": -116.580606,
      "name": "Hacienda Guadalupe Hotel",
      "telephone": "646 155 2859",
      "web": "http://www.haciendaguadalupehotel.com",
      "desc": "Ubicado al pie de una Colina al final de un camino privado y con una vista panorámica del hermoso Valle de Guadalupe se localiza este nuevo y confortable Boutique Style Hotel. Ofrece un ambiente sereno en edificaciones con estilo rústico-naturales.",
      "img": "hacienda_guadalupe.jpg"
    },
    {
      "lat": 31.991215,
      "type": 2,
      "address": "Km. 91.5 Carr. Ensenada-Tecate",
      "lng": -116.631074,
      "name": "La Cabaña",
      "telephone": "646 155 2680",
      "web": ""
    },
    {
      "lat": 31.992023,
      "type": 3,
      "address": "Carretera Tecate-Ensenada Km 92 ",
      "lng": -116.641116,
      "name": "Hotel Fatima ",
      "telephone": "646 155 3279",
      "web": "http://www.hotelplazafatima.com",
      "desc": "Ubicado en el corazón de La Ruta del Vino, es el alojamiento ideal para disfrutar su estadía. Cuenta con precios razonables, cómodas habitaciones y un excelente servicio para sus huéspedes",
      "img": "hotel_plaza_fatima.jpg"
    },
    {
      "lat": 32.110548,
      "type": 3,
      "address": "Carretera Federal 3, Baja California, México",
      "lng": -116.551723,
      "name": "Encuentro Guadalupe (Formerly Hotel Endemico)",
      "telephone": "01 646 155 2775",
      "web": "http://encuentroguadalupe.com",
      "desc": "Encuentro Guadalupe es un 'antiresort' que consiste en 20 eco-lofts independientes localizados en una colida recóndita del Valle de Guadalupe. Incluye comodidades como alberca, jacuzzi, bar y WiFi , así como transporte complementario.",
      "img": "encuentro_guadalupe.jpg"
    },
    {
      "lat": 32.058327,
      "type": 2,
      "address": "Km. 83, Carretera Ensenada-Tecate. Valle de Guadalupe, Ensenada, Baja California, Mexico",
      "lng": -116.59399,
      "name": "Laja: Cocina de Baja California",
      "telephone": "01 646 155 2556",
      "web": "http://lajamexico.com",
      "desc": "Restaurante enclavado en el Valle de Guadalupe desde 2001. Utiliza productos cosechados en su huerto, además de otros ingredientes frescos endémicos de la región. Cuenta con un menú de cuatro y ocho tiempos diseñado de acuerdo a la temporada.",
      "img": "laja.jpg"
    },
    {
      "lat": 31.98299,
      "type": 2,
      "address": "Kilometer 93.5, Carretera Federal 3, Baja California, México",
      "lng": -116.648527,
      "name": "Restaurant Mustafa",
      "telephone": "01 646 155 3185",
      "web": "",
      "desc": "Establecido hace 23 años en la Ruta del Vino, se especializa en desayunos, comida mexicana y árabe servida bajo techo. La especialidad de la casa: Borrego al Horno estilo Marrocco. Se encuentra rodeado de viñedos realizando de ellos su propio vino.",
      "img": "mustafa.jpg"
    },
    {
      "lat": 31.786451,
      "type": 1,
      "address": " Calle principal #290 Valle de Guadalupe, Ensenada, Baja California, México",
      "lng": -116.570242,
      "name": "Vinos Fuentes",
      "telephone": "01 646 155 2205",
      "web": "",
      "desc": "Vinícola familiar que produce vinos artesanales desde 2000 y uvas desde 1963. Ofrece degustaciones en su boutique Sarmiento's, además de contar con tienda de regalos.",
      "img": "vinos_fuentes.jpg"
    },
    {
      "lat": 32.112332,
      "type": 1,
      "address": "Parcela 72-92 Rancho La Gotita, S/n, Valle de Guadalupe, Ensenada, Baja California, México",
      "lng": -116.510614,
      "name": "La casa de Doña Lupe",
      "telephone": "01 646 127 1640",
      "web": "http://www.lacasadonalupe.com/",
      "desc": "Un viñedo en el que puedes encontrar serenidad y deliciosos productos naturales y orgánicos: mermeladas, salsas, aceite de oliva, pan, queso. Sus vinos únicos son creados por una mujer dedicada a la excelencia, cosechando con tiempo y mucho amor.",
      "img": "dona_lupe.jpg"
    },
    {
      "lat": 32.095783,
      "type": 2,
      "address": "Calle Principal #276, Valle de Guadalupe, Ensenada, Baja California, México",
      "lng": -116.572395,
      "name": "Casa de la Familia Samarín",
      "telephone": "01 646 155 2030",
      "web": "https://www.facebook.com/pages/Restaurante-Familia-Samarin/166343466749851",
      "desc": "Ubicado en una antigua colonia rusa, establecida en 1905, se ubica este restaurante con un atractivo museo, en lo que fuera el hogar de los pioneros Samarin.",
      "img": "familia_samarin.jpg"
    },
    {
      "lat": 32.513562,
      "type": 1,
      "address": "Km. 7.5 Carretera Federal #3 Tecate-Ensenada, Baja California, México",
      "lng": -116.616486,
      "name": "Vinos Tanama",
      "telephone": "01 646 215 9090",
      "web": "http://www.vinostanama.com.mx",
      "desc": "Vinicola boutique, dedicada a la elaboracion de vinos finos de autor, fundada en el año 2000. Cuenta con viñedos propios en el Valle Tanama al sur de Tecate, sus vinos expresan el clima, la tierra y el agua de su Valle Tanama.",
      "img": "tanama.jpg"
    },
    {
      "lat": 32.414748,
      "type": 1,
      "address": "Valle de Las Palmas (Baja California), 28 kilómetros al Sur de la ciudad de Tecate y 56 kilómetros al Norte del Valle de Guadalupe",
      "lng": -116.63681,
      "name": "Viñedos Don Juan",
      "telephone": "01 664 681 1386",
      "web": "http://www.vinedosdonjuan.com",
      "desc": "Ha participado en la industria del vino regional durante más de 20 años. Sus vinos son creados exclusivamente con uvas cultivadas en sus viñedos. Desde el 2010 inició un proyecto interno de armonía con la naturaleza al reciclar y reusar materiales.",
      "img": "don_juan.jpg"
    },
    {
      "lat": 32.126779,
      "type": 1,
      "address": "Km 73 carretera Tecate Ensenada, Valle de Guadalupe, Ensenada, Baja California, México",
      "lng": -116.53347,
      "name": "Paralelo",
      "telephone": "01 646 156 5267",
      "web": "http://www.paralelo.com.mx/",
      "desc": "Enología de terruño, vinos de ensamble, cruz de tierra estampada de naturaleza. Nace desde casa de piedra, en una constante idea de movimiento, búsqueda y propuesta. Sus productos pretenden expresar las personalidades de cada planta que lo forma.",
      "img": "paralelo.jpg"
    },
    {
      "lat": 32.101044,
      "type": 1,
      "address": "Fondo Calle 10 s/n Francisco Zarco, Ensenada, Baja California, México",
      "lng": -116.56688,
      "name": "Tintos del Norte 32",
      "telephone": "01 646 126 9071",
      "web": "",
      "desc": "Su peculiar nombre se debe a la ubicación exacta en la que se encuentra la vinícola. Cuenta con recorridos guiados y degustación de vinos tintos de la casa elaborados con uvas Cabernet Sauvignon, Merlot, Syrah, Nebbiolo y Grenache.",
      "img": "norte_32.jpg"
    },
    {
      "lat": 32.062228,
      "type": 3,
      "address": "Km 82.5, Ensenada, Baja California, México",
      "lng": -116.590648,
      "name": "Rancho María Teresa",
      "telephone": "01 646 155 2450",
      "web": "http://www.ranchomariateresa.com/",
      "desc": "Un lugar ideal para quien guste disfrutar de la naturaleza, tranquilidad y limpieza que brinda el entorno 100% familiar. Cuenta con: Posada Inn Mision de Guadalupe-Hotel, 2 Villas amuebladas, Balneario, restaurante, asadores y áreas para acampar.",
      "img": "maria_teresa.jpg"
    },
    {
      "lat": 32.080829,
      "type": 3,
      "address": "Km 82.5, Carr. Ensenada – Tecate, Ejido El Porvenir, Baja California, México",
      "lng": -116.587029,
      "name": "Casa de Guadalupe",
      "telephone": "01 646 151 1712",
      "web": "http://casadeguadalupe.com",
      "desc": "Dos villas amuebladas con una capacidad para hospedar cómodamente desde una pareja hasta una familia con 8 miembros. Estan ubicadas en el corazón de la Ruta del Vino a unos cuantos minutos de los viñedos más importantes.",
      "img": "casa_guadalupe.jpg"
    },
    {
      "lat": 32.497402,
      "type": 1,
      "address": "Km 11, Carr. Tecate - Ensenada, Baja California, México",
      "lng": -116.58681,
      "name": "Agrifolia (Viñedos Ulloa)",
      "telephone": "",
      "web": "",
      "desc": "Casa vinícola de la familia Téllez, busca hacer vinos de pequeñas producciones para que puedan ser propuestas originales que estén hechas con las técnicas modernas de mayor cuidado, sin que ello implique estandarización química o grandes volúmenes.",
      "img": "agrifolia_ulloa.jpg"
    },
    {
      "lat": 32.567395,
      "type": 1,
      "address": "Km 118, Carr. Tecate - Mexicali, Baja California, México",
      "lng": -116.494049,
      "name": "Viñedos Rosa de Castilla",
      "telephone": "",
      "web": "https://www.facebook.com/vinosrosadecastilla",
      "desc": "Vinícola en el municipio de Tecate, \"La Puerta Norte a la Ruta del Vino.\" Viñedos de Cabernet Sauvignon, Merlot, Nebbiolo y Tempranillo.",
      "img": "rosa_castilla.jpg"
    },
    {
      "lat": 32.051353,
      "type": 1,
      "address": "Villa Montefiori, Baja California, México",
      "lng": -116.668435,
      "name": "Villa Montefiori",
      "telephone": "01 646 156 8020",
      "web": "http://www.villamontefiori.com.mx/",
      "desc": "Utilizando una alta tecnología de vinificación y realizando una producción enfocada a la calidad, el ingeniero Paoloni pone a prueba su experiencia, potencializando al máximo la gran calidad de uvas, dando como resultado vinos vintensos y elegantes.",
      "img": "villa_montefiori.jpg"
    },
    {
      "lat": 32.09952,
      "type": 1,
      "address": "Ej. El Porvenir, Valle de Guadalupe Ensenada, Baja California, México",
      "lng": -116.634382,
      "name": "Barón Balché",
      "telephone": "01 646 55 2141",
      "web": "http://www.baronbalche.com/",
      "desc": "Los vinos Barón Balché están hechos con el amor y los cuidados necesarios que se le da a un producto de alta calidad, pero utilizando una tecnología de vanguardia. Barón Balché desea complacer los paladares tanto del que inicia como del conocedor.",
      "img": "baron_balche.jpg"
    },
    {
      "lat": 32.108692,
      "type": 1,
      "address": "Viñedos de Chateau Camou, Ensenada, Baja California, México",
      "lng": -116.601176,
      "name": "Chateau Camou",
      "telephone": "01 646 177 3303",
      "web": "www.chateau-camou.com.mx",
      "desc": "En Chateau Camou se esforzan cada día para lograr una sola meta: El arte de crear grandes vinos. Separan sus vides con la técnica del 'lyre,' para darles la exposición máxima a la luz del sol y al aire fresco.",
      "img": "camou.jpg"
    },
    {
      "lat": 32.08587,
      "type": 3,
      "address": "Parcela A-1 s/n Col. Rusa de Guadalupe Valle de Guadalupe, Ensenada, Baja California, México",
      "lng": -116.622797,
      "name": "Adobe Guadalupe",
      "telephone": "01 646 155 2094",
      "web": "http://www.adobeguadalupe.com/",
      "desc": "Vínicola que además es un bed and breakfast con seis recámaras para huéspedes. El estilo arquitectónico de la hacienda está influenciado por la arquitectura del desierto de Irán y pretende crear una experiencia en armonía con la naturaleza.",
      "img": "adobe_guadalupe.jpg"
    },
    {
      "lat": 31.866918,
      "type": 1,
      "address": "Km. 85.5 Carretera Federal #3 Tecate-Ensenada Rancho El Mogor, San Antonio de las Minas, Ensenada, Baja California México",
      "lng": -116.668209,
      "name": "Mogor Badan",
      "telephone": "01 646 156 8156",
      "web": "https://www.facebook.com/CavasDelMogor",
      "desc": "Proyecto eminentemente familiar, lugar apacible, en el Mogor se practica la agricultura orgánica, respetando los tiempos de la naturaleza y lastimando lo menos posible el entorno. Produce tres etiquetas y está abierto a la degustación los sábado. ",
      "img": "mogor_badan.jpg"
    },
    {
      "lat": 32.026181,
      "type": 1,
      "address": "Rancho Mogorcito, Carretera Tecate-Ensenada Km 87 Valle de Guadalupe, Ensenada, Baja California México",
      "lng": -116.615324,
      "name": "Viñas de Garza",
      "telephone": "01 646 175 8883",
      "web": "http://www.vinosdegarza.com/",
      "desc": "Proyecto eminentemente familiar, lugar apacible, en el Mogor se practica la agricultura orgánica, respetando los tiempos de la naturaleza y lastimando lo menos posible el entorno. Produce tres etiquetas y está abierto a la degustación los sábado. ",
      "img": "vinas_garza.jpg"
    },
    {
      "lat": 32.026834,
      "type": 1,
      "address": "Km. 87 Carretera Tecate-Ensenada, San Antonio de las Minas, Baja California, México",
      "lng": -116.61452,
      "name": "Sol y barro",
      "telephone": "01 646 155 3254",
      "web": "http://solybarro.blogspot.mx/",
      "desc": "Pequeña vinícola propiedad de una familia Mexicana-Suiza donde el buen gusto se mezclan con las condiciones naturales locales para producir una mezcla elegante.",
      "img": "sol_y_barro.jpg"
    },
    {
      "lat": 32.026402,
      "type": 1,
      "address": "Km. 87 Carretera federal #3 Ensenada-Tecate, Baja California",
      "lng": -116.612637,
      "name": "Vinos Tres Mujeres",
      "telephone": "01 646 173 4536",
      "web": "",
      "desc": "Un lugar rústico con ambiente mágico, degustación de vinos artesanales con productos del rancho como aceite de oliva y aceitunas. La cavita de degustación es además sala de exhibición de las piezas de cerámica y azulejos hechos en el lugar. ",
      "img": "tres_mujeres.jpg"
    },
    {
      "lat": 32.075626,
      "type": 1,
      "address": "Callejon Emiliano Zapata, El Porvenir (Guadalupe), 22750 Ensenada, Baja California",
      "lng": -116.624474,
      "name": "Viñedo Las Nubes",
      "telephone": "01 646 156 8037",
      "web": "https://www.facebook.com/pages/Las-Nubes-Bodegas-y-Vi%C3%B1edos/113308252088239",
      "desc": "Joven empresa Vitivinícola, que busca ser una productora y distribuidora de vinos de la mejor calidad en la zona de Baja California. Su producción le ha hecho merecedor de 4 medallas de oro en el concurso internacional Ensenada Tierra de Vino. ",
      "img": "las_nubes.jpg"
    },
    {
      "lat": 32.075488,
      "type": 1,
      "address": "Emiliano Zapata #680 Ejido El Porvenir, Ensenada, Baja California",
      "lng": -116.624241,
      "name": "Vinícola J.C. Bravo",
      "telephone": "01 646 155 2068",
      "web": "",
      "desc": "Elaboran su vino con un 100% de uva carignan, permite que sea un referente para quienes desean conocer la tipicidad que desarrolla esta cepa, tradicionalmente utilizada sólo como estructurante y no como una variedad principal en un caldo.",
      "img": "jc_bravo.jpg"
    },
    {
      "lat": 32.089828,
      "type": 1,
      "address": "Camino a San José de la Zorra, Parcela 67, Ejido El Porvenir C.P. 22755 Ensenada, , Baja California",
      "lng": -116.629715,
      "name": "Emevé vinos",
      "telephone": "01 664 634 1080",
      "web": "http://www.vinicolaemeve.com/",
      "desc": "Sembrando sus primeras uvas en el año 2004, esta vitivinícola tiene una extensión total de 18 hectáreas de sembradíos. Su vino emblemático, Los Nietos, fue nombrado por el fundador debido al valor sentimental que le produce su familia.",
      "img": "emeve.jpg"
    },
    {
      "lat": 32.039472,
      "type": 1,
      "address": "La Villa del Valle, Ensenada, Baja California",
      "lng": -116.653739,
      "name": "Vena Cava",
      "telephone": "01 646 156 8007",
      "web": "http://www.venacavawine.com/",
      "desc": "Como representante de una nueva generación de vinicultores en el Valle de Guadalupe, explora nuevos métodos de hacer vino y crea una armonía entre vinos de alta calidad para el gusto del mercado emergente sin olvidar la sustentabilidad del valle.",
      "img": "vena_cava.jpg"
    },
    {
      "lat": 32.039472,
      "type": 3,
      "address": "Valle de Guadalupe, Ensenada, Baja California",
      "lng": -116.653739,
      "name": "La Villa del Valle",
      "telephone": "01 646 156 8007",
      "web": "http://www.lavilladelvalle.com/",
      "desc": "Ubicado en la cima de una colina, es una pequeña pero lujosa posada, un santuario aislado que reside en el hermoso valle de Guadalupe. Votado en el año 2012 como el mejor hotel - restaurante por Travel + Leisure ",
      "img": "villa_del_valle.jpg"
    },
    {
      "lat": 32.102189,
      "type": 1,
      "address": "Ensenada-Tecate Km. 95.5 y 88.25. Carrertera Ensenada - Valle de Guadalupe , Baja California",
      "lng": -116.538166,
      "name": "Lafarga",
      "telephone": "01 646 178 7060",
      "web": "http://www.lafargavin.com.mx/",
      "desc": "Pequeña y entusiasta empresa familiar con un proyecto vinícola a mediano plazo, con pasos firmes se enfoca en la utilización y el desarrollo ordenado de sus valles. Considera que produce los mejores rojos de la ruta del vino de Ensenada.",
      "img": "lafarga.jpg"
    },
    {
      "lat": 32.084195,
      "type": 1,
      "address": "Ejido el Porvenir, Ensenada, Baja California",
      "lng": -116.632501,
      "name": "Cava Mazuelo",
      "telephone": "",
      "web": "https://www.facebook.com/CavaMazuelo",
      "desc": "Sólo cuenta con una marca, Luz de Noche, un vino de uva 100% Carignan, procedente de viñedos de temporal con mas de treinta años de edad. Obtuvieron la medalla de oro en el festival Vinalies Internacionales, en marzo del 2012, en Paris, Francia.",
      "img": "cava_mazuelo.jpg"
    },
    {
      "lat": 32.101481,
      "type": 1,
      "address": "Ejido el Porvenir, Ensenada, Baja California",
      "lng": -116.616883,
      "name": "Quinta Monasterio",
      "telephone": "01 686 565 1335",
      "web": "https://www.facebook.com/quintamonasterio",
      "desc": "Finca productora de vid desde 1963, libera sus primeros vinos al mercado en 2006. Cuenta con vinos premium elaborados con uvas Cabernet, Merlot y Tempranillo a la antigua usanza combinando alta tecnología enológica.",
      "img": "quinta_monasterio.jpg"
    },
    {
      "lat": 32.10492,
      "type": 1,
      "address": "Ruta del Vino, Salida a San José de la Zorra, Valle de Guadalupe, Baja California",
      "lng": -116.6341,
      "name": "Vinos Santa Úrsula",
      "telephone": "01 646 176 2659",
      "web": "http://www.vinosantaursula.com/",
      "desc": "Nacido hace más de una década, cuenta con un proceso cuidadoso que pretende resaltar siempre las características de la uva, sin abusar de la madera, le da una gran importancia al proceso natural que permite que resalte la peculiaridad de la tierra.",
      "img": "santa_ursula.jpg"
    },
    {
      "lat": 32.016982,
      "type": 1,
      "address": "Comunidad de San Marcos Fraccionamiento 13, San Antonio de las minas, Ensenada , Baja California, México",
      "lng": -116.663626,
      "name": "Hacienda La lomita",
      "telephone": "01 646 156 8459",
      "web": "http://www.haciendalalomita.com.mx/",
      "desc": "Vitivinícola con 10 hectáreas de vid en producción, con varietales Merlot, Shiraz, Tempranillo y Grenach. Su exigente vinicultura ha dado a luz a sus grandes vinos: Pagano y Sacro. Requiere previa cita.",
      "img": "la_lomita.jpg"
    },
    {
      "lat": 32.00219,
      "type": 1,
      "address": "Ensenada , Baja California, México",
      "lng": -116.670309,
      "name": "Alximia - Vino elemental",
      "telephone": "01 646 947 5256",
      "web": "http://alximia.com/",
      "desc": "Proyecto enológico nacido del encuentro de los sentidos y el mundo, pone especial atención a la tierra, la planta, los frutos y sus bondades. Alximia ofrece una propuesta que define a su vino como elemental, ya que nos remite al mundo de lo natural.",
      "img": "alximia.jpg"
    },
    {
      "lat": 32.026993,
      "type": 1,
      "address": "Km 12 + 800. Carretera Francisco Zarc - El tigre. Ensenada , Baja California, México",
      "lng": -116.672362,
      "name": "Viñas Pijoan",
      "telephone": "01 646 17 17179",
      "web": "http://www.vinospijoan.com/",
      "desc": "Vinícola familiar pequeña dedicada a elaborar vinos honestos e íntegros. Buscan epresar elegancia y corpulencia del terruño de los valles vitícolas de Baja California. Existe una cultura de respeto al medio ambiente y al trabajo.",
      "img": "pijoan.jpg"
    },
    {
      "lat": 31.981511,
      "type": 1,
      "address": "Carretera Tecate-Ensenada Kilometro 93, San Antonio de las Minas 22766   Ensenada, Baja California, México",
      "lng": -116.647905,
      "name": "Viña de Liceaga",
      "telephone": "01 646 155 3281",
      "web": "http://www.vinosliceaga.com/",
      "desc": "Con más de 20 años desde su fundación se encuentran orgullosos de producir vinos representativos de Baja California, comprometiéndose en hacer del vino un símbolo su cultura. Esperan que sus visitantes vivan una placentera experiencia en su vinícola.",
      "img": "vina_liceaga.jpg"
    },
    {
      "lat": 31.983056,
      "type": 1,
      "address": "m 92.5 Carretera Tecate-Ensenada San Antonio de Las Minas Ensenada, Baja California, México",
      "lng": -116.640679,
      "name": "Fratelli Pasini",
      "telephone": "01 646 174 4911",
      "web": "http://www.vinospasini.com/",
      "desc": "Proyecto libre e independiente, integrado por los hermanos Cabello-Pasini, pretenden hacer un vino joven, ligero, versátil fácil de tomar. Su viñedo se conforma por uva Tempranillo, Cabernet S., Nebbiolo, Grenache, Syrah y Sauvignon blanc.",
      "img": "fratelli_pasini.jpg"
    },
    {
      "lat": 31.96953,
      "type": 1,
      "address": "San Antonio de Las Minas Ensenada, Baja California, México",
      "lng": -116.666909,
      "name": "Rancho Velasco",
      "telephone": "01 646 156 8273",
      "web": "https://www.facebook.com/ranchovelascosanantonio",
      "desc": "Posee magníficas vistas de bosques de encinos, ofrece degustaciones y la visita en idioma inglés y francés. También podrá conseguir excelente aceite de Olivo y Mermeladas orgánicas. Requiere previa cita. ",
      "img": "rancho_velasco.jpg"
    },
    {
      "lat": 32.010949,
      "type": 1,
      "address": "Rancho Chivatillo Km. 89 + 100 Carretera #3 Tecate-Ensenada, San Antonio de las Minas, Baja California, México",
      "lng": -116.643882,
      "name": "Xecue",
      "telephone": "01 646 171 6588",
      "web": "https://www.facebook.com/pages/Vinos-Xecue/121290041286718",
      "desc": "Degustación de vinos de Mesa con previa cita. Tiene como misión el fomentar la producción y el consumo del buen vino Mexicano.",
      "img": "xecue.jpg"
    },
    {
      "lat": 31.978362,
      "type": 1,
      "address": "Carretera Tecate Ensenada Km 93.5 San Antonio de las Minas Ensenada, Baja California, México",
      "lng": -116.652307,
      "name": "Casa de Piedra",
      "telephone": "01 646 156 5267",
      "web": "http://www.vinoscasadepiedra.com/",
      "desc": "Nacido como proyecto familiar en 1997 su compromiso es trasladar los sabores y experiencias de la tierra donde viven, a través de los vinos que ofrecen. Su viñedo cuenta con un viñedo de Tempranillo y uno de Cabernet Sauvignon.",
      "img": "casa_piedra.jpg"
    }
  ]
}