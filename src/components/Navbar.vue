<template>
    <b-navbar class="is-dark">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/INDIANA_BLANCO_HORIZONTAL_150.png"
                    alt="Logo Torneos Indiana"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" :to="{name : 'Home'}">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{name : 'Torneos'}">
                Torneos
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{name : 'Partidos'}">
                Partidos
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name : "Navbar"
}
</script>

<style>

</style>