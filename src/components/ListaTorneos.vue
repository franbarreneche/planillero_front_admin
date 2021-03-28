<template>
  <div class="card mb-2">
    <header class="card-header has-background-dark">
      <p class="card-header-title has-text-light">{{ dia }}</p>
    </header>
    <div class="card-body">
    <b-table :data="torneos" :loading="isLoading">
      <b-table-column field="anio" label="Año" v-slot="props">
        {{ props.row.anio }}
      </b-table-column>
      <b-table-column field="temporada" label="Temporada" v-slot="props">
        {{ props.row.temporada }}
      </b-table-column>
      <b-table-column field="genero" label="Genero" v-slot="props">
        <b-tag v-if="props.row.genero == 'M'" type="is-info">M</b-tag>
        <b-tag v-else type="is-danger">F</b-tag>
      </b-table-column>
      <b-table-column field="categoria" label="Categoria" v-slot="props">
        {{ props.row.categoria }}
      </b-table-column>
      <b-table-column label="Acciones" v-slot="props">
        <div class="buttons">
          <b-button
            type="is-primary"
            size="is-small"
            icon-right="pencil"
            @click="$emit('ver-torneo', props.row.id)"
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
    </div>
  </div>
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