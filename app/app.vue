<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink> | 
      <NuxtLink to="/users">Users</NuxtLink>
    </nav>
    <hr />

    <NuxtPage />
  </div>
</template>

<style>
a {
  color: red;
  text-decoration: none;
  font-weight: bold;
}
</style>
