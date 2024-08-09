<script setup>
import {ref} from 'vue'
import {useUserStore} from '../stores/userStore.js'
import navbar from '../components/Navbar.vue'


const userStore = useUserStore()

const user = ref(userStore.user)
</script>

<template>
  <navbar></navbar>
  <h2 class="title text-primary text-center">Hola! {{ user.nombre }}</h2>
</template>
