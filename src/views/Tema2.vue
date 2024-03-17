<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Concepto de empresa
    
    .d-flex.flex-wrap.mb-5
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p La empresa se define como una organización de personas y recursos que buscan un beneficio económico con el desarrollo de una actividad en particular; esta es una unidad productiva y debe responder a la intención de cubrir una necesidad o servicio. Una definición netamente económica, se puede considerar la empresa con una entidad que organiza con eficiencia los factores económicos, produciendo bienes y servicios, para satisfacer las necesidades del mercado, normalmente con ánimo de lucro.

        p Toda empresa tiene objetivos, que constituyen la razón de su existencia, anteriormente estos objetivos se asociaban al sistema de economía de mercados, buscando el máximo beneficio económico, en la actualidad existen muchos tipos de objetivos, según el valor que se le pretenda dar.

        p La empresa se puede comparar a un organismo vivo, nacen, se desarrollan y mueren. El nacimiento de la empresa tal y como la conocemos ahora, se inicia en la edad media, esta ha ejercido a lo largo de los años un papel determinante en la economía, especialmente en el modelo capitalista. A continuación, se revisará el concepto de empresa, según algunos autores:
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 400px" data-aos="fade-left" alt="imagen decorativa") 

    .d-flex.flex-wrap.justify-content-around.mb-5.py-4.px-4(style="background-color: #FFEDE9")
      .col-lg-5.col-xl-4.mb-5.px-2.mb-5.mb-lg-0
        p Para Idalberto Chiavenato (1993):
        .bloque-texto-d.color-secundario.p-4.p-lg-0
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular “Es una organización social que utiliza una gran variedad de recursos para alcanzar determinados objetivos". (p.4).
            i.fas.fa-quote-right
      .col-lg-7.col-xl-5.px-2
        p Según Pallares, Z., Diego, & Herrera, M. (2005).
        .bloque-texto-d.color-secundario.p-4.p-lg-0
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular  “Un sistema dentro del cual una persona o grupo de personas desarrollan un conjunto de actividades encaminadas a la producción y/o distribución de bienes y/o servicios, enmarcados en un objeto social determinado” (p.41).
            i.fas.fa-quote-right
    
    p.mb-5 La empresa también se podrá concebir como un sistema abierto y social, conformado por personas que persiguen metas y objetivos, adoptando unas pautas de comportamiento según el tipo de organización, también se puede entender a la empresa, como una unidad económico-social, con una producción a partir  de la coordinación del capital, el trabajo y la dirección.
    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 1.
      span  #[i  Otras definiciones de empresa]

    img.mx-auto(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 690px" alt="En la Figura 1 se muestra cómo se puede denominar a una empresa, incluyendo términos como entidad organizada, organización de personas y recursos, organismo vivo o sistema social abierto")

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Clasificación, naturaleza, funcionamiento y estructura de las organizaciones
    
    p.mb-5 Para que haya un buen funcionamiento de las empresas, estas se deben clasificar de acuerdo con diferentes características, como, su tamaño, su actividad, su forma jurídica, entre otras. A continuación, se podrá observar algunos aspectos centrales que las relaciona, tanto la clasificación de la empresa según su tamaño, de acuerdo con  el número de trabajadores; según su composición del capital; según su composición jurídica; y según su actividad económica.

    .d-flex.flex-wrap.mb-5
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto(src="@/assets/curso/temas/tema2/img-3.png" style="max-width: 400px" data-aos="fade-left" alt="imagen decorativa")
      .col-lg-7.col-xl-8.ps-lg-4(data-aos="fade-right")
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Clasificación de la empresa según su tamaño")
            ul
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Microempresa:] menos de 10 trabajadores.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Pequeña empresa:] menos de 50 trabajadores.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Mediana empresa:] entre 50 y 250 trabajadores.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Gran empresa:] más de 250 trabajadores.
          div(numero="2" titulo="Clasificación según la composición del capital")
            ul
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Empresa privada:] cuando sus recursos vienen de particulares.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Empresa pública:] cuando los recursos y la administración dependen del estado.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Empresa mixta:] cuando es compartida público-privado.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Empresa de autogestión:] cuando el capital está en manos de los trabajadores.
          div(numero="3" titulo="Clasificación según su forma jurídica")
            ul
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Empresas individuales:]  cuando solo pertenece a una persona.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Empresas societarias o sociedades:] son las que están constituidas por varias personas.
          div(numero="4" titulo="Clasificación según su actividad económica")
            ul
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Sector primario:] agrícola, ganadería, apícola, minería.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Sector secundario:] empresas industriales y de construcción.
              li.d-flex.align-items-start
                img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right" alt="imagen decorativa")
                p.ps-2.mb-0(data-aos="fade-left") #[b Sector terciario:] comercio y servicios.


    p Para clasificar una empresa es importante conocer su estructura organizacional, la cual se constituye como un conjunto o sistema en que se divide y coordina el trabajo dentro de una organización; se asignan funciones, se establece la autoridad, las cadenas de mando, el organigrama, y las diferentes áreas en que se divide la organización. Esta estructura organizacional debe ir de la mano con las metas y objetivos establecidos, puesto que desde allí se parte, para tener claro las necesidades de la organización.

    p.mb-5 Una estructura organizacional bien planificada, permite que todas sus áreas se enfoquen adecuadamente en la consecución de los objetivos; dentro de la estructura organización se deben incluir los siguientes conceptos:

    .d-flex.flex-wrap.mb-5
      .card-img-float.mx-auto.mx-xxl-0(style="background-color: #2D54FE" data-aos="fade-right")
        img.img-float(src="@/assets/curso/temas/tema2/img-4.svg" alt="imagen decorativa")
        p.fw-bold(style="color: white") Agrupación del personal por áreas, según las actividades que se realizan.
        
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img.img-float(src="@/assets/curso/temas/tema2/img-5.svg" alt="imagen decorativa")
        p.fw-bold Jerarquización, subordinación, coordinación y control.

      .card-img-float.mx-auto.mx-xxl-0(style="background-color: #FE502D" data-aos="fade-left")
        img.img-float(src="@/assets/curso/temas/tema2/img-6.svg" alt="imagen decorativa")
        p.fw-bold Diseño de sistemas y mecanismo para la coordinación de personas según sus funciones.

    p.mb-5 Para la planeación de la estructura organizacional y garantizar un adecuado funcionamiento, en respuesta a las necesidades que plantea el entorno, y definir su política empresarial. Al contar con la política y estructura organizacional, se determinan los objetivos específicos y responsabilidades por área de trabajo, se determina las funciones y la toma de decisiones. Existen varios tipos de organización según su estructura:

    .container-100.py-4.mb-5(style="background-color: #E9EDFF" data-aos="fade-left")
      SlyderB.col-xl-10.mx-auto(:datos="datosSlyder")

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Áreas funcionales
    
    p.mb-5 Las áreas funcionales son los departamentos en las que se divide la organización, para optimizar el funcionamiento del mismo. Las principales áreas funcionales en las que se divide una organización son:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Dirección")
        img.mx-auto.col-lg-5.mb-4.my-lg-auto(src="@/assets/curso/temas/tema2/img-13.png" style="max-width: 330px" data-aos="fade-left" alt="imagen decorativa")
        .col-lg-7.ps-lg-4(data-aos="fade-right")
          p Se relaciona con la operación general de la organización, en ella se definen los objetivos y se toman las decisiones más importantes. Tiene como función dirigir todas las operaciones de la organización; por su nivel de responsabilidad esta área se relaciona directamente con las demás y se encarga del control de estas.
      .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Recursos humanos")
        img.mx-auto.col-lg-5.mb-4.my-lg-auto(src="@/assets/curso/temas/tema2/img-14.png" style="max-width: 330px" alt="imagen decorativa")
        .col-lg-7.ps-lg-4
          p Este departamento se encarga de la gestión integral de recursos humanos, abarcando desde el reclutamiento y selección de personal hasta la administración de trámites de seguridad social, pagos, compensaciones, y la promoción del bienestar y seguridad de los empleados.
      .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Producción")
        img.mx-auto.col-lg-5.mb-4.my-lg-auto(src="@/assets/curso/temas/tema2/img-15.png" style="max-width: 330px" alt="imagen decorativa")
        .col-lg-7.ps-lg-4
          p Esta área se relación a con  la producción de bienes y servicios, es un área funcional; se realizan las transformaciones de las materias primas, para convertirlas en productos. Su responsabilidad es lograr el mayor aprovechamiento de los recursos en el proceso productivo. Entre sus actividades está el diseño y producción de bienes y servicios, mantenimiento de maquinaria y toda el área de producción, control de calidad, almacenamiento y #[i stock], entre otras.
      .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="Finanzas y contabilidad")
        img.mx-auto.col-lg-5.mb-4.my-lg-auto(src="@/assets/curso/temas/tema2/img-16.png" style="max-width: 330px" alt="imagen decorativa")
        .col-lg-7.ps-lg-4
          p Se dedica a la gestión y control de los recursos financieros de la organización, manteniendo un registro preciso de todas las operaciones. Abarca el pago de empleados y proveedores, impuestos, créditos, préstamos y la generación de informes financieros.
      .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFFAE5" titulo="<em>Marketing</em> y ventas")
        img.mx-auto.col-lg-5.mb-4.my-lg-auto(src="@/assets/curso/temas/tema2/img-17.png" style="max-width: 330px" alt="imagen decorativa")
        .col-lg-7.ps-lg-4
          p Se encarga de realizar todas las acciones necesarias para que los productos y servicios lleguen a las manos el cliente, esta área se centra en el exterior de la empresa, desde allí se diseñan las estrategias de <em>marketing</em> y que tipo de mercado se deben dirigir. Allí también se lleva las siguientes acciones: gestión de puntos de venta, investigación de necesidades, comunicación con clientes entre otras.
        
