<template>
  <div>
    <!-- jumbo + header -->
    <div class="jumbotron">
      <header class="space-between">
        <!-- logo dinamico -->
        <div class="logo">
          <img :src="`/img/${logo}`" alt="" />
        </div>
        <!-- menu -->
        <nav>
          <ul class="nav-list">
            <!-- voci menu dinamiche -->
            <li v-for="(item, i) in nav" :key="i">
              <a href="#"
                >{{ item }}
                <!-- tag 'New' generato tramite v-if a fianco alla voce menu 'Takeout' -->
                <span class="new-item" v-if="item === 'Takeout'">New</span>
              </a>
            </li>
            <!-- icona dinamica -->
            <li>
              <a href="#"><i :class="cart"></i></a>
            </li>
          </ul>
          <!-- icona burger menu, aggiunge una classe se il booleano è true -->
          <div @click="changeButton()" class="menu-btn" :class="{ 'open': navOpen }">
            <div class="menu-btn-burger"></div>
          </div>
          <!-- se il booleano è true mostra il burger menu -->
          <ul v-if="navOpen" class="burger-list">
            <!-- voci menu dinamiche -->
            <li v-for="(item, i) in nav" :key="i">
              <a href="#"
                >{{ item }}
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
      <div class="bg-left-box justify-center">
        <!-- testo del jumbo -->
        <div class="jumbo-left-box">
          <div class="line"></div>
          <div class="jumbo-text">
            <h3>THE BEST TABLE IN TOWN</h3>
            <h1>FINE DINING EXPERIENCE</h1>
            <p>
              Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
              scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
            </p>
            <button class="black-button">EXPLORE THE MENU</button>
          </div>
        </div>
      </div>
      <!-- immagine jumbo in background -->
      <div class="jumbo-img"></div>
    </div>

    <div class="right-box demos">
      <i class="fas fa-folder-open"></i>
      Demos
    </div>

    <div class="right-box on-sale">
      <p><sup class="small-size">$</sup>39</p>
      OnSale
    </div>

    <div class="arrow-to-top">
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
    nav: Array,
    cart: String,
    navOpen: Boolean,
  },
  methods: {
    // methods che cambia l'icona del burger menu
    changeButton() {
      this.$emit("change");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/header-box.scss";
</style>
