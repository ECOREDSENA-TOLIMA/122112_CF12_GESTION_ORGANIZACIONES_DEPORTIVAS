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
      h2#t_4_1 4.1 Clasificación de las sociedades comerciales 
    
    p En Colombia son cinco las formas más comunes de sociedades comerciales: sociedad anónima, sociedad por acciones simplificadas, sociedad de responsabilidad limitada, sociedad en comandita (simple o por acciones) y sociedad colectiva, sin embargo, existe otro tipo de clasificaciones como puede observar a continuación:

    .container-100.py-4(style="background-color: #E9EDFF" data-aos="fade-left")
      SlyderB.col-xl-10.mx-auto(:datos="datosSlyder")
    
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2. Actos y registros mercantiles
    
    p.mb-5 El registro mercantil es un medio de identificación del comerciante y de sus establecimientos de comercio, en determinada zona geográfica; en estos folios se registran o inscriben los establecimientos de comercio, empresas, dueños, direcciones, libros y demás elementos sujetos a revisión y control. El registro mercantil no solo permite la identificación del comercio, también permite su control.
    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 2.
      span  #[i  Proceso de registro mercantil]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.desktop
      figure
          img(src='@/assets/curso/temas/tema2/tema-2-25_1.svg', alt='En la Figura 2 se presentan los pasos relacionados con la inscripción y gestión de empresas en el registro mercantil, los cuales incluyen la matrícula, el registro, el objetivo, los actos del registro y las posibles sanciones.') 
      .col-lg-12.movil
      figure
          img(src='@/assets/curso/temas/tema2/tema-2-25_1.svg', alt='En la Figura 2 se presentan los pasos relacionados con la inscripción y gestión de empresas en el registro mercantil, los cuales incluyen la matrícula, el registro, el objetivo, los actos del registro y las posibles sanciones.')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Sociedades de capital',
        texto:
          'En esta sociedad, la persona jurídica responde ante posibles situaciones, solo con el patrimonio de la empresa, la responsabilidad se limita solo a la propia sociedad; estos son los tipos de sociedad de capital.',
        imagen: require('@/assets/curso/temas/tema4/img-3.png'),
      },
      {
        titulo: 'Sociedad Anónima (S.A.)',
        texto:
          'La conforman mínimo cinco miembros, facilita la transferencia de acciones y los socios nunca ponen en riesgo su patrimonio. Su transformación o disolución se lleva a cabo mediante escritura notarial o documento privado.',
        imagen: require('@/assets/curso/temas/tema4/img-4.png'),
      },
      {
        titulo: 'Sociedad en Comandita por Acciones (& CIA. S.C.A.)',
        texto:
          'Se establece, transforma y disuelve a través de una escritura pública notarial. La razón social incluye el nombre completo o solo el apellido de un socio o varios socios colectivos, seguido de "& CIA" y "S.C.A." si se trata de acciones y "S. en C." si son simples. El número de accionistas mínimo es de cinco, sin límite máximo.',
        imagen: require('@/assets/curso/temas/tema4/img-5.png'),
      },
      {
        titulo: 'Sociedad de economía mixta',
        texto:
          'Son las sociedades que se conforman con aportes estatales y capital privado, pueden constituirse como cualquier sociedad que se encuentre en el código de comercio.',
        imagen: require('@/assets/curso/temas/tema4/img-6.png'),
      },
      {
        titulo: 'Sociedades de personas',
        texto:
          'Las sociedades de personas son aquellas en las que todos los socios son conocidos, asumiendo responsabilidad solidaria e ilimitada por las obligaciones. Esto les otorga a los socios el derecho a administrar la sociedad.',
        imagen: require('@/assets/curso/temas/tema4/img-7.png'),
      },
      {
        titulo: 'Sociedad colectiva',
        texto:
          'Consta de al menos dos socios, quienes comparten responsabilidad por las operaciones. Su formación, transformación y disolución se efectúan mediante escritura pública notarial o documento privado según las regulaciones. La razón social puede incluir el nombre completo o el apellido de uno o varios socios, como "Suárez & Cía.". El capital se aporta al inicio y el interés social se divide en partes. La administración es colectiva, aunque se puede delegar.',
        imagen: require('@/assets/curso/temas/tema4/img-8.png'),
      },
      {
        titulo: 'Sociedad en comandita simple',
        texto:
          'Se constituye, trasforma y diluye, mediante escritura pública por notario, la razón social se conforma con nombre completo o solo apellido de uno de los socios, o más socios colectivos, acompañado de & CIA, y seguidas de S.C.A. si es por acciones y S. en C. cuando son simples, el número de accionistas es de cinco miembros, sin límite máximo.',
        imagen: require('@/assets/curso/temas/tema4/img-9.png'),
      },
      {
        titulo: 'Sociedad de responsabilidad limitada',
        texto:
          'Se conforma con mínimo dos y máximo 25 miembros, los cuales responden hasta el monto de sus aportes, se constituye, transforma y diluye, mediante escritura o documento público, cumpliendo los requisitos normativos; el capital se divide en partes de igual valor y deben pagarse al momento que se constituye.',
        imagen: require('@/assets/curso/temas/tema4/img-10.png'),
      },
      {
        titulo: 'Empresa unipersonal',
        texto:
          'Está compuesta por una sola persona, ya sea natural o jurídica. La responsabilidad se limita al valor de los bienes que aporta a la sociedad, y, naturalmente, los beneficios o ganancias pertenecen al único dueño.',
        imagen: require('@/assets/curso/temas/tema4/img-11.png'),
      },
    ],
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
