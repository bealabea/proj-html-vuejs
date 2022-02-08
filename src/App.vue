<template>
  <div id="app">

    <header-box
    :menu="menu"
    :logo="logo"
    :cart="cart"
    />

    <intro-section/>

    <banner-experience/>

    <reviews-section
    :stars="stars"/>

  </div>
</template>

<script>
import BannerExperience from './components/BannerExperience.vue'
import HeaderBox from './components/HeaderBox.vue'
import IntroSection from './components/IntroSection.vue'
import ReviewsSection from './components/ReviewsSection.vue'

export default {
  name: 'App',
  components: {
    HeaderBox,
    IntroSection,
    BannerExperience,
    ReviewsSection,
  },
  data(){
    return{
      logo: 'logo-restaurant.png',
      menu:
      [
        'Home',
        'Culinary History',
        'Our Team',
        'Our Menu',
        'Takeout',
        'Bulletin',
        'Reservation'
        ],
      cart: 'fas fa-shopping-cart',
      stars: 5,
    }
  }
}
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.7.1/css/all.css");
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:wght@400;600&family=Work+Sans:wght@200;400;500;600&display=swap');
@import '@/style/main.scss';
</style>
