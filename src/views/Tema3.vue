<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Importancia del departamento contable en las organizaciones
    
    p.mb-5 El departamento contable de las organizaciones es uno de los más importantes en las organizaciones, puesto que permite conocer la realidad económica y financiera de la empresa, su evolución y sus tendencias; también permite la toma de decisiones acertadas. Se focaliza en ser un sistema de control y registro de las operaciones económicas que se realizan, su importancia se puede agrupar en los siguientes elementos:

    .row.justify-content-center
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4(data-aos="fade-right")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-1.png", alt="Información")
          .crd_hover_txt--body(style="background-color: #2D54FE")
            h4.mb-3.text-white.text-center Información
            p.mb-0.text-white La contabilidad permite mantener informada a la organización de las operaciones financieras que se realizan, a través de los informes periódicos que se registran.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4(data-aos="flip-up")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-2.png", alt="Toma de decisiones")
          .crd_hover_txt--body(style="background-color: #FFCA00")
            h4.mb-3.text-center Toma de decisiones
            p.mb-0 Permite saber en qué estado se encuentra la empresa, y realizar una toma de decisiones acorde a la realidad, buscando el beneficio y la productividad de la organización.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4(data-aos="fade-right")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-3.png", alt="Obtener inversiones")
          .crd_hover_txt--body(style="background-color: #FE502D")
            h4.mb-3.text-center Obtener inversiones
            p.mb-0 Los informes contables detallados, permitirán ajustar las propuestas y proyectos en busca de inversionistas para la organización.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4(data-aos="flip-up")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-4.png", alt="Préstamos y asistencias del gobierno")
          .crd_hover_txt--body(style="background-color: #FFCA00")
            h4.mb-3.text-center Préstamos y asistencias del gobierno
            p.mb-0 Mantener registros contables actualizados proporciona información confiable y cumple con requisitos para préstamos y alivios gubernamentales, mejorando la posición de la organización en solicitudes y documentación.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4(data-aos="fade-right")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-5.png", alt="Cumplir con las obligaciones legales")
          .crd_hover_txt--body(style="background-color: #2D54FE")
            h4.mb-3.text-white.text-center Cumplir con las obligaciones legales
            p.mb-0.text-white Mantener registros contables actualizados es fundamental para cumplir con las obligaciones legales, incluyendo el pago de impuestos y otros compromisos legales.

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
