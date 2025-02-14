<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-primario
        .titulo-principal__numero
          span 2
        h1 Exhibición
  
      .row.justify-content-center.align-items-center(data-aos="zoom-in").mb-5
        .col-sm-12.col-md-12.col-lg-12
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-5
              br
              p Las actividades que permiten mostrar los productos en el punto de venta y colocarlos al alcance del cliente para su compra se denominan exhibición. Esta se concibe como la clasificación, selección, colocación y presentación de los productos en el lugar de venta, con el objetivo de atraer la atención tanto del comprador actual como del potencial.
              br
              br
              p La exhibición del producto, en el punto de venta, se realiza con el uso de muebles o elementos especiales que lo ponen al alcance de los clientes.
              br
              br
  
      p.mb-5.text-center Entre los propósitos de la exhibición, se tienen:
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        .col-lg-4.col-sm-12.col-md-10
          img(src='@/assets/curso/temas/tema2/img2.png', alt='')
        .col-lg-6.col-sm-12.col-md-12
          ol.lista-ol--cuadro.lista-ol--separador.fa-ol
            li
              .lista-ol--cuadro__vineta
                span 1
              span.mb-0 Aumentar la atención de los clientes sobre los productos.
            li
              .lista-ol--cuadro__vineta
                span 2
              span.mb-0 Aumentar la fidelidad del cliente hacia el punto de venta.
            li
              .lista-ol--cuadro__vineta
                span 3
              span.mb-0 Ofrecer el producto con creatividad.
            li
              .lista-ol--cuadro__vineta
                span 4
              span.mb-0 Brindar comodidad al cliente para adquirir el producto.
            li
              .lista-ol--cuadro__vineta
                span 5
              span.mb-0 Apoyar las actividades promocionales en el punto de venta.
            li
              .lista-ol--cuadro__vineta
                span 6
              span.mb-0 Generar recordación en el consumidor acerca del producto que necesita.
            li
              .lista-ol--cuadro__vineta
                span 7
              span.mb-0 Motivar la compra “impulsiva” del producto (compra irracional). 
  
      .row
        .cajon.color-acento-contenido.p-4.mb-4
          p El espacio en el punto de venta juega un papel importante en la exhibición del producto, que puede organizarse de acuerdo con la disposición que se tenga en el lugar. El administrador, como responsable del sitio y de la exhibición, deberá organizarlo según las secciones, espacios de circulación, ubicación de zonas y puntos de venta fríos o calientes, ubicación de elementos externos al establecimiento y áreas complementarias.
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        .col-lg-10.col-md-12.col-sm-12
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 4. 
              | Zonas frías y calientes según los accesos y la circulación
            img(src='@/assets/curso/temas/tema2/fig1.png', alt='La imagen presenta tres ejemplos de zonas frías y calientes distribuidas en punto de venta según los accesos y la circulación. De izquierda a derecha se presentan: zona con un punto de acceso, zona con dos puntos de acceso y zona con cuello de botella.')
            figcaption Nota. Tomada de Seggiaro (2017)
  
      p.mb-4 Este análisis debe realizarse de acuerdo con el espacio en el punto de venta, y definir los tipos de exhibición que se pueden aplicar. Los consumidores realizan gran parte de las decisiones de compra directamente en el piso de ventas, por lo que, una exhibición efectiva de los productos puede influir en varias de ellas.
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        TabsC.color-acento-botones
          .py-3.py-md-4(titulo="Exhibición vertical").mb-0
            .row.justify-content-center
              .col-md-4
                img(src='@/assets/curso/temas/tema2/tab1-1.png', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4.mt-4 Exhibición vertical
                p En las exhibiciones verticales se organiza un mismo producto de arriba hacia abajo. Donde la exhibición de colores se recomienda hacerla de claro a oscuro y de izquierda a derecha.
          .py-3.py-md-4(titulo="Exhibición horizontal").mb-0
            .row.justify-content-center
              .col-md-4
                img(src='@/assets/curso/temas/tema2/tab1-2.png', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4.mt-4 Exhibición horizontal
                p El producto se dispone de izquierda a derecha en los distintos niveles de visibilidad: nivel de la cabeza, nivel de los ojos, nivel de las manos y nivel del suelo.
          .py-3.py-md-4(titulo="Exhibición bloque").mb-0
            .row.justify-content-center
              .col-md-4
                img(src='@/assets/curso/temas/tema2/tab1-3.png', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4.mt-4 Exhibición bloque
                p La marca se agrupa en una estantería ocupando dos o tres peldaños o entrepaños.
          .py-3.py-md-4(titulo="Exhibición mixta").mb-0
            .row.justify-content-center
              .col-md-4
                img(src='@/assets/curso/temas/tema2/tab1-3.png', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4.mt-4 Exhibición mixta
                p Puede decirse que es una combinación de la exhibición vertical y la horizontal. Se utiliza para llamar la atención de los consumidores de una forma más efectiva.
            
      p De acuerdo con la estrategia del comercio, pueden emplearse otras formas de exhibición, haciendo una combinación de las anteriores, o bien organizando los productos de una forma creativa, que pueda resultar asertiva al generar ventas.
      p.mb-4 Otro factor importante al momento de exhibir el producto es el uso de las vitrinas, aquí se muestra el producto en diferentes ángulos y, a pesar de que el consumidor no pueda acceder al producto, igualmente se siente atraído por este. Las vitrinas pueden clasificarse de la siguiente forma:
  
      .row.mb-4(data-aos="zoom-in")
        SlyderF(columnas="col-lg-6 col-xl-4 col-md-6").mb-4
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema1/tar1-1.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Vitrinas de prestigio
            .row.justify-content-center
              p.text-center Son aquellas donde la belleza de sus artículos expuestos supone un impacto visual que, ante todo, vende el prestigio del establecimiento. 
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema1/tar1-2.png' alt='AvatarTop')
            .row.justify-content-center
              .col-10
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Vitrinas de temporada
            .row.justify-content-center
              p.text-center Se exponen al comienzo de una temporada, informando de nuevos productos y tendencias del mercado. 
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema1/tar1-3.png' alt='AvatarTop')
            .row.justify-content-center
              .col-10
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Vitrinas promocionales
            .row.justify-content-center
              p.text-center Exponen productos promocionados o de oferta, identificando una clara oportunidad de compra.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema1/tar1-4.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Vitrinas comerciales
            .row.justify-content-center
              p.text-center Presentan los productos que conforman el surtido del establecimiento con un claro directo mensaje de venta.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema2/tar1-5.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Vitrinas de precios
            .row.justify-content-center
              p.text-center Son aquellas que, ante todo, destacan el precio del producto, siendo este el principal motivo de compra.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema2/tar1-6.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Vitrinas informativas
            .row.justify-content-center
              p.text-center Su misión consiste en dar a conocer nuevos o desconocidos productos o servicios que supongan un cambio o un avance en la concepción de los mismos.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema2/tar1-7.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Vitrinas estacionales
            .row.justify-content-center
              p.text-center Contienen productos sometidos a una fuerte estacionalidad en función de la época del año y motivados por la moda.
  
      p.text-center.mb-5 En el uso estratégico de las vitrinas, se destacan los siguientes aspectos:
  
      .row.justify-content-center.align-items-center
        .col-lg-12(data-aos="fade-left")
          ImagenInfografica.color-acento-contenido
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img3.png', alt='La imagen presenta una ilustración isométrica de un supermercado. En la escena se identifican diversas áreas y actividades relacionadas con la venta de productos y se percibe claramente el concepto de merchandising, exhibición y la disposición estratégica de los productos dentro de un punto de venta, buscando maximizar la visibilidad y accesibilidad de los productos para los clientes. Se presentan puntos calientes con información de los aspectos que destacan en el uso estratégico de las vitrinas, así: la mercancía, los colores, la naturalidad, la creatividad, la psicología, la composición, y los olores.')
            .tarjeta.bgmoradoclaro(x="85%" y="48%" numero="+")
              p.p-3 #[b La luz:] el conocimiento técnico del manejo de la luz al montar una vitrina es muy importante por los efectos negativos o positivos que pueda causar en la presentación de los productos.
            .tarjeta.bgmoradoclaro(x="34%" y="4%" numero="+")
              p.p-3 #[b Los colores:] son elementos visuales que provocan reacciones en el consumidor para atraer la atención hacia el producto. La aplicación adecuada del color en cuanto a su significado psicológico, genera reacciones que pueden motivar la compra del producto.
            .tarjeta.bgmoradoclaro(x="34%" y="48%" numero="+")
              p.p-3 #[b Los olores:] provocan diferentes reacciones, sensaciones y evocaciones que ejercen una influencia sobre el ánimo y los sentidos del consumidor.
            .tarjeta.bgmoradoclaro(x="64%" y="48%" numero="+")
              p.p-3 #[b La psicología:] busca llamar la atención, despertar el interés, incitar el deseo, hacer entrar al cliente.
            .tarjeta.bgmoradoclaro(x="44%" y="24%" numero="+")
              p.p-3 #[b La composición:] es el arte de ordenar los volúmenes en un espacio, con armonía y gusto, guardando el orden y el sentido de la unidad.
            .tarjeta.bgmoradoclaro(x="11%" y="18%" numero="+")
              p.p-3 #[b La creatividad:] acorde con el momento, las costumbres, estilos de vida de los consumidores a persuadir, impresionar y satisfacer.
            .tarjeta.bgmoradoclaro(x="35%" y="86%" numero="+")
              p.p-3 #[b La mercancía:] es el protagonista de la vitrina, debe estar perfectamente expuesta, con el contraste de color acertado y con las proyecciones luminosas acertadas.
            .tarjeta.bgmoradoclaro(x="55%" y="86%" numero="+")
              p.p-3 #[b La línea:] conduce la mirada por toda la exposición de la vitrina.
            .tarjeta.bgmoradoclaro(x="5%" y="66%" numero="+")
              p.p-3 #[b La naturalidad:] la presentación física debe ser lo más natural para que se perciba el mensaje que se quiere transmitir.
  
      separador
      #t_2_1.titulo-segundo.mb-4
        h2 2.1 Material P.O.P.
  
      .row.justify-content-center.align-items-center(data-aos="zoom-in").mb-5
        .col-sm-12.col-md-12.col-lg-12
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img4.png')})`}"
            )
            .bloque-texto-g__texto.p-5
              br
              p El material P.O.P. es básicamente, cualquier objeto o cosa que tenga un logo o emblema que represente una marca, empresa u organización, que requiera que un público determinado la conozca. P.O.P. es una sigla en inglés que significa #[em Point Of Purchase] es decir “Punto de Compra”.
              br
              br
              p De este significado se deduce que el material P.O.P. es simplemente aquello que, de manera indirecta, impulsa el reconocimiento de una marca o producto entre los consumidores.
              br
              br
  
      p.mb-5 Este concepto ha estado enmarcado entre diferentes opiniones y aportes de profesionales del #[em marketing]. Entre las diferentes definiciones y acuerdos que se han escrito, se toman como referencia algunos de ellos para describir esta importante estrategia de mercadeo:
      h4.mb-5.text-center #[b Definiciones de P.O.P.]
  
      .row.justify-content-center.align-items-center.mb-0.mt-4(data-aos="zoom-in")
        .col-lg-6.col-sm-12.col-md-12.mb-5.mb-lg-0
          .row
            .bloque-texto-f.px-5
              .bloque-texto-f__comillas.nuevo2
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto.mx-3 POPAI y Graphispack Asociación la definen como una “técnica del #[em marketing] (…) cuyo objetivo es llamar la atención sobre los detalles o características del producto (…) que otorgan un valor añadido al mismo sobre el resto de productos promocionados en el sitio en el que se puede comprar”.
          .row.x.px-5
            .bloque-texto-f.nuevo.color-primario.pt-4.px-5.mb-5
              .bloque-texto-f__comillas.nuevo.bgazulclaro
                i.fas.fa-quote-right
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto.autor1.mb-5.text-center - (Robles, 2009, p. 92)
        .col-lg-6.col-sm-12.col-md-12.mb-5.mb-lg-0
          .row
            .bloque-texto-f.px-5.mt-0
              .bloque-texto-f__comillas.nuevo2
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto.mx-3 Una buena disposición del producto en el punto de venta hace que la presentación del producto adquiera un “rol activo”, y sea más atractivo mediante “su colocación en el punto de venta, el fraccionamiento del producto, el envase y presentación y la exhibición del producto”.
          .row.x.px-5.mt-0
            .bloque-texto-f.color-primario.pt-4.px-5.mb-5
              .bloque-texto-f__comillas.nuevo.bgazulclaro
                i.fas.fa-quote-right
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto.autor2.mb-5.text-center - (Kotler, Bower y Makens, 2008)
  
      .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in")
        .col-lg-10.col-sm-12.col-md-12
          .bloque-texto-f.color-primario.pt-4.px-5.mb-5
            .bloque-texto-f__comillas
              i.fas.fa-quote-left
              i.fas.fa-quote-right
            h4.text-regular.bloque-texto-f__texto.mx-3 A pesar de ser en el punto de venta donde el consumidor toma la mayor parte de decisiones de compra, la publicidad en el punto de venta, continúa siendo la gran desconocida, aunque la venta impersonal, las grandes superficies comerciales y la alta competencia por la gran variedad de productos, han proliferado el uso de la misma”. El #[em marketing] en el punto de venta (#[em marketing at retail]) enmarca un conjunto de técnicas que le ayudan el comerciante a atraer público en el mismo lugar donde se realiza la compra.
            .bloque-texto-f__autor.mb-3
              h3.mb-0 - Mahave (2003, p. 10)
  
  
      p.mb-4 La publicidad en el punto de venta continúa generando un vínculo entre el consumidor y la marca a través de una adecuada promoción de sus productos; y esta se divide en las siguientes clases:
  
      .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-12.col-md-12.col-sm-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Relacionado con el tiempo")
              .row.justify-content-center(data-aos="fade-right")
                .col-lg-2.col-2.col-md-2
                  img(src='@/assets/curso/temas/tema2/ico1-1.png', alt='')
                .col-lg-10.col-sm-12.col-md-12
                  ul.lista-ul--color.fa-al.p-3
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 #[b Puntual:] son aquellas que se realizan con el objeto de dar a conocer una promoción u oferta que tiene una duración determinada –menos de cuatro semanas– y que se realiza como algo extraordinario, es decir, que no entra dentro de la dinámica habitual del producto o servicio.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 #[b Estacional:] es aquella que se realiza para un periodo determinado generalmente caracterizado por unos altos índices de consumo de ese producto o servicio. Por ejemplo los juguetes en navidad o las cremas solares en verano. Suelen tener una duración de entre tres y cuatro meses.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 #[b Fija:] es aquella que está fija en un punto de venta y que por lo tanto está fabricada con materiales menos flexibles, de mayor calidad y que mantienen sus cualidades pasado un tiempo prolongado.
            .row.col-xl-11.m-auto(titulo="De acuerdo con los materiales")
              .row.justify-content-center(data-aos="fade-right")
                .col-lg-2.col-2.col-md-2
                  img(src='@/assets/curso/temas/tema2/ico1-2.png', alt='')
                .col-lg-10.col-sm-12.col-md-12
                  ul.lista-ul--color.fa-al.p-3
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 #[b Fijos:] son aquellos materiales que pueden soportar un largo periodo de tiempo en el punto de venta sin perder calidad. Suelen ser madera, metal y plástico. Se utilizan para acciones de más de tres meses.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 #[b Temporales:] son materiales que se utilizan para acciones de pequeña duración o de escasa escala. Son retirados cuando se acaba el producto o las semanas marcadas por la agencia.
            .row.col-xl-11.m-auto(titulo="Relacionado con su objetivo")
              .row.justify-content-center(data-aos="fade-right")
                .col-lg-2.col-2.col-md-2
                  img(src='@/assets/curso/temas/tema2/ico1-3.png', alt='')
                .col-lg-10.col-md-12.col-sm-12
                  ul.lista-ul--color.fa-al.p-3
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 #[b De marca:] el objetivo es generar recuerdo de marca o asociar un determinado producto a una firma. Para ello la PLV debe guardar una coherencia con la imagen de marca para generar corporatividad y asociación.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 #[b De producto o servicio:] su finalidad es promocionar un producto para diferenciarlo de la competencia o simplemente recordar la existencia del mismo.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 #[b Promoción:] destacar una oferta extraordinaria que aporta un valor distintivo y adicional al consumidor.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 #[b Lanzamiento:] su fin es promocionar un nuevo producto presentándolo al público y llamando la atención sobre el mismo para que se tenga conocimiento de su salida al mercado.
  
      p.mb-4 De igual forma, la publicidad en el punto de venta puede clasificarse en tres categorías: según el tiempo de permanencia en el punto de venta, según los materiales y según el objetivo de comunicación. Algunos de los que se pueden encontrar son:
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.col-sm-12.col-md-10       
          .row(data-aos="zoom-in")
            .tarjeta.tarjeta--moradaclara.p-4
              LineaTiempoC.color-acento-contenido(text-small)
                .row(titulo="Expositores semipermanentes").justify-content-center
                  .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
                    h4.mb-4 Expositores semipermanentes
                    p.mb-4 Los expositores semipermanentes son pantallas que se ubican en un centro comercial, gran almacén o supermercado. Las pantallas suelen estar en este espacio entre tres meses o hasta un año y pueden ser parte de una campaña de lanzamiento o relanzamiento de un producto. También son conocidas como pantallas secundarias.
                  .col-lg-4.col-md-8.col-8.b-4.mb-md-0
                    img(src='@/assets/curso/temas/tema2/lt1-1.png', alt='')
                .row(titulo="Expositores permanentes").justify-content-center
                  .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
                    h4.mb-4 Expositores permanentes
                    p.mb-4 Se refiere a expositores electrónicos o análogos que se ubican de forma permanente en un centro comercial, punto de venta o supermercado; también pueden encontrarse en paraderos de buses muy cercanos supermercados.
                    p.mb-4 Usualmente son utilizados por grandes marcas que pueden cubrir los costos de mantenimiento.
                  .col-lg-4.col-md-8.col-8.mb-4.mb-md-0
                    img(src='@/assets/curso/temas/tema2/lt1-2.png', alt='')
                .row(titulo="<i>Display</i> o glorificador").justify-content-center
                  .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
                    h4.mb-4 #[em Display] o glorificador
                    p.mb-2 Este es uno de los elementos más comunes y exitosos de la publicidad en el punto de venta. Sus diseños son muy variados, se pueden presentar en diferentes formatos y materiales, aunque el más común es el cartón.
                  .col-lg-4.col-md-8.col-8.mb-4.mb-md-0
                    img(src='@/assets/curso/temas/tema2/lt1-3.png', alt='')
                .row(titulo="Exhibidores de piso").justify-content-center
                  .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
                    h4.mb-4 Exhibidores de piso
                    p.mb-4 Son una especie de estanterías en cartón o algún material fuerte, que permite exhibir el producto de forma llamativa y de fácil alcance para el usuario y brindando un valor agregado a la marca. 
                    p.mb-4 El exhibidor de piso se utiliza, preferiblemente, para el lanzamiento o promoción de un producto teniendo como resultado un mayor impacto y aumento en las ventas.
                  .col-lg-4.col-md-8.col-8.mb-4.mb-md-0
                    img(src='@/assets/curso/temas/tema2/lt1-4.png', alt='')
                .row(titulo="Rejillas").justify-content-center
                  .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
                    h4.mb-4 Rejillas
                    p.mb-4 Las rejillas son usadas en el punto de venta en las esquinas o terminaciones de las estanterías, justo para “interrumpir” el tráfico visual de los consumidores. 
                    p.mb-4 También pueden aparecer al lado de las cajas registradores, justo antes de pagar por los productos que se llevan los consumidores. Son de larga duración y su éxito puede depender de la rotación del producto o los cambios en el surtido.
                  .col-lg-4.col-md-8.col-8.mb-4.mb-md-0
                    img(src='@/assets/curso/temas/tema2/lt1-5.png', alt='')
                .row(titulo="<i>Floor graphics</i>").justify-content-center
                  .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
                    h4.mb-4 #[em Floor graphics]
                    p.mb-2 Son una especie de calcomanía o papel adhesivo, con diseño atractivo y son impresos para aplicación en pisos. Llevan mensajes alusivos a la marca o producto que promocionan y, en algunos casos, señalan el entorno para guiar al usuario hacia alguna promoción. 
                  .col-lg-4.col-md-8.col-8.mb-4.mb-md-0
                    img(src='@/assets/curso/temas/tema2/lt1-6.png', alt='')
                .row(titulo="Puntas de góndola").justify-content-center
                  .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
                    h4.mb-4 Puntas de góndola
                    p.mb-2 Las Puntas de Góndola (PDG) son elementos que contienen los productos a exhibir pero con visibilidades que aumentan la comunicación visual, con accesorios como son cabezotes, laterales, frontales, cenefas y partes móviles. Su desempeño es aumentar la visibilidad y posicionar la marca en el Punto de Venta (PDV), por lo tanto, son bastantes útiles y precisas para darle un toque más personal y sutil a distintos tipos de exhibiciones, con medios impresos diseñados especialmente para puntos de ventas, supermercados y contextos comerciales. 
                  .col-lg-4.col-md-8.col-8.mb-4.mb-md-0
                    img(src='@/assets/curso/temas/tema2/lt1-7.png', alt='')
                .row(titulo="Rompetráficos").justify-content-center
                  .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
                    h4.mb-4 Rompetráficos
                    p.mb-2 Los rompetráficos publicitarios son elementos diseñados en cartón o plástico que se ponen principalmente en las estanterías de productos, son pequeños pero muy llamativos. Pueden encontrarse en pequeños comercios, así como en grandes superficies. 
                  .col-lg-4.col-md-8.col-8.mb-4.mb-md-0
                    img(src='@/assets/curso/temas/tema2/lt1-8.png', alt='')
                .row(titulo="Tecnología digital y otros").justify-content-center
                  .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
                    h4 Tecnología digital y otros
                    p.mb-4 Actualmente, con el auge de la tecnología digital, hay un mayor uso de pantallas táctiles, proyecciones de video, códigos QR, incluso hay pantallas dinámicas en las que se puede realizar la compra directa del producto a través de los canales digitales, pero en el punto de venta. Este último, conlleva un acompañamiento o soporte técnico en caso de que haya algún inconveniente.
                    p.mb-2 Otros soportes o piezas publicitarias para el punto de venta son:
                    ul.lista-ul--color.fa-al.p-3
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-2 Los carteles “clásicos” de interior o exterior.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-2 Pantallas digitales (pasillos de centros comerciales, puntos de venta de video lineales, pantallas de efectivo, etc).
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-2 Delimitadores.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-2 Expositores de mostrador y de suelo.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-2 Vinilos.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-2 Folletos.
                  .col-lg-4.col-md-8.col-8.mb-4.mb-md-0
                    img(src='@/assets/curso/temas/tema2/lt1-9.png', alt='')
  
      p Como se mencionó anteriormente, la publicidad en el punto de venta (P.O.P.) se usa para promover la venta del producto hacia el consumidor (#[em marketing] de empuje), brindar información complementaria y generar un canal de comunicación. Su presencia puede ser decisiva en el proceso de compra.
      p.mb-5 Para que el material P.O.P. cumpla con los objetivos de la marca, se presentan las siguientes recomendaciones:
  
      .row.justify-content-center.align-items-center
        .col-sm-12.col-md-12.col-lg-10(data-aos="zoom-in")
          h4 Recomendaciones para el uso del P.O.P.
          LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoC")
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12(data-aos="zoom-in")
          .tarjeta.color-acento-contenido.p-3
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/tema1/alerta.png").ps-3
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0.text-white Finalmente, las acciones de #[em marketing] en el punto de venta deben centrarse en generar un estímulo en el consumidor, entendiendo el estímulo como “agente físico, químico, mecánico, etc., que desencadena una reacción funcional en un organismo” (RAE, 2020). Por esta razón, la publicidad en el punto de venta se debe encargar especialmente de estimular los sentidos de los consumidores.
  
  
  </template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosLineaTiempoC: [
      {
        titulo: 'Análisis de la competencia',
        texto:
          'Realizar un análisis de la competencia siempre será una buena opción para generar ideas innovadoras.',
        icono: require('@/assets/curso/temas/tema2/ps1-1.png'),
      },
      {
        titulo: '<i>Benchmarking</i>',
        texto:
          'Con el mercado en constante evolución, es importante estar siempre un paso adelante. Por eso, hay que pensar en estrategias a corto y a largo plazo.',
        icono: require('@/assets/curso/temas/tema2/ps1-2.png'),
      },
      {
        titulo: 'Conocimiento del producto',
        texto:
          'Tener claro cuál es la categoría que se está manejando para no afectar la proyección de la imagen.',
        icono: require('@/assets/curso/temas/tema2/ps1-3.png'),
      },
      {
        titulo: 'Beneficios del producto',
        texto:
          'Los mensajes en la publicidad en el punto de venta, deben enviar un mensaje al consumidor con los beneficios del producto, modo de uso, fecha de vencimiento, etc, para brindar una mayor confianza en la compra.',
        icono: require('@/assets/curso/temas/tema2/ps1-4.png'),
      },
      {
        titulo: 'Buen diseño',
        texto:
          'Es muy importante enfocar el desarrollo de la estrategia P.O.P. en la línea de diseño, así el cliente podrá reconocer la marca de manera fácil pues le es atractiva.',
        icono: require('@/assets/curso/temas/tema2/ps1-5.png'),
      },
      {
        titulo: 'Destacado',
        texto: 'Procurar que la publicidad en el punto de venta se destaque.',
        icono: require('@/assets/curso/temas/tema2/ps1-6.png'),
      },
      {
        titulo: 'No saturar',
        texto:
          'Si bien, es una publicidad muy importante para cada producto, se recomienda no saturar demasiado el punto de venta.',
        icono: require('@/assets/curso/temas/tema2/ps1-7.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
