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
          p.mb-3  Los lenguajes de programación permiten al usuario escribir las instrucciones o secuencias de órdenes en un sistema informático utilizando algoritmos, de manera que se pueda controlar la máquina y ejecute las tareas deseadas por él. Por medio del <i>software</i>, el usuario interactúa con el equipo, haciendo uso del lenguaje de programación que más le conviene, teniendo en cuenta que existen varios tipos: esquema de contactos, mnemónico o listado de contactos, esquema funcional. En el siguiente recurso, se profundizará en cada lenguaje: 

      .col-lg-5.slideInLeft
        figure.mb-5(data-aos='flip-left')
          img(src="@/assets/curso/t2-i1.jpg", alt="imagen decorativa")

    .tarjeta
      TabsC.color-acento-botones.mt-5.bg-verde-claro
        .div(titulo="")
          .row
            figure
              img(src='@/assets/curso/t2-t1.svg', alt='imagen decorativa')
        .py-3.py-md-4(titulo="Esquema de contactos")
          .row.my-5.justify-content-center
            .col-10.col-lg-5
              .titulo-sexto.color-secundario
                h4 Esquema de contactos
              p.mb-4 Este lenguaje gráfico se deriva del lenguaje de relevadores o Ladder, es muy utilizado para programar los PLC y se representa mediante contactos, solenoides y otros símbolos (diagrama de relés) eléctricos básicos de la norma IEC. Su representación inicia con:
              .tarjeta.cc1.p-4.mb-4
                p.mb-0.text-center  Dos líneas verticales que simbolizan las líneas de alimentación, entre las cuales se instalan las instrucciones.
              .tarjeta.cc2.p-4.mb-4
                p.mb-0.text-center  Es comprendido por las ramas de contactos conectados en serie o en paralelo que deben dar respuesta a una salida que acciona una función especial o puede activar una bobina. 
              .tarjeta.cc3.p-4.mb-4
                p.mb-0.text-center Los símbolos básicos son el contacto normalmente abierto, contacto normalmente cerrado y salida.            
            .col-8.col-lg-5
              figure
                img(src='@/assets/curso/t2-t2.png', alt='imagen decorativa')

        .py-3.py-md-4(titulo="Mnemónico o lista de instrucciones")
          .row.my-5.justify-content-center
            .col-lg-11
              .titulo-sexto.color-secundario
                h4 Mnemónico o lista de instrucciones
              p.mb-3 Es el conjunto de códigos simbólicos correspondientes a cada instrucción, los fabricantes utilizan sus propios códigos y nomenclatura para las variables del sistema.
              p.mb-3 El lenguaje mnemónico es similar al utilizado en el ensamblador del micro. El estándar utilizado es el IEC 1131-3 (IEC 65), tanto para lenguajes gráficos como textuales, y se han definido 5 para la programación de los PLC.
              .row.mb-5.justify-content-center
                .col-lg-4
                  .tarjeta.color-primario.p-4.mb-4
                    .row
                      .col-lg-3
                        figure
                          img.nW(src='@/assets/curso/t2-icx1.svg', alt='imagen decorativa')
                      .col-lg-9
                        .h5 Gráfico secuencial de funciones (Grafcet).
                .col-lg-4
                  .tarjeta.color-primario.p-4.mb-4
                    .row
                      .col-lg-3
                        figure
                          img.nW(src='@/assets/curso/t2-icx1.svg', alt='imagen decorativa')
                      .col-lg-9
                        .h5 Lista de instrucciones (LDI o AWL), texto estructurado.
                .cleafix
                .col-lg-4
                  .tarjeta.color-primario.p-4.mb-4
                    .row
                      .col-lg-3
                        figure
                          img.nW(src='@/assets/curso/t2-icx1.svg', alt='imagen decorativa')
                      .col-lg-9
                        .h5 Diagrama de flujo Y.
                .col-lg-4
                  .tarjeta.color-primario.p-4.mb-4
                    .row
                      .col-lg-3
                        figure
                          img.nW(src='@/assets/curso/t2-icx1.svg', alt='imagen decorativa')
                      .col-lg-9
                        .h5 Diagrama de contactos.

        .py-3.py-md-4(titulo="Gráfico secuencial de funciones (SFC o Grafcet)")
          .row.my-5.justify-content-center
            .col-10.col-lg-5
              .titulo-sexto.color-secundario
                h4 Gráfico secuencial de funciones (SFC o Grafcet)
              p.mb-3 Este lenguaje gráfico permite la representación del programa en forma de secuencias, se basa en elementos básicos por pasos y transiciones de orden cronológico, es una forma lógica y específica para programar el PLC con un alto nivel.
              ul.lista-ul
                li
                  i.fas.fa-check
                  p.mb-0  <b>Etapa</b>: define un estado en el que se encuentra el automatismo. Las etapas de inicio se marcan con un doble cuadrado.
                li
                  i.fas.fa-check
                  p.mb-0  <b>Acción asociada</b>: define la acción que va a realizar la etapa, por ejemplo, conectar un contacto, desconectar una bobina, etc.      
                li
                  i.fas.fa-check
                  p.mb-0  <b>Transición</b>: es la condición o condiciones que, conjuntamente con la etapa anterior, hacen evolucionar el Grafcet de una etapa a la siguiente, por ejemplo, un pulsador, un detector, un temporizador, etc.

            .col-8.col-lg-5
              figure
                img(src='@/assets/curso/t2-t3.png', alt='imagen decorativa')

            .col-lg-10
              .cajon.color-primario.p-4
                p.mb-0  <b>Como ejemplo:</b> un arranque Estrella – Triángulo de un motor trifásico asíncrono. El ciclo de funcionamiento se inicia con el pulsador de marcha SM que activa los contactores de estrella y línea, para que, pasado un tiempo (T0), se desconecte el estrella y entre el triángulo. Además, tendrá un relé térmico (FR) que parará la maniobra en caso de avería y activará una luz de emergencia, y un pulsador de paro (SP) 

        .py-3.py-md-4(titulo="Lista de instrucciones")
          .row.my-5.justify-content-center
            .col-lg-10
              .titulo-sexto.color-secundario
                h4 Lista de instrucciones (IL o AWL)
              p.mb-3 Este es similar al lenguaje ensamblador y es de bajo nivel de complejidad, permite solo una operación por línea, por ejemplo, introducir un registro; se adecúa a pequeñas aplicaciones. Por el contrario, el de texto estructurado (ST), que es de alto nivel y su estructura es por bloques, en sintaxis similar al Pascal, suele ser empleado para realizar rápidamente sentencias, con un amplio rango de diferentes tipos de datos que incluye valores analógicos y digitales en sus variables.

            .col-lg-8
              figure
                img.nW.centered(src='@/assets/curso/t2-t4.png', alt='imagen decorativa')

        .py-3.py-md-4(titulo="Diagrama de contactos")
          .row.my-5.justify-content-center
            .col-lg-10
              .titulo-sexto.color-secundario
                h4 Diagrama de contactos
              p.mb-3 El diagrama de contactos (ladder diagram LD) es un juego estandarizado de símbolos del estándar IEC, representado por los siguientes símbolos y conectados en dos líneas de transmisión, donde se conectan los elementos de derecha a izquierda y de arriba hacia abajo.

            .col-lg-6
              ul.lista-ul
                li
                  i.far.fa-check-circle
                  p.mb-0  El flujo de la señal eléctrica va de izquierda a derecha y de arriba abajo.
                li
                  i.far.fa-check-circle
                  p.mb-0  A una rama de circuito en esquema de contactos le corresponde una secuencia de instrucciones en forma mnemónica (conjunto de símbolos).                    
                li
                  i.far.fa-check-circle
                  p.mb-0  Todas las ramas del circuito se inician con una instrucción LOAD.  
                li
                  i.far.fa-check-circle
                  p.mb-0  Una bobina no puede estar conectada directamente de la barra de inicio, es necesario interponer un contacto normalmente cerrado.  
                li
                  i.far.fa-check-circle
                  p.mb-0  A la derecha de una bobina no es posible programar ningún contacto.                    
                li
                  i.far.fa-check-circle
                  p.mb-0  El número de contactos posibles en serie o en paralelo es prácticamente ilimitado.  
                li
                  i.far.fa-check-circle
                  p.mb-0  Es posible colocar en paralelo 2 o más bobinas.  

            .col-lg-4
              figure
                img.nW.centered(src='@/assets/curso/t2-t5.png', alt='imagen decorativa')
        
        .py-3.py-md-4(titulo="Diagrama de funciones (function block diagram o FBD)")
          .row.my-5.justify-content-center
            .col-lg-10
              .titulo-sexto.color-secundario
                h4 Diagrama de funciones (function block diagram o FBD)
              p.mb-3 Es un lenguaje gráfico utilizado en la programación de elementos representados por bloques para ser conectados de manera análoga al esquema de un circuito. Se adecúa en aplicaciones que involucran el flujo de información o datos entre componentes de control.

            .col-lg-8
              figure
                img(src='@/assets/curso/t2-t6.png', alt='imagen decorativa')
              figcaption  Nota. Imagen tomada y adaptada de Schneider Electric (2019).

        .py-3.py-md-4(titulo="Organización de tareas y bloques de funciones")
          .row.my-5.justify-content-center
            .col-lg-5
              .titulo-sexto.color-secundario
                h4 Organización de tareas
              p.mb-3 La optimización de recursos en el controlador se logra con la organización de las tareas, permitiendo fragmentar una aplicación en varios pequeños programas concretos que se ejecutarán para llevar a cabo una acción de control de una tarea en la E/S asociada.
            .col-lg-5
              .titulo-sexto.color-secundario
                h4 Bloques de funciones (FB)
              p.mb-3 Las funciones representadas por bloques son ejecutadas como PID, estas se adaptan al estándar IEC. El control se puede hacer por parámetros externos, mientras los algoritmos internos permanecen ocultos y emplean la programación orientada a objetos.
            .clearfix.mb-4
            .col-lg-4
              figure
                img(src='@/assets/curso/t2-t7.png', alt='imagen decorativa')








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
