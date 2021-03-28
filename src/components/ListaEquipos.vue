<template>
    <div>
        <label>Equipos</label>
        <b-table :data="equipos" :loading="isLoading" narrowed>
            <b-table-column field="nombre" label="Nombre" v-slot="props">
                {{props.row.nombre}}
            </b-table-column>
            <b-table-column field="acciones" label="Acciones" v-slot="props">
                <b-button type="is-danger" label="Borrar" size="is-small" @click="borrarEquipo(props.row.id)"/> 
            </b-table-column>
        </b-table>
        <b-button type="is-primary"  label="Agregar" @click="agregarEquipo" />
    </div>
</template>

<script>
export default {
  props: ['torneo'],
  data() {
    return {
      isLoading: false,
      equipos: [],
    };
  },
  mounted() {
    this.cargarLista();
  },
  watch: {
    torneo: function () {
      this.cargarLista();
    }
  },
  methods: {
    async cargarLista() {
      this.isLoading = true;      
      const { data } = await this.$api.torneos.get(this.torneo + "/equipos");
      this.equipos = data;
      this.isLoading = false;
    },
    borrarEquipo(id) {
        console.log("Borrar equipo "+id);
    },
    agregarEquipo() {
        console.log("Abrir modal para agregar Equipo");
    }
  },
};
</script>

<style>
</style>