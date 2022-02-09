<template>
<div>
<!-- jumbo + header -->
  <div class="jumbotron big-container">

    <header class="space-between">
      <!-- logo dinamico -->
      <div class="logo">
        <img :src="`/img/${logo}`" alt="" />
      </div>
    <!-- menu -->
      <nav>
        <ul>
          <!-- voci menu dinamiche -->
          <li v-for="(item, i) in menu" :key="i">
            <a href="#">{{ item }}
              <!-- tag 'New' generato tramite v-if a fianco alla voce menu 'Takeout' -->
              <span class="new-item" v-if="item === 'Takeout'">New</span>
            </a>
          </li>
          <!-- icona dinamica -->
          <li>
            <a href="#"><i :class="cart"></i></a>
          </li>
        </ul>
      </nav>

    </header>

    <!-- jumbo box -->
    <div class="text-box">
      <!-- testo del jumbo -->
      <div class="jumbo-text">
        <div class="line"></div>
        <div class="title">
          <h3>THE BEST TABLE IN TOWN</h3>
          <h1>FINE DINING EXPERIENCE</h1>
          <p>
            Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
          </p>
          <button class="black-button">EXPLORE THE MENU</button>
        </div>
      </div>

    </div>
    <!-- immagine jumbo in background -->
    <div class="jumbo-img"></div>

  </div>

  <div class="demos">
    <i class="fas fa-folder-open"></i>
    Demos
  </div>

  <div class="on-sale">
    <p><sup class="small-size">$</sup>39</p>
    OnSale
  </div>

  <div class="arrow">
    <a href="#"><i class="fas fa-caret-up"></i></a>
  </div>
  </div>
</template>

<script>
export default {
  name: "App",
  // props di logo menu e carrello passati da App.vue
  props: {
    logo: String,
    menu: Array,
    cart: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/header-box.scss";
</style>
