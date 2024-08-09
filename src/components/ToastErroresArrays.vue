<script setup>
import { computed } from 'vue';

const props = defineProps(['errors'])
</script>
<template>
  <div class="alert alert-danger" role="alert">
    <div v-for="error in props.errors.response.data">
      <div v-for="e in error">*{{e}}</div>
    </div>
  </div>
</template>
