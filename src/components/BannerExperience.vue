<template>
  
  <div class="banner-container">

    <div class="text-box">
      <!-- testo del banner -->
      <div class="banner-flex">
        <div class="line"></div>
        <div class="banner-text">
          <h3>FINE DINING EXPERIENCE</h3>
          <h2>THE BEST TABLE IN TOWN</h2>
          <p>
            Pellentesque vitae viverra risus, sagittis.
            Venenatis ridiculus scelerisque nisi in urna nulla.
            Sit tempor a et nisl, ac felis.
          </p>
          <button class="black-button">EXPLORE THE MENU</button>
        </div>
      </div>
    </div>

    <!-- immagine banner -->
    <img src="/img/slider32x.jpg" alt="">
    
  </div>
  
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
@import "@/style/banner.scss";
</style>