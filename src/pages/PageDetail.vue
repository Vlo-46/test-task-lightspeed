<template>
  <div class="container">
    <div class="product__detail">
      <div class="row" v-if="product">
        <div class="col-md-8">
          <div class="product__image">
            <img :src="product?.originalImageUrl" alt="">
          </div>
        </div>
        <div class="col-md-4">
          <div class="product__info">
            <div><b>Продукт:</b> {{ product?.name }}</div>
            <div><b>Описание:</b> <span v-html="product?.description"></span></div>
            <div><b>Цена:</b> {{ product?.price }}&nbsp;$</div>
            <div v-if="isExistInCart">
              <button class="addToCartBtn" @click="handleOnClick(); REMOVE_FROM_CART(product.id)">Удалить из корзины</button>
            </div>
            <div v-else>
              <button class="addToCartBtn" @click="handleOnClick(); ADD_TO_CART(product)">Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "@/services/axios";
import {useRoute} from "vue-router";
import {IProduct} from "@/components/ProductList/core/interface";
import {ADD_TO_CART, CHECK_BASKET_PRODUCT, REMOVE_FROM_CART} from "@/helpers/helpers";

const product = ref<IProduct>()
const isExistInCart = ref<boolean>(false)

onMounted(async () => {
  const route = useRoute()
  const {productId} = route.params

  const response = await axios.get(`/${process.env.VUE_APP_ECWID_STORE_ID}/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_ECWID_TOKEN}`,
      Accept: 'application/json',
    }
  })

  isExistInCart.value = CHECK_BASKET_PRODUCT(response.data)
  product.value = response.data;
})

function handleOnClick() {
  isExistInCart.value = !isExistInCart.value
}
</script>

<style scoped>
.product__detail {
  border: 1px solid #6ba229;
  margin: 50px 0;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 0 2px #6ba229;
}

.product__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.product__info div {
  margin-bottom: 20px;
  padding: 10px;
  color: #6ba229;
}

.addToCartBtn {
  width: 100%;
  height: 35px;
  background: #6ba229;
  color: #fff;
  border: 1px solid #6ba229;
  cursor: pointer;
  border-radius: 3px;
}

.addToCartBtn:hover {
  background-color: #fff;
  color: #6ba229;
  transition: 0.5s;
}
</style>