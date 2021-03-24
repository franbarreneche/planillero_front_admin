<template>
  <b-table :data="partidos" :loading="isLoading">
    <b-table-column field="dia" label="Dia" v-slot="props">
        {{(new Date(props.row.dia)).toLocaleDateString()}}
    </b-table-column>
    <b-table-column field="local" label="Local" v-slot="props">
        {{props.row.local.nombre}}
    </b-table-column>
    <b-table-column field="visitante" label="Visitante" v-slot="props">
        {{props.row.visitante.nombre}}
    </b-table-column>
    <b-table-column field="hora" label="Hora" v-slot="props">
        {{props.row.hora}}hs
    </b-table-column>
    <b-table-column field="estado" label="Estado" v-slot="props">
        <b-tag v-if="estaTerminado(props.row.estado)" type="is-success">T</b-tag>
        <b-tag v-if="!estaTerminado(props.row.estado)" type="is-danger">P</b-tag>
    </b-table-column>
    <b-table-column label="Acciones" v-slot="props">
        <b-button type="is-primary" size="small"
            icon-right="pencil"
            @click="$emit('ver-partido',props.row.id)">
        </b-button>
    </b-table-column>
</b-table>  
</template>

<script>
export default {
    emits : ['ver-partido'],
    data() {
        return {
            isLoading : false,
            partidos : []
        }
    },
    async mounted() {        
        this.isLoading = true;    
        const {data} = await this.$api.partidos.fetch();
        this.partidos = data;
        this.isLoading = false;
  },
  methods : {
      estaTerminado(estado) {
          return estado != "PROGRAMADO";
      }
  }
}
</script>

<style>

</style>