<template>
  <div class="container">
    <div class="productItem">
      <div class="imgField">
        <router-link :to="`/categories/${category.id}`">
          <img :src="category.originalImageUrl" class="card-img-top" alt="..."/>
        </router-link>
      </div>
      <div class="textField">
        <div class="infoBox">
          <div class="innerInfoBox">
            <span><small>Категория:</small></span>
            <small>{{ category.name }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import {ICategory} from "@/components/CategoriesList/core/interface";

interface IProductListProps {
  category: ICategory;
}

defineProps<IProductListProps>()
</script>

<style src="./styles.css" scoped></style>
