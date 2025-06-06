<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
main {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

nav {
  display: flex;
  justify-content: center;
 background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
nav a {
  margin: 0 15px;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
}
nav a:hover {
  color: hsla(160, 100%, 47%, 1);
}
</style>