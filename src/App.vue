<template>
  <div id="app">
    <navbar />
    <router-view class="has-background-light" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components : {
    Navbar,
  }
}
</script>


<style>
</style>
