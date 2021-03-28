<template>
  <section class="section">
    <div class="box">
    <filtros @cambiosede="cambioSede" @cambiodia="cambioDia" />
    <h2 class="subtitle">Lista de Partidos</h2>
    <lista-partidos :dia="dia" :sede="sede_id" />
    <div class="buttons mt-4">
      <b-button @click="pdf" type="is-info" icon-left="pdf-box">PDF</b-button>
      <b-button @click="csv" type="is-dark" icon-left="file-delimited"
        >CSV</b-button
      >
    </div>
    </div>
  </section>
</template>

<script>
import Filtros from "../components/Filtros.vue";
import ListaPartidos from "../components/ListaPartidos.vue";
import PDF from "../services/pdf.js";
import CSV from "../services/csv.js";

export default {
  name: "AdminPartidos",
  components: { ListaPartidos, Filtros },
  data() {
    return {
      dia: new Date(),
      sede_id: Number,
    };
  },
  methods: {
    pdf() {
      PDF.generarPDF("LISTA DE PARTIDOS");
      this.$buefy.notification.open("PDF");
    },
    csv() {
      CSV.generarCSV("LISTA DE PARTIDOS");
      this.$buefy.notification.open("CSV");
    },
    cambioSede: function (value) {      
      this.sede_id = value;
    },
    cambioDia: function (value) {
      this.dia = value;
    },
  },
};
</script>

<style>
</style>