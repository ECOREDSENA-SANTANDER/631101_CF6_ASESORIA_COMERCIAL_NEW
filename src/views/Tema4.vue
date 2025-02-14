<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.borderectoabajo
      .titulo-principal.color-primario
        .titulo-principal__numero
          span 4
        h1 Presentaciones
  
      .row.justify-content-center.align-items-center(data-aos="zoom-in").mb-5
        .col-sm-12.col-md-12.col-lg-12
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-5
              br
              p Una presentación de ventas se puede definir como un guión o argumento que el equipo de ventas de una organización utiliza para ofrecer sus productos a los clientes. Esta presentación puede llevarse a cabo en persona, por teléfono, videollamada, videoconferencia, o cualquier otro medio disponible. No obstante, algunas empresas consideran que el contacto personal es de mayor importancia.
              br
              br
              p Una presentación en el proceso de ventas no se limita a una llamada o a un encuentro personal; forma parte de un conjunto de acciones diseñadas para cerrar la venta. Esta presentación puede incluir una conversación inicial, una reunión, una llamada o videollamada, el envío de una propuesta e incluso una demostración.
              br
  
      p.mb-5 Realizar una presentación requiere una inversión de tiempo tanto en su preparación como en su exposición o socialización. Esta puede incluir diapositivas digitales, videos u otros recursos que respalden el argumento del vendedor. Según la naturaleza de la presentación, pueden involucrarse varias personas del equipo de ventas, y el cliente puede estar representado por un equipo directivo u otros interesados en la adquisición del producto.
  
      .row
        .cajon.color-acento-contenido.p-4
          p El proceso de elaboración de una presentación puede generar un alto nivel de estrés, incluso para el vendedor más experimentado. Por ello, es fundamental seguir una serie de pasos concretos, planificados y bajo un control estricto.
  
  
    .container.tarjeta.tarjeta--morada(data-aos="zoom-in")
      .row.align-items-center
        .col-lg-4.col-md-5.col-8.align-items-center
          img.p-3(src="@/assets/curso/temas/tema4/img2.png")
        .col-lg-7.col-md-12.col-sm-12
          .row.align-items-center
            .col.mb-3.md-sm-0.align-items-center
              h5.text-white.mb-4.mt-5 Ejemplo de una presentación
              p.text-white Como ejemplo, se tomará la presentación que Apple realizó del iPhone 7. Apple siempre ha logrado que sus presentaciones generen altas expectativas, manteniendo una estética profesional, limpia y atractiva, que rara vez decepciona.
              p.text-white Para entender mejor lo que es una presentación efectiva, consulte el material complementario disponible.
              .row.mb-5.me-3
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/R-sLPTUEq6E?si=kl-clg9ubVZiuqdn" target="_blank")
                    span Ir al sitio
                    i.fas.fa-video
  
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.borderectoarriba
  
      p.mb-4 Las presentaciones pueden ser de muchos tipos: de negocios, para producto nuevo o de relanzamiento, marca personal o de producto, profesionales o académicas, entre otras. También pueden estar dirigidas a públicos o personas de interés, por ejemplo, en la propia empresa, a un público general, accionistas o inversores.
      p.mb-5 Además, las presentaciones son consideradas recursos gráficos que apoyan en la promoción o venta de un producto, y que presenta una estructura donde se va dando a conocer diferentes áreas o aspectos de un discurso profesional, académico o publicitario; de ahí la importancia de acertar en el tipo de presentación que se perfila. En este contexto, las presentaciones se pueden clasificar de la siguiente manera:
      h5.text-center.mb-4 Clasificación de presentaciones
  
      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in")
        .col-lg-4.col-md-8
          img(src='@/assets/curso/temas/tema4/img3.png', alt='')
        .col-lg-6.col-md-12.col-sm-12
          .tarjeta.tarjeta--azulclaro
            SlyderA(tipo="b").p-4
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/tema4/ico1-1.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Trabajo
                  p(data-aos="zoom-in-left") Suele tener un carácter más interno. El público son tus trabajadores o socios.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/tema4/ico1-2.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Breve o #[em pitch]
                  p(data-aos="zoom-in-left") Presenta un producto o marca en un tiempo récord. En ocasiones las presentaciones requieren ajustarse a unas normas, como suele suceder en las rondas de búsqueda de inversiones.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/tema4/ico1-3.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Línea
                  p(data-aos="zoom-in-left") Se caracteriza por estar en la web y se puede trasladar a cualquier lugar, puede estar almacenada en internet y ser enviada por correo electrónico.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/tema4/ico1-44.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Marca
                  p(data-aos="zoom-in-left") En este tipo de presentación se puede hablar del proceso de configuración, de los valores que se quieren transmitir en la marca.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/tema4/ico1-55.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Producto
                  p(data-aos="zoom-in-left") Presenta todo el proceso de desarrollo o de ciclo de vida del producto. La presentación de producto, puede ser la antesala a la demostración.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/tema4/ico1-66.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Inversionistas
                  p(data-aos="zoom-in-left") Se deben resolver los puntos más importantes para aquellos que deben financiar el producto, servicio o iniciativa. En el caso de las rondas de inversión, son fundamentales varias partes: quién pide el dinero, para qué y cómo se va a devolver.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/tema4/ico1-77.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Corporativa
                  p(data-aos="zoom-in-left") No existe un estilo único aunque sí es cierto que generalmente se piden modelos de presentación más serios y formales. Aquí se realiza una presentación de los valores organizacionales y elementos estratégicos de la empresa, tales como visión, misión, entre otros.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/tema4/ico1-88.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Plan de negocio
                  p(data-aos="zoom-in-left") Usualmente, las presentaciones de los planes de negocio tienen una estructura definida de acuerdo con los inversores o aquellos a quienes vayamos a presentar la idea de negocio deben resolver todas sus dudas. En algunas convocatorias o invitaciones determinan qué estructura de presentación se debe realizar.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/tema4/ico1-99.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Profesional
                  p(data-aos="zoom-in-left") Aquí se enmarcan aquellas que presentan un currículum u hoja de vida profesional, logros, títulos obtenidos, trabajos desarrollados, entre otros aspectos que ayudan a convencer a un empresario o empleador. Son creativas y diferentes de acuerdo con el tipo de profesión.
              .row.justify-content-center.align-items-center
                .col-lg-3.col-md-3.col-6
                  img(src='@/assets/curso/temas/tema4/ico1-10.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-md-0 
                  h5 Proyecto
                  p(data-aos="zoom-in-left") Similar que en la presentación de plan de negocio, tienen una estructura definida.
                  p(data-aos="zoom-in-left") Principalmente, presentan factores interesantes para los inversionistas.
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        .col-lg-10
          figcaption Nota. Contenido adaptado de Pipe Drive. (s.f.)
  
      p.mb-5 Más que el contenido, lo importante en una presentación, son aquellos elementos intangibles que juegan un papel importante durante el desarrollo. El lenguaje corporal, el tono de voz, la actitud, incluso, los movimientos, pueden ser determinantes para que el cliente pueda tomar la decisión de compra y cerrar el negocio. Algunos aspectos importantes por considerar para un buen desarrollo de una presentación se presentan en el siguiente video.
  
      .row.mb-5
        figure
          .video
            iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/kVSt0II8ABE?si=AtWmo4ODjU_iSPnK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: Algunos #[em tips] importantes para un buen desarrollo de una presentación.
  
      p.text-center.mb-5 Así mismo, en cuanto al lenguaje corporal, se recomienda lo siguiente:
      .row.mb-5.mt-5
      
      .row.mt-5(data-aos="zoom-in")
        .col-lg-11.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/tema4/img4.png", alt="alt").img250
          .crd.crd--avatarHorizontal.crd--first.py-1
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema4/1.png", alt="alt").img80
              .col
                p Si la presentación es en línea, o a través de videoconferencia, los gestos, la sonrisa y la forma de mirar son elementos fundamentales para convencer.
          .crd.crd--avatarHorizontal.crd--2.py-1
            .row.align-items-center
              .col-auto
                  img(src="@/assets/curso/temas/tema4/2.png", alt="alt").img80
              .col
                p Un buen uso del lenguaje corporal muestra confianza y seguridad el momento de realizar la presentación.
          .crd.crd--avatarHorizontal.crd--3.py-1
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema4/3.png", alt="alt").img80
              .col
                p.mb-0 El objetivo es transmitir calma, confianza y seguridad para el cierre del trato, por tanto, el contacto visual
                p demuestra que el presentador está interesado en los prospectos y en lo que ellos dicen. 
          .crd.crd--avatarHorizontal.crd--4.py-1
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema4/4.png", alt="alt").img80
              .col
                p Si la presentación es “en persona”, sea en auditorio o sala de conferencia, es importante un buen uso del espacio. Si tiene un micrófono inalámbrico, se puede desplazar o caminar por el escenario.
          .crd.crd--avatarHorizontal.crd--5.py-1
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema4/5.png", alt="alt").img80
              .col
                p Una buena postura también demuestra confianza. En el caso de la presentación en línea o por videoconferencia, está el modo de sentarse o ver a la cámara.
          .crd.crd--avatarHorizontal.crd--last.py-1
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema4/6.png", alt="alt").img80
              .col
                p Si la presentación es presencial, se sugiere ofrecer un apretón de manos firme y decidido, pues genera una buena primera impresión.
  
    .container.tarjeta.tarjeta--morada(data-aos="zoom-in")
      .row.align-items-center
        .col-lg-4.col-md-5.col-8.align-items-center
          img.p-3(src="@/assets/curso/temas/tema4/img2.png")
        .col-lg-7.col-md-12.col-sm-12
          .row.align-items-center
            .col.mb-3.md-sm-0.align-items-center
              h5.text-white.mb-4.mt-5 Desarrollo de una presentación
              p.text-white Para profundizar el tema se invita a consultar el video: “Hablando con Julis”.
              .row.mb-5.me-3
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/0SjVNTAVdgs" target="_blank")
                    span Ir al sitio
                    i.fas.fa-video
  
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.borderectoarriba
  
      p.mb-5 Finalmente, existen diferentes herramientas y plataformas digitales para el diseño de presentaciones y que se pueden usar como apoyo al momento de presentar el producto ante el cliente. Algunas de las herramientas son:
  
      .row(data-aos="zoom-in")
        SlyderF(columnas="col-lg-6 col-xl-4 col-md-6")
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema4/tar1-1.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Knovio
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema4/tar1-2.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") PowToon
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema4/tar1-3.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Prezi
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema4/tar1-4.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Emaze
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema4/tar1-5.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Hakiu Deck
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema4/tar1-6.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Slidebean
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema4/tar1-7.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Canva
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema4/tar1-8.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Google Slides
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema4/tar1-9.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Visme
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema4/tar1-10.png' alt='AvatarTop')
            .row.justify-content-center
              .col-9
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Swipe
  
    .container.tarjeta.tarjeta--morada(data-aos="zoom-in")
      .row.align-items-center
        .col-lg-4.col-md-5.col-8.align-items-center
          img.p-3(src="@/assets/curso/temas/tema4/img5.png")
        .col-lg-7.col-md-12.col-sm-12
          .row.align-items-center
            .col.mb-3.md-sm-0.align-items-center
              h5.text-white.mb-4.mt-5 Medios de apoyo
              p.text-white En el artículo #[b “Los mejores programas para hacer presentaciones como un profesional”], escrito por Universia, y que se encuentra en el material complementario, se exponen las diez herramientas más utilizadas para el desarrollo de presentaciones dinámicas y visualmente agradables.
              .row.mb-5.me-3
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.universia.net/co/actualidad/orientacion-academica/mejores-programas-hacer-presentaciones-como-profesional-1098969.html" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
  
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.borderectoarriba
  
  
  </template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
