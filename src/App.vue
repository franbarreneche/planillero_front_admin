<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/parts/navbar.vue';
export default {
  components : {
    Navbar,
  }
}
</script>


<style>
</style>
