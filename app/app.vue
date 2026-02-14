<template>
  <div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="text-center">
        <div class="spinner-border text-light" role="status" style="width: 3rem; height: 3rem;">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <h5 class="text-light mt-3">Procesando...</h5>
      </div>
    </div>

    <div class="container">
      <Navbar />
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>

<script setup>
// Importamos el estado global
const { isLoading, hideLoader } = useAppLoader()

// Al iniciar la app por primera vez, podemos ocultarlo tras el montaje
onMounted(() => {
  setTimeout(() => {
    hideLoader()
  }, 1000) // Un segundo de cortesía al entrar a la web
})
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000; /* Aseguramos que esté sobre el Navbar */
}
</style>