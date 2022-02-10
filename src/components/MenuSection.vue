<template>
  <div>
    <div class="big-container menu-container">
      <!-- box menu x3 -->
      <div class="menu-box horse-doeuvres">
        <div class="text-center">
          <h2>HORSE D'OEUVRES</h2>
          <div v-for="(plate, i) in menuOne" :key="i">
            <div class="menu-item">
              <h3>{{ plate.plateName }}</h3>
              <span>{{ plate.price }}</span>
            </div>
            <p>{{ plate.description }}</p>
          </div>
        </div>
      </div>

      <div class="menu-box main-course">
        <div class="text-center">
          <h2>MAIN COURSE</h2>
          <div v-for="(plate, i) in menuTwo" :key="i">
            <div class="menu-item">
              <h3>{{ plate.plateName }}</h3>
              <span>{{ plate.price }}</span>
            </div>
            <p>{{ plate.description }}</p>
          </div>
        </div>
      </div>

      <div class="menu-box dessert">
        <div class="text-center">
          <h2>DESSERTS</h2>
          <div v-for="(plate, i) in menuThree" :key="i">
            <div class="menu-item">
              <h3>{{ plate.plateName }}</h3>
              <span>{{ plate.price }}</span>
            </div>
            <p>{{ plate.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- banner con descrizione piatti -->
    <div id="slider" class="menu-banner">
      <div class="plate-description">
        <div class="plate-text">
          <div class="plate">
            <h2>BRAISED ABALONE</h2>
            <span>$13</span>
          </div>
          <div class="line"></div>
          <p>
            Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
            scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
          </p>
          <button class="black-button">VIEW IN THE MENU</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    menuOne: Array,
    menuTwo: Array,
    menuThree: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/menu-section.scss";
</style>
