<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones(data-aos='flip-up')
      .titulo-principal__numero
        span 2
      h1 Lenguajes de programación

    .row.mb-5
      .col-lg-7.slideInRight   
        .cajon-b.color-acento-secundario.p-3.mb-5(data-aos='flip-up')
          p.mb-3  Los lenguajes de programación permiten al usuario escribir las instrucciones o secuencias de órdenes en un sistema informático utilizando algoritmos, de manera que se pueda controlar la máquina y ejecute las tareas deseadas por él. Por medio del software, el usuario interactúa con el equipo, haciendo uso del lenguaje de programación que más le conviene, teniendo en cuenta que existen varios tipos: esquema de contactos, mnemónico o listado de contactos, esquema funcional. En el siguiente recurso, se profundizará en cada lenguaje: 

      .col-lg-5.slideInLeft
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t2-i1.jpg", alt="imagen decorativa")























</template>

<script>
export default {
  name: 'Tema2',
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
