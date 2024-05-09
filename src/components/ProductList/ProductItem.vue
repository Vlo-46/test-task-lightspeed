<template>
  <div class="container">
    <div class="productItem">
      <div class="imgField">
        <router-link :to="`/product/${product.id}`">
          <img :src="product.originalImageUrl" class="card-img-top" alt="..."/>
        </router-link>
      </div>
      <div class="textField">
        <div class="infoBox">
          <div class="innerInfoBox">
            <span><small>Продукт:</small></span>
            <small>{{ product.name }}</small>
          </div>
          <div class="innerInfoBox">
            <span><small>Цена:</small></span>
            <small>{{ product.price }} $</small>
          </div>
        </div>
        <div class="footerBox">
          <button v-if="isExistInCart" class="addToCartBtn" @click="handleOnClick(); REMOVE_FROM_CART(product.id)">
            Удалить из корзины
          </button>
          <button v-else class="addToCartBtn" @click="handleOnClick();ADD_TO_CART(product)">Добавить в корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from 'vue';
import {IProduct} from "@/components/ProductList/core/interface";
import {ADD_TO_CART, CHECK_BASKET_PRODUCT, REMOVE_FROM_CART} from "@/helpers/helpers";

interface IProductListProps {
  product: IProduct;
}

const props = defineProps<IProductListProps>()

const isExistInCart = ref<boolean>(false)

isExistInCart.value = CHECK_BASKET_PRODUCT(props.product.id)

function handleOnClick() {
  isExistInCart.value = !isExistInCart.value
}
</script>

<style src="./styles.css" scoped></style>
