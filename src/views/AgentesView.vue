<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue';

import axios from 'axios';
import CardAgente from '../components/CardAgente.vue'

const response = ref('[]')
const status = ref(false)


const traerAgenes = async () => {
    try {
        // Realizar solicitud GET con JSON
        const result = await axios.get('http://localhost:3000/agentes/todos');
        response.value = result.data;
        if (result.status == 200) {
            status.value = true
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);

    }
}

onMounted(() => {
    traerAgenes();
});





</script>
<template>
    <div class="main-body">

        <!-- Contenedor Principal -->
        <div class="container-fluid main-content">
            <div class="row">
                <!-- Aside (Menú) -->
                <aside class="col-2">
                    <router-link to="/altasAgentes">
                        <button type="button" class="btn btn-light btn-sm w-100">Alta</button>
                        <button type="button" class="btn btn-light btn-sm w-100">Buscar</button>
                    </router-link>
                </aside>
                <!-- Contenedor Principal -->
                <main class="col-10">
                    <div v-if="status">
                        <div class="d-flex flex-row flex-wrap">
                            <div v-for="agente in response" :is="agente.dni">
                                <CardAgente :agente="agente" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>






</template>
<style>
.main-body {
    display: flex;
    min-height: 100vh;
    flex-direction: row;
}

.main-content {
    flex: 1;
}

p {
    margin: 0;
}
</style>