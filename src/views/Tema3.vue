<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Importancia del departamento contable en las organizaciones
    
    p.mb-5 El departamento contable de las organizaciones es uno de los más importantes en las organizaciones, puesto que permite conocer la realidad económica y financiera de la empresa, su evolución y sus tendencias; también permite la toma de decisiones acertadas. Se focaliza en ser un sistema de control y registro de las operaciones económicas que se realizan, su importancia se puede agrupar en los siguientes elementos:

    .row.justify-content-center.align-items-center.mb-5      
      .col-sm-6.col-xl-4.mb-4.mb-xl-0.h390
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3(style="color:#ffffff;") Información
              p(style="color:#ffffff;") La contabilidad permite mantener informada a la organización de las operaciones financieras que se realizan, a través de los informes periódicos que se registran.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.jpg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0.h390
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3(style="color:#000000;") Toma de decisiones
              p(style="color:#000000;") Permite saber en qué estado se encuentra la empresa, y realizar una toma de decisiones acorde a la realidad, buscando el beneficio y la productividad de la organización.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-2.jpg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0.h390
        .tarjeta.tarjeta-slide.arriba.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3 Obtener inversiones
              p Los informes contables detallados, permitirán ajustar las propuestas y proyectos en busca de inversionistas para la organización.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-3.jpg')})`}")
    .row.justify-content-center.align-items-center.mb-5  
      .col-sm-6.col-xl-4.mb-4.mb-xl-0.h390
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3(style="color:#000000;") Préstamos y asistencias del gobierno
              p(style="color:#000000;") Mantener registros contables actualizados proporciona información confiable y cumple con requisitos para préstamos y alivios gubernamentales, mejorando la posición de la organización en solicitudes y documentación.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-4.jpg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0.h390
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h3(style="color:#ffffff;") Cumplir con las obligaciones legales
              p(style="color:#ffffff;") Mantener registros contables actualizados es fundamental para cumplir con las obligaciones legales, incluyendo el pago de impuestos y otros compromisos legales.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-5.jpg')})`}")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
