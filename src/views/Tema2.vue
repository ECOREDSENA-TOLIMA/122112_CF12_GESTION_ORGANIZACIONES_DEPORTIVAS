<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Concepto de empresa
    
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p La empresa se define como una organización de personas y recursos que buscan un beneficio económico con el desarrollo de una actividad en particular; esta es una unidad productiva y debe responder a la intención de cubrir una necesidad o servicio. Una definición netamente económica, se puede considerar la empresa con una entidad que organiza con eficiencia los factores económicos, produciendo bienes y servicios, para satisfacer las necesidades del mercado, normalmente con ánimo de lucro.

        p Toda empresa tiene objetivos, que constituyen la razón de su existencia, anteriormente estos objetivos se asociaban al sistema de economía de mercados, buscando el máximo beneficio económico, en la actualidad existen muchos tipos de objetivos, según el valor que se le pretenda dar.

        p La empresa se puede comparar a un organismo vivo, nacen, se desarrollan y mueren. El nacimiento de la empresa tal y como la conocemos ahora, se inicia en la edad media, esta ha ejercido a lo largo de los años un papel determinante en la economía, especialmente en el modelo capitalista. A continuación, se revisará el concepto de empresa, según algunos autores:
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 400px" data-aos="fade-left")

</template>

<script>
export default {
  name: 'Tema2',
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
