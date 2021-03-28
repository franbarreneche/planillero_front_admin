<template>
  <div class="section">
    <h1 class="title">TORNEOS</h1>
    <lista-torneos dia="Lunes"/>
    <lista-torneos dia="Martes"/>
    <lista-torneos dia="Miercoles"/>
    <lista-torneos dia="Jueves"/>
    <lista-torneos dia="Sabado"/>
    <lista-torneos dia="Domingo"/>
  </div>
</template>

<script>
import ListaTorneos from '../components/ListaTorneos.vue'
export default {
  components: { ListaTorneos },
  name : 'AdminTorneos'
}
</script>
