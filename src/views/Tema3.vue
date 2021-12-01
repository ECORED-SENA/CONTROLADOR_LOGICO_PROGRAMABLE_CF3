<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos='flip-up')
      .titulo-principal__numero
        span 3
      h1 Gráfico secuencial de funciones (Grafcet)

    .row.mb-5
      .col-lg-7    
        .cajon-b.color-acento-secundario.p-3.mb-5(data-aos='flip-up')
          p.mb-3  La programación es una sucesión ordenada de instrucciones escritas en un lenguaje de programación, cuyo objetivo es controlar un determinado proceso. El Grafcet permite una lógica amigable en la programación y brinda beneficios en el uso de los PLC, debido a la facilidad de su aplicación mediante la utilización de elementos gráficos y reglas de evolución que reflejan la dinámica del comportamiento del sistema. Todo automatismo secuencial o concurrente se puede estructurar en una serie de etapas que representan estados o subestados del sistema en los cuales se realiza una o más acciones, así como transiciones, que son las condiciones que deben darse para pasar de una etapa a otra.
          p.mb-3  Hacen parte de los elementos básicos de un Grafcet, las etapas, las acciones, la transición y la receptividad.

      .col-lg-5
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
    
    //-- Aqui viene el cajon customizado

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Diseño y estructuras

    .row.mb-5
      .col-lg-2
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t3-ic3.svg", alt="imagen decorativa")
      .col-lg-10(data-aos='slide-left')
        p.mb-4  Los diagramas se dibujan teniendo en cuenta la sucesión alternada de las etapas y sus transiciones
        .cajon.p-4.color-secundario  
          p No se pueden presentar dos etapas seguidas ni dos transiciones seguidas.   

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Desarrollo

    p.mb-5  En los siguientes ejemplos se evidencia cómo hacer un correcto e incorrecto desarrollo del Grafcet:

    //-- Aqui vienen los tabs

    
    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Evolución
    p.mb-5  El sistema solo puede evolucionar si:
    //-- Aqui vienen los cards

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

    //--Aqui viene el slider
  
    p.mb-5.text-bold  Para seguir aprendiendo sobre el Gráfico secuencial de funciones Grafcet
    .row.mb-5.justify-content-center
      .col-lg-10
        //-- Aqui viene el call to action












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
