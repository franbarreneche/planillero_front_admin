<template>
  <b-table :data="torneos" :loading="isLoading" narrowed>
      <b-table-column field="datos" label="Torneo" v-slot="props">
        {{ props.row.anio }} - {{ props.row.temporada }} - {{ props.row.genero }} - {{ props.row.categoria }}
      </b-table-column>
      <b-table-column  v-slot="props" label="Acciones"> 
        <div class="buttons">
          <b-button
            type="is-primary"
            size="is-small"
            icon-right="pencil"
            @click="$emit('ver-torneo', props.row)"
          >
          </b-button>
          <b-button
            type="is-danger"
            size="is-small"
            icon-right="pencil"
            @click="$emit('eliminar-torneo', props.row.id)"
          >
          </b-button>
        </div>
      </b-table-column>
    </b-table>
</template>

<script>
export default {
  emits: ["ver-torneo", "eliminar-torneo"],
  props: ["dia"],
  data() {
    return {
      isLoading: false,
      torneos: [],
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
    async cargarLista() {
      this.isLoading = true;
      let config = {
        filters: [],
      };
      if (this.dia != null && this.dia != undefined)
        config.filters.push({ field: "dia", operator: "=", value: this.dia });
      const { data } = await this.$api.torneos.search(config);
      this.torneos = data;
      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>