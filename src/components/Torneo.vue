<template>
  <div class="box" v-if="hayTorneo">
    <h2 class="subtitle">Info Torneo</h2>
    <label>ID:</label> {{ torneo.id }}
    <b-field grouped group-multiline class="pb-4">
      <b-field label="Año">
        <b-numberinput
          v-model="torneo.anio"
          controls-position="compact"
        ></b-numberinput>
      </b-field>
      <b-field label="Temporada">
        <b-select v-model="torneo.temporada">
          <option value="Verano">Verano</option>
          <option value="Apertura">Apertura</option>
          <option value="Clausura">Apertura</option>
        </b-select>
      </b-field>
      <b-field label="Genero">
        <b-select v-model="torneo.genero">
          <option value="M">Hombres</option>
          <option value="F">Ladies</option>
        </b-select>
      </b-field>
      <b-field label="Dia">
        <b-select v-model="torneo.dia">
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miercoles">Miercoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sabado">Sabado</option>
          <option value="Domingo">Sabado</option>
        </b-select>
      </b-field>
      <b-field label="Categoria">
        <b-input v-model="torneo.categoria"></b-input>
      </b-field>
    </b-field>
    <b-field>
      <div class="buttons mt-4">
        <b-button type="is-primary" label="Actualizar" />
        <b-button type="is-danger" label="Final" />
      </div>
    </b-field>
    <lista-equipos :torneo="torneo.id" v-if="hayTorneo" />
  </div>
</template>

<script>
import ListaEquipos from './ListaEquipos.vue';
export default {
  components: { ListaEquipos },
  props: {
    torneo: {
      id: Number,
      anio: Number,
      temporada: String,
      genero: String,
      dia: String,
      categoria: String,
      activo: Boolean,
    },
  },
  computed: {
    hayTorneo: function () {
      return this.torneo.id !== undefined;
    }
  },
};
</script>

<style>
</style>