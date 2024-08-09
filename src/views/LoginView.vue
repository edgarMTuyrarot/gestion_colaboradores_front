<script setup>
import { ref } from 'vue';
import {RouterLink} from 'vue-router'
import {useUserStore} from '../stores/userStore.js'


const formData = ref({
  mail: '',
  password: ''
});
const store = useUserStore()
const submitForm = async () => {
  store.login(formData)
};
</script>

<template>
  <form @submit.prevent="submitForm" class="container">
    <div class="w-50 m-auto p-5">
      <h5>Iniciar Sesion</h5>
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
      <button type="submit" class="btn btn-sm btn-outline-success m-1">
        Iniciar Sesion
      </button>
      <router-link to="/registro">
        <button type="button" class="btn btn-sm btn-outline-secondary m-1">
          Registrarse
        </button>
      </router-link>
    </div>
  </form>
</template>
