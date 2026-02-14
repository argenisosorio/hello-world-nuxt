<template>
  <div>
    <GoBack />
    <h1 class="my-4">Users List</h1>

    <div v-if="error" class="alert alert-danger" role="alert">
      There was an error connecting to Backend.
    </div>

    <ul v-else-if="users" class="list-group">
      <li v-for="user in users" :key="user.id" class="list-group-item d-flex justify-content-between align-items-center">
        {{ user.name }} 
        <NuxtLink :to="`/users/${user.id}`" class="btn btn-sm btn-primary">Detail</NuxtLink>
      </li>
    </ul>

    <hr>
    <p class="text-muted">This data comes from an external API, simulating your backend.</p>

    <div class="alert alert-info">
      <p>El resultado de la suma es: <strong>{{ resultado_suma }}</strong></p>
      <p>El resultado de la resta es: <strong>{{ resultado_resta }}</strong></p>
    </div>
  </div>
</template>

<script setup>
// 1. Importamos el controlador del loader global
const { showLoader, hideLoader } = useAppLoader()

useHead({
  title: 'Users List',
})

// 2. Usamos lazy: true para que la página cargue y el loader global tome el control
const { data: users, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/users', {
  lazy: true
})

// 3. Vigilamos el estado 'pending'. 
// Cuando empieza a cargar (true) mostramos loader, cuando termina (false) lo quitamos.
watch(pending, (loading) => {
  if (loading) {
    showLoader()
  } else {
    hideLoader()
  }
}, { immediate: true }) // immediate asegura que funcione si empieza cargando

const { sumar, restar } = utils()
const resultado_suma = sumar(10, 5)
const resultado_resta = restar(100, 75)
</script>