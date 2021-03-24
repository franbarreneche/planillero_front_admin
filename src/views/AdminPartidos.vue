<template>
  <section class="section">
    <h1 class="title">PARTIDOS</h1>
    <lista-partidos />
  </section>
</template>

<script>
import ListaPartidos from "../components/ListaPartidos.vue"


export default {
  name : 'AdminPartidos',
  components: { ListaPartidos }  
}
</script>

<style>

</style>