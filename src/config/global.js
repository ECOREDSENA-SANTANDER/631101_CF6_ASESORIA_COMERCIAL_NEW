export default {
  global: {
    Name:
      '<i>Merchandising</i>, demostración y presentación en el punto de ventas',
    Description:
      'Este material de formación explora el impacto que el <i>merchandising</i> genera en el consumidor al considerarse como una sólida estrategia para impulsar las ventas de productos, así como la importancia de la exhibición, las demostraciones y las presentaciones en el punto de ventas, al comprender cómo estas crean un vínculo entre el cliente y el espacio de venta, y permiten que se fomente el impulso y deseo de compra.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    /*imagenesDecorativasBanner: [
        {
          clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
          imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
        },
        {
          clases: ['banner-principal-decorativo-2'],
          imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
        },
      ],*/
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
        titulo: '<i>Merchandising</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clases de <i>merchandising</i>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de <i>merchandising</i>',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Exhibición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Material P.O.P.',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Demostraciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Presentaciones',
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
        download: 'downloads/CF6_631101_DU.pdf',
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
      tema: '<i>Merchandising</i>',
      referencia:
        'Ortiz, G., C., y López, M., K. (2021). Estrategias de innovación en merchandising aplicadas a pymes del sector misceláneas en la localidad de Chapinero en Bogotá.',
      tipo: 'Documento',
      link: 'https://digitk.areandina.edu.co/handle/areandina/3838',
    },
    {
      tema: 'Presentaciones',
      referencia: 'Apple. (2016). Apple – september event 2016. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=R-sLPTUEq6E',
    },
    {
      tema: 'Presentaciones',
      referencia:
        'TEDx Talks. (2016). Hablando con Julis | Daniela Galindo | TEDxUniversidadPiloto. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0SjVNTAVdgs',
    },
    {
      tema: 'Presentaciones',
      referencia:
        'Universia. (2020). Los mejores programas para hacer presentaciones como un profesional.',
      tipo: 'Artículo web',
      link:
        'https://www.universia.net/co/actualidad/orientacion-academica/mejores-programas-hacer-presentaciones-como-profesional-1098969.html',
    },
  ],
  glosario: [
    {
      termino: 'Cabecera de góndola',
      significado:
        'extremo de una góndola o una estantería donde se colocan artículos de manera promocional (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: '<em>Display</em>',
      significado:
        'pequeños carteles independientes de cualquier material y que pueden contener publicidad sobre uno o varios artículos (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: 'Escaparatismo',
      significado:
        'arte de organizar y adornar un establecimiento para que resulten atrayentes al público, aplicando las técnicas de diseño y montaje de los escaparates. El escaparatismo se puede resumir en cuatro palabras: pare, mire, infórmese y compre (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: 'Imagen corporativa',
      significado:
        'imagen generalmente aceptada de lo que una compañía “significa”. La creación de una imagen corporativa es un ejercicio en la dirección de la percepción.',
    },
    {
      termino: 'Lineal',
      significado:
        'expositores basados en su longitud, espacio para la venta vinculado a las paredes (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'su objetivo principal es llamar la atención dirigir al cliente hacia el producto y facilitar la compra (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: '<em>Merchandising</em> de gestión',
      significado:
        'acción de poner un producto estratégicamente para su fácil acceso y venta. Por ello hay que ajustar y gestionar correctamente el espacio (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: '<em>Merchandising</em> estratégico',
      significado:
        'conjunto de técnicas basadas principalmente en la presentación, rotación y rentabilidad de un producto en el punto de venta (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: 'PLV',
      significado:
        'publicidad en el lugar de venta que engloba expositores, carteles, <i>displays</i> y otros elementos que sean portadores de un mensaje publicitario y estén colocados en un punto de venta. También se conoce como «POS display», abreviatura de la expresión en inglés Point of Sale Display (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: 'Puntos calientes',
      significado:
        'lugares dentro del establecimiento donde los clientes observan más los productos y tienen mayor actividad, esos lugares suelen ser probadores, mostradores y cajas (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: 'Puntos calientes naturales',
      significado:
        'son situados en las cajas, el cruce de pasillos, un claro ejemplo las zonas por donde tienen que pasar para pagar donde se logra exponer gran cantidad de artículos para generar venta por impulso (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: 'Puntos fríos',
      significado:
        'son aquellos que están mal situados y que el consumidor apenas visita, los clientes apenas se fijan en los productos situados en esos puntos por lo que tenemos que potenciarlo o convertirlos en puntos calientes (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: 'Rotación',
      significado:
        'tiempo que tarda en ser renovado el stock de un producto (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: 'Señalización',
      significado:
        'todo tipo de rotulación, textos, etiquetas, expositores utilizados en el interior de un escaparate o de un establecimiento (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: 'Surtido',
      significado:
        'conjunto de artículos que un establecimiento ofrece a la venta. Se refiere a la variedad de artículos presentes en la sala de ventas, no a la cantidad de un producto en concreto (Visualmerchandisingmkt, 2016).',
    },
    {
      termino: 'Visual <i>merchandising</i>',
      significado:
        'parte esencial para cualquier establecimiento ya que ayuda a incrementar las ventas, mejorando la imagen y la marca ya sea por escaparates atractivos que inciten al público a contemplarlos más tiempo y hacer que entren al establecimiento (Visualmerchandisingmkt, 2016).',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández, R, M., y Pastor, J. (2007). Diccionario Below the Line. CEU. ',
      link: '',
    },
    {
      referencia:
        'Kotler, P., Bower, J., y Makens, J. (2008). Marketing para el turismo. Pearson Prentice Hall. ',
      link: '',
    },
    {
      referencia:
        'Mundo constructor. (2019). Visual merchandising. [gráfico]. ',
      link: '',
    },
    {
      referencia:
        'Palomares, B., R. (2009). Merchandising, teoría, práctica estrategia. Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Pérez, L. M., Pérez, F., y Cristo, Y. (2018). Aplicación del merchandising de seducción y el merchandising visual en el Palenque de los. Revista Infociencia, 22(3), 1-12.',
      link: '',
    },
    {
      referencia:
        'Pipe Drive. (s. f.). Presentaciones de ventas exitosas: plantillas, ejemplos e ideas.',
      link: 'https://www.pipedrive.com/es/blog/presentacion-ventas',
    },
    {
      referencia:
        'Real Academia Española. (2020). Diccionario de la lengua española.',
      link: 'https://dle.rae.es/est%C3%ADmulo?m=form',
    },
    {
      referencia:
        'Robles, L., M. (2009). La publicidad en el punto de venta: su realidad y tendencias. Revista de Comunicación de la SEECI, (18)79-128. ',
      link: 'https://www.redalyc.org/pdf/5235/523552804003.pdf',
    },
    {
      referencia: 'Seggiaro, M. (2017). Zonas y circulación. [Infografía].',
      link: 'https://www.marcelaseggiaro.com/wp-content/uploads/2017/11/6.png',
    },
    {
      referencia:
        'Universia. (2020). Los mejores programas para hacer presentaciones como un profesional.',
      link:
        'https://www.universia.net/co/actualidad/orientacion-academica/mejores-programas-hacer-presentaciones-como-profesional-1098969.html',
    },
    {
      referencia:
        'Visualmerchanisingmkt. (2016). Glosario de términos visual merchandising.',
      link: 'https://visualmerchandisingmkt.wordpress.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johana Gómez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paolo Andrés Cantillo Largo',
          cargo: 'Experto temático',
          centro: 'Centro de comercio - Regional Antioquia',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñador y evaluador instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full-stack</i> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y producción audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
