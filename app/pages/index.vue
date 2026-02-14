<template>
  <div>
    <h1>Welcome page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <img
      src="/images/star.png"
      alt="star"
      class="img-fluid mb-3"
      width="50px"
    >
    <br>

    <p>Contador: {{ contador }}</p>
    <button class="btn btn-primary" @click="incrementar">Sumar</button>

    <br>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div id="exampleModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 1. COMPOSABLES (Configuración de Nuxt)
useHead({
  title: 'Home'
})

// 2. ESTADO (Variables)
const loader = useState('loader')
const contador = ref(0) // Estado local de esta página

// 3. MÉTODOS (Lógica)
const incrementar = () => {
  contador.value++
}

// 4. CICLO DE VIDA (Lifecycle)
onMounted(() => {
  console.log("Paso 1: La página ya es visible en el navegador")

  setTimeout(() => {
    loader.value = false
    console.log("Paso 2: Han pasado 3 segundos y quité el loader")
  }, 3000)
})

onUnmounted(() => {
  console.log("Paso 3: El usuario se fue de Home")
})
</script>
