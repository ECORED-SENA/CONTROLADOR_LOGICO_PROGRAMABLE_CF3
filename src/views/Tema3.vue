<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones(data-aos='flip-up')
      .titulo-principal__numero
        span 3
      h1 Gráfico secuencial de funciones (Grafcet)

    .row.mb-5
      .col-lg-7.slideInLeft    
        .cajon-b.color-acento-secundario.p-3.mb-5(data-aos='flip-up')
          p.mb-3  La programación es una sucesión ordenada de instrucciones escritas en un lenguaje de programación, cuyo objetivo es controlar un determinado proceso. El Grafcet permite una lógica amigable en la programación y brinda beneficios en el uso de los PLC, debido a la facilidad de su aplicación mediante la utilización de elementos gráficos y reglas de evolución que reflejan la dinámica del comportamiento del sistema. Todo automatismo secuencial o concurrente se puede estructurar en una serie de etapas que representan estados o subestados del sistema en los cuales se realiza una o más acciones, así como transiciones, que son las condiciones que deben darse para pasar de una etapa a otra.
          p.mb-3  Hacen parte de los elementos básicos de un Grafcet, las etapas, las acciones, la transición y la receptividad.

      .col-lg-5.slideInUp
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t3-i1.jpg", alt="imagen decorativa")

    .row.mb-5.justify-content-center
      .col-lg-4(data-aos='flip-left')
        figcaption.customCaption  <b>Figura</b> Elementos básicos de un GRAFCET
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t3-i2.png", alt="Elementos básicos de un GRAFCET")        
        figcaption  Nota. Vásquez (s. f.).

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Etapas

    .row.mb-5
      .col-lg-2
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t3-ic1.svg", alt="imagen decorativa")
      .col-lg-10(data-aos='slide-left')
        p.mb-3  Las etapas iniciales se representan con un doble cuadrado y se activan de forma condicional; cuando en el software se inserta una nueva, esta adiciona un número consecutivo de 1 a 99. Cada sistema debe tener al menos una de estas etapas; las etapas normales se representan por cuadrados identificados por números y muestran los estados del sistema, pueden ser activas o inactivas.

    .row.mb-5.justify-content-center
      .col-lg-4(data-aos='flip-left')
        figcaption.customCaption  <b>Figura</b> Etapas GRAFCET
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t3-i3.png", alt="Etapas GRAFCET")        
        figcaption  Nota. Vásquez (s. f.).


    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Acciones

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Transiciones

    .row.mb-5
      .col-lg-2
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t3-ic2.svg", alt="imagen decorativa")
      .col-lg-10(data-aos='slide-left')
        p.mb-3  Son las condiciones que el sistema debe superar para pasar de una etapa a otra y se representan por un pequeño segmento horizontal cortando la línea de enlace entre dos etapas. Hay transiciones de entrada y de salida. Las receptividades son la condición o condiciones que se deben superar para poder pasar una transición. Por ejemplo: 
        p.mb-3  Las líneas de enlace son líneas verticales u horizontales que unen con una dirección significativa, a no ser que indiquen lo contrario las distintas etapas con las transiciones y las transiciones con las etapas.
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.r-0.color-primario--borde
          .row
            .col-lg-6
              .c3.p-4.h-100.d-flex.align-items-center
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  Una condición simple [A y]
                  li
                    i.fas.fa-check
                    p.mb-0  Una función booleana [( A y + A k)* A a ' * ] 
                  li
                    i.fas.fa-check  
                    p.mb-0   La señal de un temporizador o contador [ T03 ]
                  li
                    i.fas.fa-check
                    p.mb-0  La activación de otra etapa del Grafcet [ X 2 ] 
                  li
                    i.fas.fa-check
                    p.mb-0  Donde X indica que la receptividad está condicionada al hecho que la etapa 2 este activa.                                       
                                         
            .col-lg-6
              .p-4
                figcaption.customCaption  <b>Figura</b> Transiciones Grafcet  
                figure.mb-5(data-aos='flip-left')
                  img.nW.centered(src="@/assets/curso/t3-i4.png", alt="imagen decorativa")            
                figcaption  Nota. Leiva (2016).

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Diseño y estructuras

    .row.mb-5
      .col-lg-2
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t3-ic3.svg", alt="imagen decorativa")
      .col-lg-9(data-aos='slide-left')
        p.mb-4  Los diagramas se dibujan teniendo en cuenta la sucesión alternada de las etapas y sus transiciones
        .cajon.p-4.color-primario(data-aos='flip-up') 
          .row
            .col-1
              figure
                img.nW(src="@/assets/curso/t3-ic11.svg", alt="imagen decorativa")
            .col-10
              p.mb-0 No se pueden presentar dos etapas seguidas ni dos transiciones seguidas.   

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Desarrollo

    p.mb-5  En los siguientes ejemplos se evidencia cómo hacer un correcto e incorrecto desarrollo del Grafcet:

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Ejemplo 1")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            .tarjeta.color-acento-contenido--borde.h-100
              br
              figure.mb-4(data-aos='flip-up')
                img.nW.centered(src="@/assets/curso/txt-w.svg", alt="imagen decorativa")

              figure.mb-4(data-aos='flip-up')
                img.nW.centered(src="@/assets/curso/t3-c1.png", alt="imagen decorativa") 
              .wrap-txt Entre las etapas 200 y 201 o entre las etapas 200 y 202 hay dos condiciones para la transición (000 y 001 o 000 y 002). No es correcto.    
          .col-md-5.mb-4.mb-md-0
            .tarjeta.color-acento-botones--borde.h-100
              br
              figure.mb-4(data-aos='flip-up')
                img.nW.centered(src="@/assets/curso/txt-R.svg", alt="imagen decorativa")

              figure.mb-4(data-aos='flip-up')
                img.nW.centered(src="@/assets/curso/t3-c2.png", alt="imagen decorativa") 
              .wrap-txt Entre las etapas 200 y 201 o entre las etapas 200 y 202 hay dos condiciones para la transición (000 y 001 o 000 y 002). No es correcto.    

      .py-3.py-md-4(titulo="Ejemplo 2")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            .tarjeta.color-acento-contenido--borde.h-100
              br
              figure.mb-4(data-aos='flip-up')
                img.nW.centered(src="@/assets/curso/txt-w.svg", alt="imagen decorativa")

              figure.mb-4(data-aos='flip-up')
                img.nW.centered(src="@/assets/curso/t3-c3.png", alt="imagen decorativa") 
              .wrap-txt No puede haber dos etapas seguidas, ni tampoco dos transiciones seguidas. 
          .col-md-5.mb-4.mb-md-0
            .tarjeta.color-acento-botones--borde.h-100
              br
              figure.mb-4(data-aos='flip-up')
                img.nW.centered(src="@/assets/curso/txt-R.svg", alt="imagen decorativa")

              figure.mb-4(data-aos='flip-up')
                img.nW.centered(src="@/assets/curso/t3-c4.png", alt="imagen decorativa") 
              .wrap-txt Para realizar, se deben poner todas las acciones asociadas en la misma etapa.

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Evolución
    p.mb-5  El sistema solo puede evolucionar si:
    .row.mb-5.justify-content-center
      .col-lg-4
        .tarjeta.c1.text-center.p-4
          figure.mb-4(data-aos='flip-left')
            img.nW.centered(src="@/assets/curso/t3-ic-check.svg", alt="Evolución del sistema")  
          .h4 La validación de la transición, las etapas de entrada a la transición deben estar activas.      

      .col-lg-4
        .tarjeta.c1.text-center.p-4
          figure.mb-4(data-aos='flip-left')
            img.nW.centered(src="@/assets/curso/t3-ic-check.svg", alt="Evolución del sistema")  
          .h4 Que sea cierta la receptividad asociada, ser ciertas las condiciones de la transición.     

    p.mb-5  La primera transición se podrá validar si la etapa 123 está activa y, además, se cumple la condición 000. En este momento, deja de estar activa la etapa 123 y toma el relevo la 124. Las etapas 200 y 210 son etapas de entrada a la transición.   

    .row.mb-5.justify-content-center
      .col-lg-4(data-aos='flip-left')
        figcaption.customCaption  <b>Figura</b> Evolución del sistema
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t3-p1.png", alt="Evolución del sistema")        
        figcaption  Nota. Leiva (2016).

    p.mb-5  Para validar la transición, deben estar activas las dos etapas. Para poder entrar a la etapa 220, la transición tiene que estar validada y se debe cumplir la receptividad asociada (003) a la transición.
    
    .row.mb-5.justify-content-center
      .col-lg-4(data-aos='flip-left')
        figcaption.customCaption  <b>Figura</b> Evolución del sistema
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t3-p2.png", alt="Evolución del sistema")        
        figcaption  Nota. Meneses (2018).

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Estructuras básicas
    p.mb-5  Existen procesos que requieren estructuras más complejas, en las que se representan bucles, tomas de decisiones o tareas simultáneas que deben sincronizarse. Para estos casos, el GRAFCET dispone de otras estructuras básicas a partir de las cuales pueden generarse los diagramas de dichos progresos. Conózcalas a continuación:

    .tarjeta.mb-5.bg-sliders.p-5.shadow-box
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            .h4.color-secundario Secuencia única
            p Es cuando en el diagrama hay una sola rama; el conjunto de etapas se irá activando una tras la otra.
        
          .col-md-6
            figure
              img(src='@/assets/curso/t3-s1.png', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            .h4.color-secundario Bifurcación en O. Selección de secuencia
            p Se presenta cuando, al llegar a un punto, se encuentra una bifurcación en O, en la que será necesario escoger cuál de las distintas sucesiones de etapas y transiciones se debe seguir.
          .col-md-6
            figure
              img(src='@/assets/curso/t3-s2.png', alt='imagen decorativa')
              
        .row
          .col-md-6.mb-4.mb-md-0
            .h4.color-secundario Giro a derecha o a izquierda de un motor
            p Para seleccionar el sentido de giro de un motor, se utiliza la bifurcación en O. Un motor puede girar a la derecha o a la izquierda.
          .col-md-6
            figure
              img(src='@/assets/curso/t3-s3.png', alt='imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            .h4.color-secundario Bifurcación en Y.
            p Trabajos en paralelo: en automatismo, habrá una bifurcación en Y o "Trabajos paralelos" cuando, a partir de un punto, debe evolucionar de forma simultánea por todas las ramas. Al final de estas, se encontrarán  unas etapas de espera (108,132,155). El sistema continuará su evolución cuando cada una de las ramas haya llegado a su etapa de espera. El nombre de las etapas de las diferentes ramas puede ser distinto de una a la otra.
          .col-md-6
            figure
              img(src='@/assets/curso/t3-s4.png', alt='imagen decorativa')              

        .row
          .col-md-6.mb-4.mb-md-0
            .h4.color-secundario Motores con trabajos simultáneos
            p Dos motores MA y MB desplazan unas piezas. Primero, el motor MA va desde FcAe FcAd, entonces es ei MB quien lo hace desde FcBe hasta FcBd. Después, los dos vuelven a las posiciones iniciales FcAe y FcBe. El ciclo se reinicia cuando los dos están de nuevo en las posiciones iniciales.
          .col-md-6
            figure
              img(src='@/assets/curso/t3-s5.png', alt='imagen decorativa')       

        .row
          .col-md-6.mb-4.mb-md-0
            .h4.color-secundario Saltos de etapas
            p En un punto, puede haber una bifurcación que provoque un salto sobre el conjunto de etapas, que se siga o no la secuencia completa o bien el salto está determinado por el estado de la condición a la transición (H). También puede realizarse el salto en sentido ascendente (en este caso, se indica en las líneas de enlace), como pasa en los bucles.
          .col-md-6
            figure
              img(src='@/assets/curso/t3-s6.png', alt='imagen decorativa')    

        .row
          .col-md-6.mb-4.mb-md-0
            .h4.color-secundario Bucles
            p Habrá un bucle o estructura repetitiva (mientras) cuando una o un conjunto de etapas se repitan varias veces, controladas por un contador, temporizador o hasta que se cumpla una condición determinada. El ciclo de lavado de una lavadora repite varias veces esta estructura (giro a la derecha espera, giro a la izquierda, espera).
          .col-md-6
            figure
              img(src='@/assets/curso/t3-s7.png', alt='imagen decorativa')    


        .row
          .col-md-6.mb-4.mb-md-0
            .h4.color-secundario Subrutina
            p Una subrutina es una parte de un programa que realiza una tarea concreta, a la que se puede recurrir una o varias veces por parte del programa principal. Una vez realizadas las acciones de la subrutina, el programa continúa en el punto donde estaba.   
          .col-md-6
            figure
              img(src='@/assets/curso/t3-s8.png', alt='imagen decorativa')    

    br
    br

    p.mb-5.text-bold  Para seguir aprendiendo sobre el Gráfico secuencial de funciones Grafcet
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t3-im1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .h3.mb-1 La automatización en la industria química
                  p Ingrese al siguiente libro y lea el capítulo 6 y conozca algunos ejemplos aplicados de Grafcet.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/61458" target="_blank")
                    span Enlace
                    i.fas.fa-link












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
