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
        p.mb-5 La necesidad de mitigar la pandemia por COVID-19 ha obligado a la comunidad científica internacional, a desarrollar una serie de investigaciones y desarrollos tendientes a presentar una vacuna para hacerle frente a esta enfermedad que aumenta día a día su morbi mortalidad en Colombia. Es así, como en diciembre de 2020, la comunidad científica presenta los resultados de varios desarrollos de vacunas, que ofrecen eficacia y seguridad, respaldados por estudios clínicos rigurosos.
      .col-lg-5
        figure.mb-5
          img(src="@/assets/curso/banner-intro.jpg", alt="Texto que describa la imagen")



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
