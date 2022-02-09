<template>
  <div id="app">

    <header-box
    :menu="menu"
    :logo="logo"
    :cart="cart"
    />

    <intro-section/>

    <banner-section :banner="banner[0]"/>

    <reviews-section
    :stars="stars"/>

    <news-promotions/>

    <banner-section :banner="banner[1]"/>

  </div>
</template>

<script>
import BannerSection from './components/BannerSection.vue'
import HeaderBox from './components/HeaderBox.vue'
import IntroSection from './components/IntroSection.vue'
import NewsPromotions from './components/NewsPromotions.vue'
import ReviewsSection from './components/ReviewsSection.vue'

export default {
  name: 'App',
  components: {
    HeaderBox,
    IntroSection,
    BannerSection,
    ReviewsSection,
    NewsPromotions,
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
      banner: [
        {
          subtitle: 'FINE DINING EXPERIENCE',
          title: 'THE BEST TABLE IN TOWN',
          text: 'Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.',
          image: '/img/slider32x.jpg',
          button: 'EXPLORE THE MENU',
        },
        {
          subtitle: 'ENJOY YOUR MEAL AT HOME',
          title: 'TAKEOUT NOW AVAILABLE',
          text: 'Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.',
          image: '/img/slider72x-scaled.jpg',
          icon: 'fas fa-car',
          button: 'VIEW TAKEOUT MENU',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.7.1/css/all.css");
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:wght@400;600&family=Work+Sans:wght@200;400;500;600&display=swap');
@import '@/style/main.scss';
</style>
