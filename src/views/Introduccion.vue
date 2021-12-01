<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos='flip-up')
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5  Estimado aprendiz, bienvenido al componente formativo “Funcionamiento del cerebro de las máquinas”. Para iniciar, visualice el siguiente video y conozca más:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5
      .col-lg-7    
        .cajon-b.color-acento-secundario.p-3.mb-5(data-aos='flip-up')
          p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en funcionamiento del cerebro de las máquinas, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la caracterización y uso del Controlador Lógico Programable.

      .col-lg-5
        figure.mb-5(data-aos='flip-up')
          img(src="@/assets/curso/t0-i1.jpg", alt="imagen decorativa")



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
