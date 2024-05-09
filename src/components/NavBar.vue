<template>
  <nav class="navbar-container">
    <div class="container">
      <div class="navbar-header">
        <div class="d-flex align-items-center">
          <router-link to="/" class="nav-link text-white m-lg-2">Продукты</router-link>
          <router-link to="/categories" class="nav-link text-white">Категории</router-link>
        </div>
        <div>
          <div class="shopping_cart">
            <router-link to="/cart" class="nav-link text-white">
              <i class="bi bi-basket basket__icon"></i>
            </router-link>
            <span class="product__count">{{ productsCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';

const cart_products = process.env.VUE_APP_LOCALSTORAGE_CART_ITEMS;
const productsCount = ref<number>(0);

const updateProductsCount = () => {
  const localstorageProducts = localStorage.getItem(cart_products);
  productsCount.value = localstorageProducts ? JSON.parse(localstorageProducts).length : 0;
};

onMounted(() => {
  updateProductsCount();
});

window.addEventListener('storage', () => {
  updateProductsCount();
});

const handleMessage = (event: MessageEvent) => {
  if (event.data && event.data.type === 'cartCountChanged') {
    productsCount.value = event.data.count;
  }
};

window.addEventListener('message', handleMessage);

onUnmounted(() => {
  window.removeEventListener('message', handleMessage);
});
</script>

<style scoped>
.navbar-container {
  background: #6ba229;
  padding: 15px 0;
}

.navbar-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.basket__icon {
  font-size: 24px;
}

.shopping_cart {
  position: relative;
  width: 50px;
}

.product__count {
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  border-radius: 50%;
  padding: 1px 6px;
  font-size: 12px;
  color: #6ba229;
}
</style>
