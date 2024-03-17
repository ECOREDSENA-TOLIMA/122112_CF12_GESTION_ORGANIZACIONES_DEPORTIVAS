export default {
  global: {
    componenteFormativo: 'Contabilidad básica',
    descripcionCurso:
      'En este componente se abordarán temáticas relacionadas con la contabilidad básica, el concepto de empresa y las estructuras organizacionales, también se relacionarán temáticas sobre las sociedades comerciales y sus clasificaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contabilidad básica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Concepto de empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Clasificación, naturaleza, funcionamiento y estructura de las organizaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Áreas funcionales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Importancia del departamento contable en las organizaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Concepto de sociedades comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación de las sociedades comerciales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Actos y registros mercantiles',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cámaras de comercio',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Clasificación, naturaleza, funcionamiento y estructura de las organizaciones',
      referencia:
        'Parra Moreno, C.,  & Liz, A.P. (2009) "La estructura organizacional y el diseño organizacional, una revisión bibliográfica," <em>Gestión y Sociedad</em>, (1), Article 12.',
      tipo: 'Artículo',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=1033&context=gs',
    },
    {
      tema: 'Cámaras de comercio',
      referencia: 'Confecámaras. (s.f.) Introducción a Cámaras de Comercio.',
      tipo: 'Página web',
      link:
        'https://confecamaras.org.co/representacion-de-la-red/introduccion-a-camaras-de-comercio',
    },
  ],
  glosario: [
    {
      termino: 'Contabilidad',
      significado:
        'es la parte de las finanzas que estudia las distintas partidas que reflejan los movimientos económicos y financieros de una empresa o entidad.',
    },
    {
      termino: 'Clasificación',
      significado:
        'es una función lógica que forma grupos, o series o clases de objetos similares o afines. Los objetos que pertenecen a una clase son afines en el sentido que poseen características esenciales comunes a todos ellos.',
    },
    {
      termino: 'Empresa',
      significado:
        'entidad en la que intervienen el capital y el trabajo como factores de producción de actividades industriales o mercantiles o para la prestación de servicios.',
    },
    {
      termino: 'Registro mercantil',
      significado:
        'registro de los comerciantes y sus establecimientos de comercio, así como el depósito de documentos de carácter mercantil más importantes para el comerciante.',
    },
    {
      termino: 'Sociedades comerciales',
      significado:
        'sociedad que tiene como objetivo la realización de actos de comercio o, en general, una actividad sujeta al derecho mercantil, también se diferencia de una sociedad civil en el hecho de que esta última no contempla en su objeto social actos mercantiles.',
    },
  ],
  referencias: [
    {
      referencia:
        'GestioPolis.com Experto. (2002). <em>Principios de Contabilidad ¿Qué son? ¿Cuáles son? ¿Para qué sirven?</em>',
      link:
        'https://www.gestiopolis.com/principios-de-contabilidad-que-son-cuales-son-para-que-sirven/',
    },
    {
      referencia:
        'Frías, M. (2014). <em>Manual de Contabilidad Básica</em>, Materia: Normas de la información Financiera. Universidad Autónoma del Estado de Hidalgo.',
      link: '',
    },
    {
      referencia:
        'Gavelán Izaguirre, J. (2000) <em>Principios de contabilidad generalmente aceptados: vigencia y aplicación</em>. UNMSM. Facultad de Ciencias Contables.',
      link: '',
    },
    {
      referencia:
        'Gómez Juárez, A., Martínez, A. (2001). <em>Introducción a la Contabilidad Financiera: Supuestos Prácticos de Contabilidad Financiera</em>. Editorial Club Universitario.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (1993). <em>Iniciación a la Organización y Técnica Comercial</em>. Mc Graw Hill, Pág. 4.',
      link: '',
    },
    {
      referencia:
        'Pallares Z., Romero, D., & Herrera M. (2005). <em>Hacer Empresa: Un Reto</em>, Cuarta Edición, Fondo Editorial Nueva Empresa, Pág. 41.',
      link: '',
    },
    {
      referencia:
        'Cámara de Representantes. (2011). Decreto 410 (1971). Código de Comercio. Artículo 86. Funciones de las cámaras de comercio.',
      link:
        'https://www.camara.gov.co/sites/public_html/leyes_hasta_1991/codigo/codigo_comercio.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Camilo Andrés Aramburo Parra',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia - Centro de servicios de salud',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Bogotá - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Jhon edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
