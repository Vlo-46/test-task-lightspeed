<template>
  <div class="basket">
    <div class="container basket-box" v-if="!cartProducts?.length">
      <h2>Корзина пуста</h2>
    </div>

    <div class="container" v-else>
      <div class="row">
        <div class="col-md-9">
          <table class="table">
            <thead>
            <tr>
              <th>Продукт</th>
              <th>Цена</th>
              <th>Удалить</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in cartProducts" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.price }}&nbsp;$</td>
              <td><i class="bi bi-trash trash__icon" @click="removeFromCart(product.id)"></i></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-3">
          <p><b>Общая сумма:</b> {{ total }}&nbsp;$</p>
          <button class="buy_btn" @click="BUY_PRODUCTS()">Купить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IProduct} from "@/components/ProductList/core/interface";
import {ref} from "vue";
import {BUY_PRODUCTS, REMOVE_FROM_CART} from "@/helpers/helpers";

const cart_products = process.env.VUE_APP_LOCALSTORAGE_CART_ITEMS;
const localStorageItems = localStorage.getItem(cart_products);

const cartProducts = ref<IProduct[]>()
const total = ref<number>();

if (localStorageItems) {
  cartProducts.value = JSON.parse(localStorageItems);
  total.value = calculateTotalPrice();
}

function removeFromCart(id: number) {
  if (cartProducts.value) {
    cartProducts.value = cartProducts.value.filter((product: IProduct) => product.id !== id)
    REMOVE_FROM_CART(id)
    total.value = calculateTotalPrice()
  }
}

function calculateTotalPrice() {
  if (cartProducts.value) {
    return cartProducts.value.reduce((total, product) => total + product.price, 0);
  }
}

</script>

<style scoped>

.container {
  margin-top: 50px;

}

i {
  color: #6ba229;
  cursor: pointer;
}

.buy_btn {
  width: 100%;
  height: 35px;
  background: #6ba229;
  color: #fff;
  border: 1px solid #6ba229;
  cursor: pointer;
  border-radius: 3px;
}

.buy_btn:hover {
  background-color: #fff;
  color: #6ba229;
  transition: 0.5s;
}

.basket-box {
  border: 1px solid #ccc;
  padding: 50px 25px;
  text-align: center;
  margin: 50px auto;
}

.basket-box h2 {
  color: #000;
  font-size: 35px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 1px;
}

.trash__icon {
  font-size: 20px;
}
</style>