<template>
  <router-link active-class="active" :to="{ name: 'Home' }"> Home </router-link>
  <router-link active-class="active" to="/about"> About </router-link>
  <br />
  <router-view />
</template>

<style>
a {
  text-decoration: none;
  margin-right: 5px;
  /* display: block; */
  color: #000;
  padding: 5px 10px;
  background-color: #ccc;
  font-weight: bold;
}
a:hover {
  background-color: #666;
}
.active {
  background-color: #000;
  color: coral;
  border-bottom: 2px solid coral;
}
</style>