</template>

<script>
import SlyderB from '@/components/SlyderB.vue'
export default {
  name: 'Tema2',
  components: { SlyderB },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Organización en línea',
        texto:
          'Las responsabilidades y las decisiones recaen en una sola persona, el jefe asigna y distribuye el trabajo a sus subordinados y ellos reportan directamente a él, este modelo es muy común entre las pequeñas y medianas empresas.',
        imagen: require('@/assets/curso/temas/tema2/img-7.png'),
      },
      {
        titulo: 'Organización funcional',
        texto:
          'Compuesto por varias áreas de trabajo, según las funciones; se asignan las responsabilidades según área de trabajo, estas se basan en la habilidad de cada persona, es ideal para las empresas de mediana o alto número de trabajadores.',
        imagen: require('@/assets/curso/temas/tema2/img-8.png'),
      },
      {
        titulo: 'Organización jerárquica',
        texto:
          'Es una de las más utilizadas, en especial en las medianas empresas, está dividida en dependencias con unos responsables con cargos superiores donde recaen la toma de decisiones.',
        imagen: require('@/assets/curso/temas/tema2/img-9.png'),
      },
      {
        titulo: 'Organización lineal o <em>staff</em>',
        texto:
          'En este tipo de organización se combina la autoridad con el asesoramiento, que ejercen agentes externos, está basada en el modelo jerárquico, sin embargo, los asesores tienen el rol de satisfacer las necesidades que no pueden suplirse desde la organización.',
        imagen: require('@/assets/curso/temas/tema2/img-10.png'),
      },
      {
        titulo: 'Organización matricial',
        texto:
          'En este modelo se reúnen recursos para proyectos o tareas específicas; una vez finalizado se disuelve; los integrantes del equipo pueden pertenecer o no a la organización, este modelo es ideal para la gestión eficaz de los recursos.',
        imagen: require('@/assets/curso/temas/tema2/img-11.png'),
      },
      {
        titulo: 'Organización por división',
        texto:
          'Estas organizaciones se dividen según tres elementos clave, líneas de producción, tipos de cliente o zonas geográficas.',
        imagen: require('@/assets/curso/temas/tema2/img-12.png'),
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
