<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {useUserStore} from '../stores/userStore.js'
import ToastError from '../components/ToastErroresArrays.vue'


const router = useRouter()
const response = ref('')
const userStore = useUserStore()
const formData = ref({
    mail: '',
    password: '',
    rol:""
});
const submitForm = async () => {
    userStore.registrarse(formData)
};
</script>
<template>
  <form @submit.prevent="submitForm" class="container">
    <div class="w-50 m-auto p-5">
      <h5>Alta de usuarios</h5>
      <input
        v-model="formData.nombre"
        type="text"
        class="form-control m-1"
        name="nombre"
        placeholder="Nombre"
      />
      <input
        v-model="formData.mail"
        type="text"
        class="form-control m-1"
        name="mail"
        placeholder="Email"
      />
      <input
        v-model="formData.password"
        type="password"
        class="form-control m-1"
        name="password"
        placeholder="Contraseña"
      />
      <select class="form-control m-1" v-model="formData.rol" name="rol" id="">
        <option value="1">Administrador</option>
        <option value="2">Supervisor</option>
        <option value="3">Agente</option>
      </select>
      <ToastError
        v-if="userStore.errores"
        :errors="userStore.errores"
      ></ToastError>
      <button type="submit" class="btn btn-outline-success m-1">Enviar</button>
    </div>
  </form>
</template>
