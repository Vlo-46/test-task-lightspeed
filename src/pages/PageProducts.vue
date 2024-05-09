<template>
  <div class="container">
    <ProductList :products="products"/>
  </div>
</template>

<script setup lang="ts">
import ProductList from "@/components/ProductList/ProductList.vue";
import axios from '@/services/axios';

import {ref, onMounted} from 'vue';
import {IProduct} from "@/components/ProductList/core/interface";

interface IProductData {
  items: IProduct[],
  count: number;
  limit: number
  offset: number
  total: number
}

const products = ref<IProduct[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<IProductData>(`/${process.env.VUE_APP_ECWID_STORE_ID}/products`, {
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_ECWID_TOKEN}`,
        Accept: 'application/json',
      }
    });
    products.value = response.data.items;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>