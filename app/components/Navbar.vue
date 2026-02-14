<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="navbar-nav">
        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        <NuxtLink class="nav-link" to="/users">Users</NuxtLink>
      </div>
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
