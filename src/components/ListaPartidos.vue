<template>
  <b-table :data="partidos" :loading="isLoading">
    <b-table-column field="dia" label="Dia" v-slot="props">
      <!--{{ new Date(props.row.dia).toLocaleDateString() }}-->
      {{props.row.dia}}
    </b-table-column>
    <b-table-column field="local" label="Local" v-slot="props">
      {{ props.row.local.nombre }}
    </b-table-column>
    <b-table-column field="visitante" label="Visitante" v-slot="props">
      {{ props.row.visitante.nombre }}
    </b-table-column>
    <b-table-column field="hora" label="Hora" v-slot="props">
      {{ props.row.hora.slice(0,-3) }}hs
    </b-table-column>
    <b-table-column field="sede" label="Sede" v-slot="props">
      {{ props.row.sede.nombre }}
    </b-table-column>
    <b-table-column field="estado" label="Estado" v-slot="props">
      <b-tag v-if="estaTerminado(props.row.estado)" type="is-success">T</b-tag>
      <b-tag v-if="!estaTerminado(props.row.estado)" type="is-danger">P</b-tag>
    </b-table-column>
    <b-table-column label="Acciones" v-slot="props">
      <b-button
        type="is-primary"
        size="is-small"
        icon-right="pencil"
        @click="$emit('ver-partido', props.row.id)"
      >
      </b-button>
    </b-table-column>
  </b-table>
</template>

<script>
export default {
  emits: ["ver-partido"],
  props: ["dia","sede"],
  data() {
    return {
      isLoading: false,
      partidos: [],
    };
  },
  async mounted() {
    this.cargarLista();
  },
  watch: {
    dia: function () {
      this.cargarLista();
    },
    sede: function () {
      this.cargarLista();
    },
  },
  methods: {
    estaTerminado(estado) {
      return estado != "PROGRAMADO";
    },
    async cargarLista() {
      this.isLoading = true;
      let config = {
          filters : []
      };
      if(this.dia != null && this.dia != undefined) config.filters.push({field : "dia", "operator" : "=", value : this.dia});
      if(this.sede != null && this.sede >= 0) config.filters.push({field : "sede_id", "operator" : "=", value : this.sede});
      const { data } = await this.$api.partidos.search(config);
      this.partidos = data;
      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>