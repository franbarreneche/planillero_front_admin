<template>
    <div class="box">
        <h2 class="subtitle">Lista Torneos</h2>
        <b-collapse
            class="card"
            animation="slide"
            v-for="(collapse, index) of collapses"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                >
                    <p class="card-header-title">
                        {{ collapse.title }}
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>
            <div class="card-content">
                <div class="content">
                    <lista-torneos :dia="collapse.dia" @ver-torneo="$emit('ver-torneo', $event)" />
                </div>
            </div>
        </b-collapse>    
    </div>
</template>

<script>
import ListaTorneos from './ListaTorneos.vue'
 export default {
  components: {ListaTorneos  },
  emits : ['ver-torneo'],
        data() {
            return {
                isOpen: 4,
                collapses: [
                {
                    title: 'Lunes',
                    dia : 'Lunes'
                },
                {
                    title: 'Martes',
                    dia : 'Martes'
                },
                {
                    title: 'Miercoles',
                    dia : 'Miercoles'
                },
                {
                    title: 'Jueves',
                    dia : 'Jueves'
                },
                {
                    title: 'Sabado',
                    dia : 'Sabado'
                },
                {
                    title: 'Domingo',
                    dia : 'Domingo'
                }
                ]
            }
        }
    }
</script>