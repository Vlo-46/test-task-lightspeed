<template>
  <div class="basket">
    <div class="container basket-box">
      <h2>The basket is empty</h2>
    </div>

    <div class="container">
      <table class="highlight responsive-table">
        <thead>
        <tr>
          <th>Product name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total price</th>
          <th>Company name</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>product_name</td>
          <td>company_name</td>
          <td><i class="material-icons">delete</i></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="container">
      <div class="row">
        <div class="calculate">
          <table class="striped">
            <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total&nbsp;AMD</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>product_name</td>
            </tr>
            <tr>
              <td colspan="3" class="right-align">Total:&nbsp;<b>total AMD</b></td>
            </tr>
            <tr>
              <td colspan="3">
                <button class="buy_btn">Buy</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.container {
  margin-top: 50px;

}

.calculate {
  width: 300px;
  float: right;
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

.quantity-field {
  display: flex;
}

.input-quantity {
  border: none !important;
  text-align: center;
  width: 40% !important;
}

.quantity-btn {
  border: none;
  background: transparent;
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
</style>