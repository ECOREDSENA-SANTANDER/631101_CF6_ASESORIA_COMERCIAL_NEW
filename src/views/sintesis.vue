<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p.mb-5 A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo #[em Merchandising], demostración y presentación en el punto de venta. Este material de formación aborda el análisis del #[em merchandising] como una técnica de marketing aplicada a fabricantes y distribuidores, detallando sus cuatro clases (nacimiento, ataque, mantenimiento y defensa) y sus dos tipos (visual y de gestión). Se destaca la importancia de la exhibición de productos para facilitar su alcance al cliente, así como las demostraciones que validan las afirmaciones sobre los productos. Finalmente, se describen las presentaciones como el guión que utiliza el equipo de ventas para ofrecer eficazmente sus productos a los clientes. 
  
      .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/temas/sintesis.png", alt="El esquema presenta de manera general las temáticas que aborda el componente formativo Merchandising, demostración y presentación en el punto de ventas, incluyendo conocimientos asociados a las clases y tipos de merchandising, exhibición y material P.O.P., demostraciones y presentaciones.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis
  
  </template>

<script>
export default {
  name: 'Sintesis',
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
