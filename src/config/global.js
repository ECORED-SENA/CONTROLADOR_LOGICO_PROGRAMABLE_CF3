export default {
  global: {
    componenteFormativo: 'Funcionamiento del cerebro de las máquinas',
    descripcionCurso:
      'En el funcionamiento de las máquinas, el cerebro (PLC) debe estar configurado de acuerdo con las funciones que debe cumplir la máquina; en este componente, se podrá verificar que el equipo esté trabajando acorde con el programa introducido en el Controlador Lógico Programable.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistemas lógicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lenguajes de programación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gráfico secuencial de funciones (Grafcet)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'sintesis',
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
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
  referencias: [
    {
      referencia:
        'Boix, O. (s. f.). Principios del GRAFCET. Curso de GRAFCET y GEMMA.',
      link: 'https://recursos.citcea.upc.edu/grafcet/intro/princip.html',
    },
    {
      referencia:
        'Castillo, J. (2006). Iniciación a los autómatas programables. Revista de Electricidad, Electrónica y Automática.',
      link: 'http://olmo.pntic.mec.es/~jmarti50/automatas/auto3.htm',
    },
    {
      referencia: 'Control Real Español. (2015). SLC conexión.',
      link: 'https://controlreal.com/es/memoria-y-ciclo-de-escan/slc-conexion/',
    },
    {
      referencia:
        'Daneri, P. (2009). PLC: automatización y control industrial. HASA.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/66558',
    },
    {
      referencia:
        'Enerxia.net. (s. f.).  AT-AUT: Lenguajes de autómatas: Diagrama de Bloques de Funciones (FBD).',
      link:
        'https://www.enerxia.net/portal/index.php/i-auto/756-at-aut-lenguajes-de-automatas-diagrama-de-funciones-secuenciales-sfc-2',
    },
    {
      referencia:
        'Escalona, I. (2007). Transductores y sensores en la automatización industrial. El Cid Editor.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/34463',
    },
    {
      referencia: 'Gea, J. (2006). Introducción al GRAFCET. Automatas.org.',
      link: 'https://www.automatas.org/redes/grafcet.htm',
    },
    {
      referencia:
        'Izaguirre, E. (2012). Sistemas de automatización. Editorial Feijóo.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/124330',
    },
    {
      referencia:
        'Jeck. (2015). Conceptos: Grafcet. Desarrollo de una aplicación gráfica para la edición de diagramas Grafcet y ladder.',
      link:
        'https://metalgeargrafcet.wordpress.com/2015/03/16/conceptos-grafcet/',
    },
    {
      referencia:
        'Leiva, J. (2016). Herramienta para el diseño, simulación y generación de código de sistemas de automatización industrial basados en PLCs. Universidad Nacional del Centro de la Provincia de Buenos Aires.',
      link:
        'https://www.ridaa.unicen.edu.ar/xmlui/bitstream/handle/123456789/756/Tesis%20Leiva%20Javier.pdf?sequence=3&isAllowed=y',
    },
    {
      referencia:
        'Medina, J. (2015). La automatización en la industria química. Universitat Politècnica de Catalunya.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/61458',
    },
    {
      referencia:
        'Meneses, J. (2018). Desarrollo y explotación de sistemas automáticos de producción. SlidePlayer.',
      link: 'https://slideplayer.es/slide/11793024/',
    },
    {
      referencia:
        'Salazar, J. (2016). Grafcet Una forma simple e intuitiva de programación. SlidePlayer.',
      link: 'https://slideplayer.es/slide/11117921/',
    },
    {
      referencia:
        'Saralegui, U. (2013). Contenido básico. Electrónica Digital Básica.',
      link:
        'https://sites.google.com/a/educacion.navarra.es/electronica-digital-basica/circuitos-integrados',
    },
    {
      referencia:
        'Schneider Electric. (2019). Lenguaje de diagrama de bloques de funciones (FBD).',
      link:
        'https://product-help.schneider-electric.com/Machine%20Expert/V1.1/es/SoMProg/SoMProg/FBD_LD_IL_Editor/FBD_LD_IL_Editor-4.htm',
    },
    {
      referencia:
        'Siemens. (2014). Programación estructurada de autómatas Siemens.  InfoPLC.',
      link:
        'https://www.infoplc.net/descargas/106-siemens/software-step7-tiaportal/2087-programacion-estructurada-automatas-siemens',
    },
    {
      referencia:
        'Sistemas Eléctricos Industriales [SEIN]. (s. f.). Temporizadores digitales multifuncionales.',
      link:
        'https://sein.com.co/tienda/automatizacion-y-control/temporizadores/temporizadores-digitales-multifuncionales/',
    },
    {
      referencia:
        'Vaello, J. (2019). Lenguaje de contactos. Automatismo industrial.',
      link:
        'https://automatismoindustrial.com/automatas/g-1-introduccion-automatas-programables-plcs/d-9-4-lenguaje-de-contactos/',
    },
    {
      referencia: 'Vásquez, V. (s. f.). Automation Studio.',
      link: 'http://homepage.cem.itesm.mx/vlopez/grafcet.htm',
    },
  ],
  glosario: [
    {
      termino: 'Circuitos combinacionales',
      significado:
        'las salidas únicamente dependen de la combinación de las entradas y no de la historia anterior del circuito, y no disponen de memoria.',
    },
    {
      termino: 'Circuitos secuenciales',
      significado:
        'las salidas dependen de la historia anterior del circuito, de la combinación de las entradas; disponen de memoria y del orden de la secuencia.',
    },
    {
      termino: 'Norma IEC',
      significado:
        'son las reglas y definiciones concertadas por la Comisión Electrotécnica Internacional, permiten a los ingenieros y diseñadores hablar el mismo idioma (normalización).',
    },
  ],
  complementario: [
    {
      texto:
        'Daneri, P. (2009). PLC: automatización y control industrial. HASA.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/66558',
    },
    {
      texto:
        'Medina, J., Guadayol, J. (2015). La automatización en la industria química. Edicions UPC.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/61458',
    },
    {
      texto:
        'Mentalidad De Ingeniería. (2021). Conceptos Básicos del Controlador Lógico Programable Explicados [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=NPsepHRSCls&ab_channel=MentalidadDeIngenier%C3%ADa',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Hernando José Góngora Valencia',
        cargo: 'Profesional de diseño curricular',
        centro: 'Centro de Diseño Industrial - Regional Valle del Cauca',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia MIlena Sequeda Cárdenas',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de gestión industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
