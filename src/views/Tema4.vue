<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Concepto de sociedades comerciales 
    p.mb-5 Las sociedades comerciales son personas jurídicas, que nacen por la celebración de un contrato entre personas naturales o personas jurídicas, las cuales están obligas a hacer un aporte en dinero, en trabajo o en bienes, con el fin de repartirse las utilidades obtenidas como parte de la actividad económica de la empresa. Las sociedades se pueden constituir a través de una escritura pública o un documento privado:
    .col-xl-10.mx-auto.d-flex.flex-wrap.mb-5
      .col-lg-6.px-2
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img.mx-auto(src='@/assets/curso/temas/tema4/img-1.png' alt='Escritura púbica' style="max-width: 251px")
          p.text-center.fw-bold(style="color: white") Escritura púbica
      .col-lg-6.px-2
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8
              img.mx-auto(src='@/assets/curso/temas/tema4/img-2.png' alt='Documento privado' style="max-width: 251px")
          p.text-center.fw-bold(style="color: black") Documento privado
          
    p La legislación en Colombia permite constituir diferentes tipos de sociedades comerciales, la cual se encuentran reguladas por el Código de Comercio Colombiano, el cual se encarga de regular y orientar en primera medida, todo lo concerniente a las sociedades que se constituyen para ejecutar actos mercantiles. La elección del tipo de sociedad y su razón social debe basarse en el número de personas involucradas, la inversión de capital y los servicios a ofrecer en la empresa.

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1. Clasificación de las sociedades comerciales 
    
    p En Colombia son cinco las formas más comunes de sociedades comerciales: sociedad anónima, sociedad por acciones simplificadas, sociedad de responsabilidad limitada, sociedad en comandita (simple o por acciones) y sociedad colectiva, sin embargo, existe otro tipo de clasificaciones como puede observar a continuación:
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
