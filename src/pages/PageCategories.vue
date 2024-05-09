<template>
  <div class="container">
    <CategoriesList :categories="categories"/>
  </div>
</template>

<script setup lang="ts">
import CategoriesList from "@/components/CategoriesList/CategoriesList.vue";

import axios from '@/services/axios';
import {ref, onMounted} from 'vue';
import {ICategory} from "@/components/CategoriesList/core/interface";

interface ICategoriesData {
  items: ICategory[],
  count: number;
  limit: number
  offset: number
  total: number
}

const categories = ref<ICategory[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<ICategoriesData>(`/${process.env.VUE_APP_ECWID_STORE_ID}/categories`, {
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_ECWID_TOKEN}`,
        Accept: 'application/json',
      }
    });
    console.log(response.data.items)
    categories.value = response.data.items;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>