<script setup>
// Usamos el router de Nuxt para acceder al historial de navegación
const router = useRouter()

const navegarAtras = () => {
  // .back() funciona exactamente como el botón "atrás" del navegador
  router.back()
}
</script>

<template>
  <button @click="navegarAtras" class="btn-back">
    ⬅ Go back
  </button>
</template>

<style scoped>
.btn-back {
  background-color: #f3f4f6;
}
</style>
