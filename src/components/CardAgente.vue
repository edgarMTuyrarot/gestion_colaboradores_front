<script setup>
defineProps(['agente','sup'])

</script>
<template>
 
  <div class="card m-1" style="width: 18rem;">
    <div class="card-body p-2 mb-1">
      <h5 class="card-title">{{ agente.nombre }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ agente.apellido }}</h6>
      <p><strong>Supervisor</strong><br>{{ agente.supervisore.nombre }} {{ agente.supervisore.apellido }}</p>
      <p class=""><strong>Score</strong><br>{{ agente.score }}</p>
    </div>
    <div class="m-1">
      <router-link to="/gestionAgente">
        <button type="button" class="btn btn-sm btn-outline-secondary">Gestionar</button>
      </router-link>
    </div>
  </div>
</template>
<style>
p {
  font-size: small;
  text-decoration: none;

}
</style>