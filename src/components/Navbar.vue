<script setup>
import { computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import {useUserStore} from '../stores/userStore.js'


const userStore = useUserStore()
const logeado = computed(() => {
  if (JSON.parse(localStorage.getItem('user'))) {
    return true
  } else {
    return false
  }
})
</script>

<template>
  <div
    class="btn-group m-1 mb-5"
    role="group"
    aria-label="Default button group"
  >
    <router-link to="/">
      <button type="button" class="btn btn-sm btn-outline-secondary">
        Home
      </button>
    </router-link>
    <div v-if="sup">
      <router-link to="/agentes">
        <button type="button" class="btn btn-sm btn-outline-secondary">
          Agentes
        </button>
      </router-link>
    </div>
    <router-link to="/tablero">
      <button type="button" class="btn btn-sm btn-outline-secondary">
        Tablero General
      </button>
    </router-link>
    <div v-if="logeado">
      <button
        type="button"
        @click="userStore.logout"
        class="btn btn-sm btn-outline-secondary"
      >
        Cerrar Session
      </button>
    </div>
  </div>
</template>
