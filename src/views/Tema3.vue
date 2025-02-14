<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-primario
        .titulo-principal__numero
          span 3
        h1 Demostraciones
  
      .row.justify-content-center.align-items-center(data-aos="zoom-in").mb-5
        .col-sm-12.col-md-12.col-lg-12
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-5
              br
              p En el proceso de ventas la demostración se define como presentar pruebas y hechos que afirmen lo que se dice de un producto. La demostración es uno de los momentos más importantes en los cuales el consumidor puede estar en contacto con el producto y, a su vez, se pueden fortalecer sus argumentos y finalizar con el cierre de venta.
              br
              br
              p Puede decirse que el momento de la demostración es el más importante y decisivo que tiene un vendedor para cerrar un proceso de venta.
              br
              br
  
      p.mb-5 Es fundamental tener en cuenta que, una buena demostración es un factor que permite reforzar los argumentos que llevan al cierre de la venta, por tanto, debe cumplir con dos propósitos principalmente, dirigirse a las necesidades del consumidor, y crear confianza, tal como se describe a continuación:
  
      .row.fondocontenedor3.align-items-center.justify-content-center.mb-5(data-aos="zoom-in")
        .row.mb-5.mt-5
        .row.justify-content-center.mb-5
          .col-lg-3.col-md-3.col-sm-12
            .titulo-principal.sinlinea.color-acento-contenido.mb-0
              .titulo-principal__numero
                span.text-white A
            p.mb-4 #[b Dirigirse a las necesidades específicas del consumidor]
            p El impulso o deseo de degustar, tocar, oler, sentir y ver, son aspectos que se unen para brindarle al consumidor una experiencia cercana con el producto. Darle la oportunidad al consumidor de que esté en contacto con el producto, lo lleva a integrar todos sus deseos, expectativas e ideales, y a través de la “prueba y ejemplo” puede tomar una mejor decisión de compra.
          .col-lg-4.col-md-10.col-sm-12
            img(src='@/assets/curso/temas/tema3/img2.png', alt='')
          .col-lg-3.col-md-3.col-sm-12
            .titulo-principal.sinlinea.color-acento-contenido.mb-0
              .titulo-principal__numero
                span.text-white B
            p.mb-4 #[b Crear confianza]
            p La demostración, le permitirá al comprador estar convencido de los beneficios que recibirá con la compra del producto. Es esencial que el comprador experimente los beneficios del producto antes de adquirirlo, para asegurar que lo compre con total confianza y quede plenamente satisfecho con su elección.
  
      p.mb-5 Ahora bien, aunque no hay una “regla de oro” para estructurar una demostración, sí es posible recomendar una serie de elementos que debe contener esta actividad para que sea exitosa:
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        .col-lg-8.col-md-12.col-sm-12
          LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Claridad de los beneficios y ventajas")
              .col-md-12.mb-4.mb-md-0
                p.mb-0 En primera instancia, es fundamental tener claridad sobre los beneficios y ventajas que ofrece el producto, considerando el tipo de cliente al que va dirigido. En algunos casos, puede ser complicado informar al cliente sobre las características del producto, por lo que resulta más efectivo realizar una demostración. Algunas preguntas clave antes de la demostración son:
                ul.lista-ul--color.fa-al.p-3
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 ¿Quién es el cliente?
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 ¿Por qué se interesa en el producto?
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 ¿Qué productos similares ofrece la competencia?
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-2 ¿Qué estrategia se empleará durante la demostración?        
            .row(numero="2" titulo="Diseño de estrategia")
              .col-md-12.mb-4.mb-md-0
                p En segundo lugar, es importante que, antes de la demostración, se diseñe una estrategia para mostrar el producto, por ejemplo, si se hablará del precio final, se entregará un descuento, se realizará un concurso o se hará mención de algunos beneficios destacando sus ventajas. Los atributos son las “características técnicas del producto”, así como sus cualidades principales.
            .row(numero="3" titulo="Lo que se espera de la demostración")
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Teniendo en cuenta lo anterior, es posible que la demostración arroje los siguientes resultados:
                ul.lista-ul--color.fa-al.p-3
                    li.mb-0 
                      i.fas.fa-check-circle
                      span Aumento en la motivación y deseo de obtener el producto.                   
                    li.mb-0 
                      i.fas.fa-check-circle
                      span Mayor retención de atención de los clientes, ayudando al cierre de la venta.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span Proveer al consumidor una  experiencia real de uso haciendo que el producto se venda por sí mismo.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span Disminución de objeciones al momento de comprar el producto por parte del cliente.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span Aumento de la confianza del cliente, hacia el producto y la empresa.
        .col-lg-4.col-md-12.col-sm-12
          img(src='@/assets/curso/temas/tema3/img3.png', alt='')
  
  
      p.mb-5.text-center De otro lado, una buena demostración requiere del siguiente proceso para que sean exitosas:
      h3.text-center.mb-5 Proceso de una demostración
  
      .row.mb-4(data-aos="zoom-in")
        SlyderF(columnas="col-lg-6 col-xl-4 col-md-6").mb-4
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema1/tar1-1.png' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Planifique su demostración con anticipación.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema1/tar1-2.png' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Muestre principalmente las ventajas que tiene el producto.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema1/tar1-3.png' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Comience primero por las características obvias.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema1/tar1-4.png' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Deje que el cliente tenga una experiencia directa con el producto.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema2/tar1-5.png' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Aproveche la demostración para ir comprometiendo al cliente progresivamente.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema2/tar1-6.png' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Utilice material audiovisual como videos, imágenes, animaciones, entre otros, para que cautive al cliente.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-6
                img(src='@/assets/curso/temas/tema2/tar1-7.png' alt='AvatarTop')
            .row.justify-content-center
              p.text-center Esté listo para el cierre de la venta del producto, tenga a mano opciones para el cliente.
  
      p.text-center.mb-5 Finalmente, existen tres tipos de demostraciones:
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        .col-lg-5.col-md-10.col-sm-12
          img(src='@/assets/curso/temas/tema3/img4.png', alt='')
        .col-lg-7.col-md-12.col-sm-12        
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-12.m-auto(titulo="Demostraciones uno a uno")
              .row.justify-content-center(data-aos="fade-right")
                .col-lg-5.col-sm-12.col-md-12
                  p Son demostraciones rápidas que el agente de ventas o representante realiza con una persona. Generalmente son detalladas, pues tiene la oportunidad de hablar de todas las características del producto.
                .col-lg-5.col-3.col-md-3
                  img(src='@/assets/curso/temas/tema3/ac1-1.png', alt='')
            .row.col-xl-12.m-auto(titulo="Demostraciones <i>express</i>")
              .row.justify-content-center(data-aos="fade-right")
                .col-lg-5.col-sm-12.col-md-12
                  p Una demostración #[em express] se enfoca principalmente en una solución o beneficio específico del producto. Se realiza en lugares públicos, con pocos invitados y se desarrolla una experiencia rápida y sencilla. Lo importante es mantener la atención del usuario.
                .col-lg-5.col-3.col-md-3
                  img(src='@/assets/curso/temas/tema3/ac1-2.png', alt='')
            .row.col-xl-12.m-auto(titulo="Demostraciones temáticas")
              .row.justify-content-center(data-aos="fade-right")
                .col-lg-5.col-sm-12.col-md-12
                  p Se organizan con grupos medianos o grandes que pueden pertenecer a un sector específico, por ejemplo, construcción, gastronómico, textil, etc. Aquí se enfoca en alguna funcionalidad del producto, de acuerdo con el sector invitado.
                .col-lg-5.col-3.col-md-3
                  img(src='@/assets/curso/temas/tema3/ac1-3.png', alt='')
  
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
