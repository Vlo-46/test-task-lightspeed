<template>
  <div class="container">
    <div class="productItem">
      <div class="imgField">
        <a href="">
          <img :src="product.originalImageUrl" class="card-img-top" alt="..."/>
        </a>
      </div>
      <div class="textField">
        <div class="infoBox">
          <div class="innerInfoBox">
            <span><small>Name:</small></span>
            <small>{{product.name}}</small>
          </div>
          <div class="innerInfoBox">
            <span><small>Price:</small></span>
            <small>{{product.price}} $</small>
          </div>
        </div>
        <div class="footerBox">
          <button class="buy__btn">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import {IProduct} from "@/components/ProductList/core/interface";

interface IProductListProps {
  product: IProduct;
}

defineProps<IProductListProps>()
</script>

<style scoped>
.productItem {
  margin-bottom: 30px;
  width: 100%;
  height: 350px;
  max-height: 350px;
  border: 1px solid #CDCDCD;
}

.productItem:hover {
  box-shadow: 0 0 3px 0;
  transition: 0.5s;
}

.imgField {
  height: 60%;
}

.imgField img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.textField {
  height: 40%;
  padding: 10px;
}

.infoBox {
  display: flex;
  flex-direction: column;
  height: 70%;
}

.innerInfoBox{
  display: flex;
  justify-content: space-between;
}

.innerInfoBox small {
  color: #6ba229;
}

.footerBox {
  display: flex;
  justify-content: space-between;
  height: 30%;
  border-top: 1px solid #CDCDCD;
  align-items: center;
}

.buy__btn {
  width: 100%;
  height: 35px;
  background: #6ba229;
  color: #fff;
  border: 1px solid #6ba229;
  cursor: pointer;
  border-radius: 3px;
}

.buy__btn:hover {
  background-color: #fff;
  color: #6ba229;
  transition: 0.5s;
}
</style>
