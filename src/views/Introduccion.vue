<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Estimado aprendiz, a través del siguiente video se podrá conocer los aspectos relevantes que tratará este componente:

    figure.col-xl-10.mx-auto.mb-5(data-aos="fade-left")
      .video
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/477dFkFK1rY" title="Contabilidad básica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)    
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
