<script setup>
// Simularemos una llamada a la API de Backend usando una API de prueba real
// Luego cambiaremos esta URL por la de tu servidor Backend local
const { data: users, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>

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
  </div>
</template>
