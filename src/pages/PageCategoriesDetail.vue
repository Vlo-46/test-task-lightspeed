<template>
  <div class="container">
    <section class="mt-3" v-if="products && category">
      <p class="category__title">Категория {{ category.name }}</p>

      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <ProductItem :product="product"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "@/services/axios";
import ProductItem from "@/components/ProductList/ProductItem.vue";
import {IProduct} from "@/components/ProductList/core/interface";

const route = useRoute()
const {categoryId} = route.params;
const products = ref<IProduct[]>([])
const category = ref()

onMounted(async () => {
  try {
    await fetchCategory()
    await fetchProductByCategory()
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})


async function fetchProductByCategory() {
  const response = await axios.get(`/${process.env.VUE_APP_ECWID_STORE_ID}/products?category=${categoryId}`, {
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_ECWID_TOKEN}`,
      Accept: 'application/json',
    }
  });
  products.value = response.data.items;
}


async function fetchCategory() {
  const response = await axios.get(`/${process.env.VUE_APP_ECWID_STORE_ID}/categories/${categoryId}`, {
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_ECWID_TOKEN}`,
      Accept: 'application/json',
    }
  });
  category.value = response.data;
}
</script>

<style scoped>
.category__title {
  text-align: center;
  color: #6ba229;
  font-size: 24px;
}
</style>