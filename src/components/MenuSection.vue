<template>
  <div>
    <div id="menu" class="menu-container justify-center">
      <!-- box menu Appetizer -->
      <a href="#menuOne-slider" @click="$emit('plateListOne')" class="menu-box justify-center horse-doeuvres">
        <div class="text-center">
            <h2>HORSE D'OEUVRES</h2>
            <div v-for="(plate, i) in appetizerList" :key="i">
              <div class="menu-item space-between">
                <h3>{{ plate.plateName }}</h3>
                <span>{{ plate.price }}</span>
              </div>
              <p>{{ plate.text }}</p>
            </div>
        </div>
      </a>

      <!-- box menu MainCourse -->
      <a href="#menuTwo-slider" @click="$emit('plateListTwo')" class="menu-box justify-center main-course">
        <div class="text-center">
            <h2>MAIN COURSE</h2>
            <div v-for="(plate, i) in mainCourseList" :key="i">
              <div class="menu-item space-between">
                <h3>{{ plate.plateName }}</h3>
                <span>{{ plate.price }}</span>
              </div>
              <p>{{ plate.text }}</p>
            </div>
        </div>
      </a>

    <!-- box menu Dessert -->
      <a href="#menuThree-slider" @click="$emit('plateListThree')" class="menu-box justify-center dessert">
        <div class="text-center">
            <h2>DESSERTS</h2>
            <div v-for="(plate, i) in dessertList" :key="i">
              <div class="menu-item space-between">
                <h3>{{ plate.plateName }}</h3>
                <span>{{ plate.price }}</span>
              </div>
              <p>{{ plate.text }}</p>
            </div>
        </div>
      </a>
    </div>

    <!-- slider con descrizione piatti Apetizer -->
    <div
      v-if="appetizerSlider"
      id="menuOne-slider"
      class="menu-slider"
      :style="{ backgroundImage: 'url(/img/hero42x.jpg)' }">
      <div class="plate-bg">
        <div class="plate-description justify-center">
          <i
            @click="$emit('prev', appetizerList)"
            class="arrows-slider fas fa-chevron-left"
          ></i>
          <div class="plate-text">
            <div class="plate">
              <h2>{{ appetizerList[currentIndex].plateName }}</h2>
              <span>{{ appetizerList[currentIndex].price }}</span>
            </div>
            <div class="line"></div>
            <p>
              {{ appetizerList[currentIndex].description }}
            </p>
            <button class="black-button">VIEW IN THE MENU</button>
          </div>
          <i
            @click="$emit('next', appetizerList)"
            class="arrows-slider fas fa-chevron-right"
          ></i>
        </div>
      </div>
    </div>

    <!-- slider con descrizione piatti MainCourse -->
    <div
      v-if="mainCourseSlider"
      id="menuTwo-slider"
      class="menu-slider"
      :style="{ backgroundImage: 'url(/img/hero72x.jpg)' }">
      <div class="plate-bg">
        <div class="plate-description justify-center">
          <i
            @click="$emit('prev', mainCourseList)"
            class="arrows-slider fas fa-chevron-left"
          ></i>
          <div class="plate-text">
            <div class="plate">
              <h2>{{ mainCourseList[currentIndex].plateName }}</h2>
              <span>{{ mainCourseList[currentIndex].price }}</span>
            </div>
            <div class="line"></div>
            <p>
              {{ mainCourseList[currentIndex].description }}
            </p>
            <button class="black-button">VIEW IN THE MENU</button>
          </div>
          <i
            @click="$emit('next', mainCourseList)"
            class="arrows-slider fas fa-chevron-right"
          ></i>
        </div>
      </div>
    </div>

    <!-- slider con descrizione piatti Dessert -->
    <div
      v-if="dessertSlider"
      id="menuThree-slider"
      class="menu-slider"
      :style="{ backgroundImage: 'url(/img/hero82x.jpg)' }">
      <div class="plate-bg">
        <div class="plate-description justify-center">
          <i
            @click="$emit('prev', dessertList)"
            class="arrows-slider fas fa-chevron-left"
          ></i>
          <div class="plate-text">
            <div class="plate">
              <h2>{{ dessertList[currentIndex].plateName }}</h2>
              <span>{{ dessertList[currentIndex].price }}</span>
            </div>
            <div class="line"></div>
            <p>
              {{ dessertList[currentIndex].description }}
            </p>
            <button class="black-button">VIEW IN THE MENU</button>
          </div>
          <i
            @click="$emit('next', dessertList)"
            class="arrows-slider fas fa-chevron-right"
          ></i>
        </div>
      </div>
    </div> 

  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    appetizerList: Array,
    mainCourseList: Array,
    dessertList: Array,
    currentIndex: Number,
    appetizerSlider: Boolean,
    mainCourseSlider: Boolean,
    dessertSlider: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/menu-section.scss";
</style>
