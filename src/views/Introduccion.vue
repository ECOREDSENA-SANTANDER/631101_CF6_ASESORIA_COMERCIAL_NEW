<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
  
      p.mb-5 Existen estrategias de mercado que son fundamentales para que una empresa responda acertadamente a las necesidades de su cliente. En este componente formativo, tendrá la oportunidad de abordar los aspectos generales del #[em merchandising] y las herramientas principales que integran este conjunto de estrategias, como la exhibición de productos, demostración y presentación en el punto de ventas. Le invitamos a consultar el siguiente video que destaca la importancia de este conjunto de técnicas, que motivan y propician las ventas exitosas:
      
      figure
        .video
          iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/IeoRmDXbDYQ?si=FNCNzUpWo2mGHGni" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video: #[em Merchandising] demostración y presentación en el punto de ventas.
  
  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
