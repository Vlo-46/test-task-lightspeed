<template>
  <NavBar />
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-3"><ProductItem/></div>
      <div class="col-md-3"><ProductItem/></div>
      <div class="col-md-3"><ProductItem/></div>
      <div class="col-md-3"><ProductItem/></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProductItem from '../components/Categories/ProductItem.vue'
import NavBar from '../components/NavBar.vue'
</script>