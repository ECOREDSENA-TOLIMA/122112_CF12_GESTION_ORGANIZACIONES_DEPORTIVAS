<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Contabilidad básica
    
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p La contabilidad es un recurso del que se dispone para administrar los ingresos y gastos de una organización; hace parte de las finanzas, estudia los diferentes movimientos económicos y financieros de una entidad. En sí, se podría definir, como el sistema por el cual se recopila, clasifica, registra y comunica, en unidades monetarias, toda la información contable relacionada con el ejercicio de la actividad de la empresa. También se podría definir como la técnica que se utiliza para el registro de operaciones que afecten económicamente la entidad, los procesos de recopilación, clasificación, registro y comunicación. La contabilidad se encarga de analizar e interpretar la información. En ese sentido, las organizaciones deportivas son conscientes de la necesidad de la gestión contable, para su efectiva operacionalización.
        p La contabilidad tiene como objetivos principales:
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
            p.ps-2.mb-0(data-aos="fade-left") Suministrar la información financiera, útil y oportuna para la toma de decisiones en la empresa, esta información se facilita a las personas interesadas.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
            p.ps-2.mb-0(data-aos="fade-left") Controlar las operaciones financieras, realizadas en la entidad.
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-1.png" style="max-width: 400px" data-aos="fade-left")
    
    p.mb-5 Por otra parte, también se consideran como objetivos importantes de la contabilidad, los siguientes:

    .container-100.d-flex.flex-wrap.justify-content-center.py-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left bottom; background-size: cover;"
    )
      .d-flex.flex-wrap.mx-3.mb-auto(style="max-width: 190px")
        img(src="@/assets/curso/temas/tema1/img-2.png" style="max-width: 190px" alt="Analizar y dar parte de los recursos económicos de una empresa.")
        p.mb-4.text-center.fw-bold Analizar y dar parte de los recursos económicos de una empresa.
      .d-flex.flex-wrap.mx-3.mb-auto(style="max-width: 190px")
        img(src="@/assets/curso/temas/tema1/img-3.png" style="max-width: 190px" alt="Apoyar a la administración en la correcta planificación.")
        p.mb-4.text-center.fw-bold Apoyar a la administración en la correcta planificación.
      .d-flex.flex-wrap.mx-3.mb-auto(style="max-width: 190px")
        img(src="@/assets/curso/temas/tema1/img-4.png" style="max-width: 190px" alt="Controlar y llevar registros de las gestiones.")
        p.mb-4.text-center.fw-bold Controlar y llevar registros de las gestiones.
      .d-flex.flex-wrap.mx-3.mb-auto(style="max-width: 190px")
        img(src="@/assets/curso/temas/tema1/img-5.png" style="max-width: 190px" alt="Ayudar a predecir los flujos de dinero.")
        p.mb-4.text-center.fw-bold Ayudar a predecir los flujos de dinero.
      .d-flex.flex-wrap.mx-3.mb-auto(style="max-width: 190px")
        img(src="@/assets/curso/temas/tema1/img-6.png" style="max-width: 190px" alt="Colaborar con la información financiera necesaria para la organización.")
        p.mb-4.text-center.fw-bold Colaborar con la información financiera necesaria para la organización.
    
    p.mb-5 La contabilidad tiene principios básicos, los cuales se conceptualizan como un conjunto de lineamientos generales que sirven para regular la manera en que se cuantifica, trata y comunica la información financiera, por parte de los profesionales en contaduría, los principios constituyen el marco normativo de actuación de la contabilidad. Sus principios se centran en:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-1.png' alt='Equidad' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Equidad
        p.mb-0.text-center(style="color: black") Los estados financieros deben preparar de tal modo que reflejen la equidad entre los diferentes intereses, cada cual recibe equitativamente, según el porcentaje de participación en el ente.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-2.png' alt='Entidad contable' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Entidad contable
        p.mb-0.text-center(style="color: black") La contabilidad no puede incluir operaciones económicas de carácter personal.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-3.png' alt='Empresa en marcha' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Empresa en marcha
        p.mb-0.text-center(style="color: black") Sus estados financieros representaran valores históricos, o si es el caso los valores estimados de liquidación, no existe un tiempo límite en los ejercicios contables de la entidad.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-4.png' alt='Bienes económicos' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Bienes económicos
        p.mb-0.text-center(style="color: black") Los estados financieros, deben representar aquellos recursos u obligaciones con los que cuenta la empresa, hace referencia a los hechos, los recursos y las obligaciones que puedan ser valorizados.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-5.png' alt='Moneda común' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Moneda común
        p.mb-0.text-center(style="color: black") La contabilidad se basa en la medición monetaria, esta debe realizarse en una sola moneda.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-6.png' alt='Periodo de tiempo' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Periodo de tiempo
        p.mb-0.text-center(style="color: black") La información se resume en periodos de tiempos, para una medición correcta y un buen análisis de la información.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-7.png' alt='Devengado' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Devengado
        p.mb-0.text-center(style="color: black") Los ingresos y egresos devengados en un periodo de tiempo deben tomarse todos, aunque estos hayan sido o no percibidos.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-8.png' alt='Realización' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Realización
        p.mb-0.text-center(style="color: black") Solo deben computarse los resultados económicos, cuando estos sean legalmente realizables.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-9.png' alt='Costo histórico' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Costo histórico
        p.mb-0.text-center(style="color: black") El registro de operaciones se fundamenta en costos históricos, lo cual implica que las transacciones deben registrarse utilizando el costo original que representen para la empresa.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-10.png' alt='Objetividad' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Objetividad
        p.mb-0.text-center(style="color: black") Para obtener registros objetivos, los cambios que afecten los activos, pasivos y patrimonio, deben ser contabilizados lo más pronto posible.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-11.png' alt='Criterio prudencial' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Criterio prudencial
        p.mb-0.text-center(style="color: black") Ante dos o más alternativas, se debe seleccionar la más viable, para ello, es necesario aplicar criterios que permitan tomar la decisión adecuada.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-12.png' alt='Importancia relativa' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Importancia relativa
        p.mb-0.text-center(style="color: black") Se debe aplicar los principios y normas, independientemente de las situaciones que se presenten.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-13.png' alt='Uniformidad' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Uniformidad
        p.mb-0.text-center(style="color: black") Es esencial aplicar los mismos métodos contables de manera consistente de un período a otro. En caso de un cambio necesario, se debe especificar claramente y explicar las implicaciones de dicho cambio.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-14.png' alt='Contenido de fondo sobre la forma' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Contenido de fondo sobre la forma
        p.mb-0.text-center(style="color: black") La contabilidad debe enfocarse en el contenido económico de los eventos, aun cuando la ley le dé un trato diferente.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-15.png' alt='Dualidad económica o paridad doble' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Dualidad económica o paridad doble
        p.mb-0.text-center(style="color: black") La contabilidad se basa en el principio de partida doble o dualidad económica, lo que significa que por cada registro en el debe, se realiza también  un registro correspondiente en el haber.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-16.png' alt='Relación fundamental estados financieros' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Relación fundamental estados financieros
        p.mb-0.text-center(style="color: black") La relación fundamental de los resultados contables se refleja en la presentación de estados financieros y estados de cuenta.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-17.png' alt='Objetivo general de la información financiera' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Objetivo general de la información financiera
        p.mb-0.text-center(style="color: black") Tiene como fin servir objetivamente, por ello la información financiera, será destinada a todos los usuarios que la requieran.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tj-18.png' alt='Exposición' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Exposición
        p.mb-0.text-center(style="color: black") Los estados financieros deben contar con la información necesaria, para interpretar en qué situación se encuentra la entidad.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
