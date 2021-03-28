<template>
  <div class="section">
    <div class="columns">
      <div class="column">
        <acordeon-torneos @ver-torneo="showTorneo" /> 
      </div>
      <div class="column">
        <nuevo-torneo />
        <torneo :torneo="torneo"/>
      </div>
    </div>   
  </div>
</template>

<script>
import AcordeonTorneos from '../components/AcordeonTorneos.vue'
import NuevoTorneo from '../components/NuevoTorneo.vue'
import Torneo from '../components/Torneo.vue'

export default {
  components: {AcordeonTorneos,Torneo, NuevoTorneo },
  name : 'AdminTorneos',
  data() {
    return {
      torneo : Object
    }
  },
  methods : {
    showTorneo(event) {
      this.torneo = event
    }
  }

}
</script>
