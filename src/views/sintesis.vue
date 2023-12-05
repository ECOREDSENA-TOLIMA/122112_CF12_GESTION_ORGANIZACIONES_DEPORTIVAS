<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En resumen, la contabilidad básica en eventos deportivos es esencial para administrar los ingresos y gastos de las organizaciones deportivas. Este sistema recopila, clasifica y registra información financiera, brindando datos útiles para la toma de decisiones, la planificación y el control financiero. Además, ayuda a analizar recursos, prever flujos de dinero y proporcionar información esencial para la gestión efectiva de estas organizaciones. A continuación, se presenta un mapa conceptual que resume la información de este proceso.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra síntesis en mapa conceptual, la contabilidad básica en eventos deportivos es esencial para administrar los ingresos y gastos de las organizaciones deportivas. Este sistema recopila, clasifica y registra información financiera, brindando datos útiles para la toma de decisiones, la planificación y el control financiero. Además, ayuda a analizar recursos, prever flujos de dinero y proporcionar información esencial para la gestión efectiva de estas organizaciones.")
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
