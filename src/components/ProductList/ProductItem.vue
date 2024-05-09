<template>
  <div class="container">
    <div class="postItem">
      <div class="imgField">
        <a href="">
          <img src="../../assets/logo.png" class="card-img-top" alt="..."/>
        </a>
      </div>
      <div class="textField">
        <div class="infoBox">
          <div class="innerInfoBox">
            <a href="">Title</a>
          </div>
          <div class="innerInfoBox">
            <span><small>date:</small></span>
            <td>date&nbsp;թ․</td>
          </div>
          <div class="innerInfoBox">
            <span><small>mileage:</small></span>
            <span>{car.mileage}&nbsp;{t('km')}</span>
          </div>
        </div>
        <div class="footerBox">
          <span><b>{car.price}$</b></span>
          <span class="iconField">
          <i class="fa fa-heart"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.postItem {
  margin-bottom: 30px;
  width: 100%;
  height: 350px;
  max-height: 350px;
  border: 1px solid #CDCDCD;
}

.postItem:hover {
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
  color: #6c757d;
}

.footerBox {
  display: flex;
  justify-content: space-between;
  height: 30%;
  border-top: 1px solid #CDCDCD;
  align-items: center;
}

.iconField i {
  font-size: 20px;
  cursor: pointer;
}


.moreBtn {
  width: 200px;
  background-color: #0B3363;
  padding: 5px 0;
  border: 1px solid #0B3363;
  text-align: center;
  color: #fff;
}

.moreBtn:hover {
  background-color: #fff;
  border: 1px solid #0B3363;
  color: #000;
  transition: 0.4s;
}
</style>
