<template>
  <div class="row mt-5">
    <div class="col-md-4" v-for="product in products" :key="product.id">
      <ProductItem :product="product"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';
import ProductItem from "@/components/ProductList/ProductItem.vue";
import {IProduct} from "@/components/ProductList/core/interface";

interface IProductListProps {
  products: IProduct[]
}

defineProps<IProductListProps>()
</script>