<template>
  <b-field grouped>
      <b-field label="Elegir el día:">
            <b-datepicker
                v-model = "dia"                 
                v-on:input ="emitirCambioDia"
                icon="calendar-today"
                trap-focus>
            </b-datepicker>
        </b-field>
         <b-field label="Sede">
            <b-select placeholder="Sede" icon="soccer-field" v-on:input="emitirCambioSede" v-model="sede">
                <option value="-1">TODAS</option>
                <option v-for="sede in sedes" :key="sede.id" :value="sede.id">{{sede.nombre}}</option>
            </b-select>
        </b-field>
  </b-field>
</template>

<script>
export default {
    emits : ['cambiodia','cambiosede'],
    data() {
        return {
            sedes : Array,
            sede : -1,
            dia : new Date()
        }
    },    
    async mounted() {
        const {data} = await this.$api.sedes.fetch();
        this.sedes = data;
        this.emitirCambioDia();
        this.emitirCambioSede();
    },
    methods : {
        emitirCambioDia() {
            this.$emit('cambiodia',this.dia);
        },
        emitirCambioSede() {
            this.$emit('cambiosede',this.sede);
        }
    }
}
</script>

<style>

</style>