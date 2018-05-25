// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  title: "¿Qué es un Meme y cuales son sus características?",
  author: "João Gabriel Almeida",
  layout: "narrative",
  content: "\nEl término surge en el trabajo del biólogo Richard Dawkins llamado el Gene Egoísta, como un intento de plantear un “gene cultural”.  Llega a ser comparado a un virus. Sería la forma de transmitir la cultura de una comunidad humana. El meme tendría tres elementos centrales:\n\nAsí, fidelidad, fecundidad y longevidad son tres características para que un meme pueda repricarse replicarse con éxito: la fidelidad tiene que ver con que un meme siga siendo reconocible después de múltiples procesos de transmisión; la fecundidad con su potencialidad o capacidad de fuerza para ser transmitido y la longevidad con su perdurabilidad en el tiempo . (PINTO, 2015, p.  112)\n\nEl meme digital, por su vez, es la apropiación del término para describir imágenes, textos, videos, GIFs compartidos en redes con sentido humorístico.  Basado en los conceptos de Raul Trejo Delarbre, el investigador Luis Gabriel Arango Pinto va a dar los siguientes trazos a los memes en internet:\n\nExiste libertad del usuario para diseñar o compartir esos memes y dotarlos del sentido que quiera; heterogeneidad porque se trata de un cúmulo de datos de múltiples formas y significados aleteando y recorriendo los caminos de la red; velocidad por la rapidez con que son propagados(más tarda en terminar algún hecho importante que en aparecer un meme alusivo); volatilidad por los cambios constantes que van sufriendo y que van determinado la vida de un meme (hoy es, mañana quién sabe); multilateralidad por venir e ir hacia todas direcciones, ya que no hay un único foco de irradiación. (PINTO, 2015, p. 121)\n\nLa gran característica pensada por ese autor es la capacidad de resignificación que posee eso tipo de narrativas. Se elige como elemento narrativo central un trazo cultural compartido por una comunidad, y de ahí se mete sus impresiones singulares, los detalles que lo apropian y resignifican.\nHay que abolir la idea de viralidad. Ese es un concepto que no corresponde a la dinámica de los memes, pues implica una posición pasiva del sujeto. Sea un virus biológico, sea computacional, uno no elige tenerlo. Ya el meme implica una posición activa, sea para reeditarlo, sea para compartirlo. El meme siempre implica un nivel de identificación y pertenencia, si no no adquiere efectividad. Los memes en internet se volvieron una manera de relacionarse con el mundo y de interpretarlo. Es un formato que autoriza pensar que pensamiento sintético no significa pensamiento superficial, pues un meme efectivo implica a la vez una capacidad lingüística específica para el humor, una comprensión del contexto para que sea reconocible y la capacidad de regenerar lazos sociales. En Shifman, uno de los pioneros del estudio de los memes en internet, se anunciaba que estos serían propulsores de una nueva cultura de participación. Vivir y sentir en común son marcas de la vida social en el ciberespacio: solo hay meme en la interacción con el otro (CALIXTO, 2017, p. 79).\nPróxima Página\n",
  id: 0
});
index.addDoc({
  title: "¿Por qué es una herramienta educativa?",
  author: null,
  layout: "narrative",
  content: "\n Luis Gabriel Arango Pinto y  Douglas de Oliveira Calixto, las dos bibliografías más consistentes que encontramos para la relación entre memes y educación,  parecen ponerse de acuerdo que los memes viabilizan la posibilidad de un acercamiento a las nuevas competencias que el mundo digital exige. Luis Gabriel llega a hacer una tabla muy interesante de competencias adquiridas por el uso de meme en contexto escolar:\n\n\n  \n    \n      Habilidades Digitales\n      Habilidades Cognitivas\n      Conocimientos\n      Actitudes\n    \n  \n  \n    \n      Búsqueda y Selección de Información\n      Observación\n      De la realidad objetiva (contexto)\n      Crítica Social\n    \n    \n      Edición\n      Análisis\n      Noticioso\n      Curiosidad\n    \n    \n      Difusión en la Red\n      Síntesis\n      Ortográficas\n      Creatividad\n    \n  \n\n\nEl prejuicio de mucha gente en contra del Meme es por su “superficialidad”. Eso es falso. Un meme no es superficial, es sintético. Desde el punto de vista pedagógico, un meme simboliza el marco de nuevas aptitudes para la sociedad informatizada. Sin descartar el papel de la memorización, las tendencias en enseñanza apuntan que la capacidad de reconocer y seleccionar informaciones en medio a las nuevas “olas” de flujos noticiosos en redes se vuelve central para el desarrollo de pensamiento crítico. Por más raro que suene a las personas entrenadas en la escrita de grandes disertaciones como prueba de amplio conocimiento, la capacidad de escribir dos frases veiculadas a un imagen que produzca sentido pleno implica una compleja interrelación con la sociedad en que se vive para identificar los elementos mínimos de sentido capaz de producir reflexión, risa e identificación con su grupo social.\n\n\n  \n    \n      Página Anterior\n      Próxima Página\n    \n  \n\n",
  id: 1
});
index.addDoc({
  title: "¿Por qué utilizar como herramienta de paz?",
  author: null,
  layout: "narrative",
  content: "\n\nPor más que este proyecto esté directamente relacionado con el conflicto armado en Colombia y el intento de paz, este no es el espacio para discutir la historicidad o argumentos alrededor de eso por dos cuestiones centrales. Por más que el autor esté imbricado en la discusión, teniendo una participación activa en el proceso por sus compromisos laborales, no es un investigador colombiano, y como tal prefiere respetar el hecho de que hay una infinidad de autores responsables y de conocimiento innegable produciendo alrededor de esa temática. La segunda es que, por más contradictorio que sea, es un dato irrelevante para el análisis de la problemática.  Más allá de simpatías o rechazos a la FARC-EP, la cuestión de fondo es: todos y todas tienen el derecho de decir. La exclusión del escenario público de una voz disidente es sacar la condición de humanidad de esos personajes y favorece al riesgo de una única historia.\n\nLa apuesta de este proyecto es que,  en tiempos de guerra los medios y las redes se usaron para fomentarla a través de las narrativas y las opiniones de los guerreros así como los sectores contrarios a esa guerrilla siempre tuvieron los medios para expresar su opinión, crear recursos para que las narrativas , ahora hay  una  obligación para otra narrativa en claves para la Paz. La hipótesis es que cuando esas narrativas sean tan “ordinarias” que puedan ser apropiadas por las nuevas generaciones para crear las suyas es que se logró un cambio en el paradigma nacional. Esa es la idea en que se basa este proyecto.\n\nBasado en ese concepto, la propuesta es que los Memes, pensados como narrativas que generan identificación y pertenencia, pueden ser una manera de inserir y generar interlocución con las voces antes “prohíbidas”, haciendo que, desde un lenguaje no violento, espacio donde la centralidad de la mediación del educador se hace muy vigente, se pueda construir en la práctica un elemento central del pós acuerdo:\n\nQue ninguna voz sea tabú a punto que no se pueda apropriarse de ella para hacer un chiste o un Meme.\n\n\n  \n    \n      Página Anterior\n      Próxima Página\n    \n  \n\n",
  id: 2
});
index.addDoc({
  title: "Paso a Paso",
  author: null,
  layout: "narrative",
  content: "\n\n\n  Selecione un “tema generador”\n\n\nElija una narrativa ocultada por el proceso de la guerra. Puede ser texto, vídeo o incluso la invitación a un ex miembro de algún actor armado o una víctima del conflicto. Para efectos de ejemplo, dejo acá la antología de pensamiento de Jesus Santrich ofrecido en Creative Commons.\n\n\n  Debate alrededor del contenido\n\n\nHay que vincularlo a la realidad de los estudiantes. La manera depende del educador, del como está acostumbrado a manejar esos debates. Algunas sugerencias son el Design Thinking o una estructura de preguntas semi estructuradas. Lo central para el buen funcionamento de esa propuesta es saber enfrentar el lenguaje del señalamiento sin ofrecer al estudiante la impresión de que hay una “respuesta correcta”\n\n\n  Discusión del mundo digital\n\n\nConstruya de manera colectiva respuestas para las preguntas:\n\n\n  \n    ¿Qué cambió en la manera de comunicarse en los últimos años?\n  \n  \n    ¿Crees que estamos más o menos informados? ¿Por qué?\n  \n  \n    ¿Cómo crees que su manera de comunicarse puede beneficiar la Paz?\n  \n\n\nLo central acá es desarrollar un concepto común que sea capaz de vencer prejuicios y que los ponga confortable para entender un Meme como herramienta legítima.\n\n\n  Realización de los Memes\n\n\nAhora es hora del trabajo. Pueden utilizar cualquier generador de Meme que los permita elegir una imagen y pegar 1 o 2 frases.  Los recomendados acá son Meme Generator y Make a Meme. Este segundo es particularmente recomendado en espacios que no hayan computadores, pues puede ser facilmente utilizado y descargado desde los celulares.\n\n\n  Momento Me gusta\n\n\nUna vez hecho, haga un debate alrededor de la elección de imágenes, lo que quiso compartir con esa idea y pregunte a los demás si lo alcanzó. Una vez hecho eso, propongan colectivamente cambios y estimule a que posteen en Redes Sociales, sea personales o creadas a partir del proyecto. Una buena repercusión del Meme puede ser un enganche y un estímulo a los participantes.\n\nSi quieres más detalles alrededor de memes, mire Elementos de un Meme\n\nGracias.\n\nJoão Gabriel Almeida, 2018.\n\n\n  \n    \n      Página Anterior\n      Próxima Página\n    \n  \n\n",
  id: 3
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": "¿Qué es un Meme y cuales son sus características?",
  "author": "João Gabriel Almeida",
  "layout": "narrative",
  "link": "/porque",
}
,{
  "title": "¿Por qué es una herramienta educativa?",
  "author": null,
  "layout": "narrative",
  "link": "/porque",
}
,{
  "title": "¿Por qué utilizar como herramienta de paz?",
  "author": null,
  "layout": "narrative",
  "link": "/memepaz",
}
,{
  "title": "Paso a Paso",
  "author": null,
  "layout": "narrative",
  "link": "/pasoapaso",
}
]

//Query

var qd = {}; //Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="/'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
