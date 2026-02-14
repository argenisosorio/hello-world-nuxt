<template>
  <div>
    <GoBack />
    <h1>Users List</h1>

    <p v-if="pending">Loading users from the backend...</p>

    <p v-else-if="error" style="color: red;">There was an error connecting to Backend.</p>

    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} 
        <NuxtLink :to="`/users/${user.id}`">Detail</NuxtLink>
      </li>
    </ul>

    <hr>
    <p>This data comes from an external API, simulating your backend.</p>

    <div class="alert alert-info">
      <p>El resultado de la suma es: <strong>{{ resultado_suma }}</strong></p>
      <p>El resultado de la suma es: <strong>{{ resultado_resta }}</strong></p>
    </div>
  </div>
</template>

<script setup>

useHead({
  title: 'Users',
})
// Simularemos una llamada a la API de Backend usando una API de prueba real
// Luego cambiaremos esta URL por la de tu servidor Backend local
const { data: users, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/users')

const { sumar, restar } = utils()

const resultado_suma = sumar(10, 5)
const resultado_resta = restar(100, 75)
</script>
