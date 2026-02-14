<template>
  <header>
    <nav class="main-nav">
      <NuxtLink to="/">Home</NuxtLink>
      <span class="divider">|</span>
      <NuxtLink to="/users">Users</NuxtLink>
    </nav>
    <hr />
  </header>
</template>

<style scoped>
/* Usamos a y .router-link-active que Nuxt aplica automáticamente */
a {
  color: red;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
}

.router-link-active {
  color: #00dc82; /* Color verde Nuxt cuando la ruta está activa */
}
</style>