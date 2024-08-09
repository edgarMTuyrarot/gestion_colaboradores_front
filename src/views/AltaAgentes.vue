<script setup>
import axios from 'axios';
import { ref } from 'vue'

const response = ref('')
const formData = ref({
    nombre:"",
    apellido:"",
    usuario_teco:"",
    legajo:"",
    score:"",
    dni:"",
    telefono:"",
    mail:"",
});
const submitForm = async () => {
    try {
        // Configurar encabezados para enviar JSON
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // Realizar solicitud POST con JSON
        const result = await axios.post('http://localhost:3000/agentes/crear', formData.value, config);
        response.value = result.data;
        console.log(response.value)
    } catch (error) {
        console.error('Error al enviar los datos:', error);

    }
};
</script>
<template>
 
        <div v-if="!response">
            <form @submit.prevent="submitForm" class="w-25 m-auto mb-3">
                <h5>Registrar Nuevo Agente</h5>
                <input v-model="formData.nombre" class="form-control mb-2" type="text" placeholder="Nombre">
                <input v-model="formData.apellido" class="form-control mb-2" type="text" placeholder="Apellido">
                <input v-model="formData.dni" class="form-control mb-2" type="text" placeholder="DNI">
                <input v-model="formData.mail" class="form-control mb-2" type="text" placeholder="Mail">
                <input v-model="formData.legajo" class="form-control mb-2" type="text" placeholder="Legajo">
                <input v-model="formData.telefono" class="form-control mb-2" type="text" placeholder="Telefono">
                <input v-model="formData.usuario_teco" class="form-control mb-2" type="text" placeholder="Usuario">
                <input v-model="formData.score" class="form-control mb-2" type="text" placeholder="Score">
                <button type="submit" class="btn btn-light btn-sm mt-2">Guardar</button>
            </form>
        </div>
        <div v-else class="m-auto">
            <div class="m-auto">
                <h5>¡Agente Creado!</h5>
            </div>
        </div>    

</template>