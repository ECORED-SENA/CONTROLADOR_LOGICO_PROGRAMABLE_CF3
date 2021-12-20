<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones(data-aos='flip-up')
      .titulo-principal__numero
        span 1
      h1 Sistemas lógicos
    .row.mb-5.justify-content-center
      .col-lg-10.slideInUp
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.custom-cardBlock
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 El uso de las tecnologías basadas en la utilización de equipos electrónicos en el sector industrial ha incorporado la aplicación de sistemas digitales compuestos por circuitos combinacionales y/o secuenciales, en reemplazo de los sistemas analógicos, permitiendo mayor procesamiento de datos y de transmisión, apoyado en la lógica matemática (álgebra de Boole). A continuación, se presentan los elementos de los sistemas lógicos:

    .tarjeta.bg-sliders2.p-4.mb-5
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center(titulo="1° Elemento")
          .col-md-5.mb-4.mb-md-0
            .h4 Funciones
            p.mb-4 Las funciones lógicas permiten probar la condición para evaluar:  es verdadera (1) o falsa (0), y son conocidos como valores booleanos debido a que la prueba se hace con base en el álgebra de Boole. 
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  Las operaciones se realizan con bloques de funciones básicas en conexiones series, paralelo, negación (NOT), y (AND), o (OR), etc.
              li
                i.fas.fa-check
                p.mb-0  Otras funciones especiales son el temporizador, el revelador de impulsos, el reloj y el generador de pulsos.

          .col-md-5
            figure
              img.nW(src='@/assets/curso/t1-t1.png', alt='imagen decorativa')
            figcaption  Nota. Tomada de Saralegui (2013). 

        .row.justify-content-center(titulo="2° Elemento")
          .col-md-5.mb-4.mb-md-0
            .h4 Registros y acumuladores
            p.mb-4 Todas las operaciones de entradas y salidas efectúan una operación booleana, denominadas <b>registros de entrada y acumuladores</b>. 
          .col-md-5
            figure
              img.nW(src='@/assets/curso/t1-t2.png', alt='imagen decorativa')

        .row.justify-content-center(titulo="3° Elemento")
          .col-md-5.mb-4.mb-md-0
            .h4 Temporizadores
            p.mb-4 Según las marcas y modelos, puede variar la cantidad, normalmente, incorporan 32 temporizadores, que van de T0 a T31, y 32 contadores (de Z0 a Z31). De estos, hay 8 contadores de los que no se borra su registro al desconectar el PLC.
          .col-md-5
            figure
              img.nW(src='@/assets/curso/t1-t3.png', alt='imagen decorativa')
            figcaption  Nota. Tomada de Saralegui (2013). 

        .row.justify-content-center(titulo="4° Elemento")
          .col-md-5.mb-4.mb-md-0
            .h4 Constantes
            p.mb-4 Para cargar los datos, pueden ser de tipo:
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  <b>Decimal</b> (KB) de 8 bits (0 a 255)
              li
                i.fas.fa-check
                p.mb-0  <b>Alfanumérico</b> (KC) de 8 bits (2 caracteres), 16 bits (KB) con 2 bytes de 0 a 255 cada uno y binario natural (KB) de 16 bits

          .col-md-5
            figure
              img.nW(src='@/assets/curso/t1-t4.png', alt='imagen decorativa')


        .row.justify-content-center(titulo="5° Elemento")
          .col-md-5.mb-4.mb-md-0
            .h4 Estructuras de programas
            p.mb-4 Las opciones para estructurar el programa pueden ser de manera lineal y se procesa de manera cíclica; cuando el programa termina la última instrucción, este se repite, retornando a la primera línea de ejecución. 

          .col-md-5
            figure
              img.nW(src='@/assets/curso/t1-t5.png', alt='imagen decorativa')
            figcaption  Nota. Tomado de Control Real Español (2015).

        .row.justify-content-center(titulo="6° Elemento")
          .col-md-10.mb-4.mb-md-0
            .h4 Estructuras de programas
            p.mb-4 Para los programas sencillos, esta es la mejor forma de hacerlo y se utiliza un solo módulo de programa (OB1). La otra es de manera estructurada, en la que el programa se divide en varios módulos; esta se utiliza para realizar tareas de manera compleja. Esta forma logra que los programas sean más claros y que se puedan utilizar módulos, por medio de llamados de otras estructuras, en cualquier momento de ejecución del programa, evitando repetir los códigos de programación; en esta, la ejecución empieza y termina en el módulo de programa (OB1). 

          .col-md-10
            .cajon.color-primario.p-4
              .row
                .col-lg-1
                  figure
                    img.nW(src='@/assets/curso/t1-ic1.svg', alt='imagen decorativa')
                .col-lg-10
                  p.mb-0.text-bold  Se debe tener en cuenta saltar de un módulo de programa (PB) a otro. Siempre que no se superen los 16 bits, el salto debe ser hacia delante. Por ejemplo, saltar del módulo PB1 a PB2, pero no al contrario; no se pueden dar dos saltos a un mismo módulo desde el módulo actual, por ejemplo, saltar varias veces desde PB2 a PB3, pero sí puede ir a PB3 desde varios módulos. 

        .row.justify-content-center(titulo="7° Elemento")
          .col-md-5.mb-4.mb-md-0
            .h4 Módulos
            p.mb-4 Hay diferentes  tipos de módulos que contiene todo PLC:
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  <b>OB1:</b> Los módulos de organización (OB), que son los que gestionan el programa del usuario y están numerados como OB1 (programa principal), OB3 (controlado por alarma), OB13 (controlado por tiempo) y OB22 (sistema operativo).
              li
                i.fas.fa-check
                p.mb-0  <b>FB:</b> Los módulos funcionales (FB), aquí se introducen las partes del programa con uso frecuente o las que poseen mayor complejidad y van desde FB0 a FB63.                
              li
                i.fas.fa-check
                p.mb-0  <b>DB:</b> Los módulos de datos (DB). Se almacena la ejecución del programa, como es el caso de los valores reales, textos, entre otros; sus valores van de DB0 a DB63, módulos  DB1 y DB2 no son utilizados, ya que, es donde se definen las condiciones internas del PLC.
          .col-md-5
            figure
              img.nW(src='@/assets/curso/t1-t6.png', alt='imagen decorativa')

    p.mb-5.text-bold  Para profundizar más sobre los sistemas lógicos:
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t3-im1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .h3.mb-1 PLC: automatización y control industrial
                  p Ingrese al siguiente libro y lea el capítulo 3 para conocer más sobre los sistemas lógicos.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/66558" target="_blank")
                    span Enlace
                    i.fas.fa-link














  
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
