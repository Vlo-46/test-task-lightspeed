<template>
  <div class="row mt-5">
    <div class="col-md-6" v-for="category in categories" :key="category.id">
      <CategoryItem :category="category"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';

import CategoryItem from "@/components/CategoriesList/CategoryItem.vue";
import {ICategory} from "@/components/CategoriesList/core/interface";

interface ICategoriesListProps {
  categories: ICategory[]
}

defineProps<ICategoriesListProps>()
</script>