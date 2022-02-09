<template>
  <div id="app">

    <header-box
    :menu="menu"
    logo='logo-restaurant.png'
    cart= 'fas fa-shopping-cart'
    />

    <intro-section :sushiBox="sushiBox"/>

    <banner-section :banner="banner[0]"/>

    <reviews-section
    :stars="5"/>

    <news-promotions/>

    <banner-section :banner="banner[1]"/>

    <menu-section/>

    <footer-box
    logo='logo-restaurant.png'
    footerText= 'Quam eu proin sit massa condimentum. Volutpat non pulvinar aliquet nunc. Quam eu proin sit massa condimentum.'
    :socialIcons="socialIcons"
    />

  </div>
</template>

<script>
import BannerSection from './components/BannerSection.vue'
import FooterBox from './components/FooterBox.vue'
import HeaderBox from './components/HeaderBox.vue'
import IntroSection from './components/IntroSection.vue'
import MenuSection from './components/MenuSection.vue'
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
    MenuSection,
    FooterBox
  },
  data(){
    return{
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
      sushiBox: [
        {
          img: 'sushi-1.png',
          title: 'THE BEST TABLE IN TOWN',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis natus nostrum quod maxime.',
          button: 'EXPLORE THE MENU'
        },
        {
          img: 'sushi-2.png',
          title: 'PERFECT FOR GROUPS',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis natus nostrum quod maxime.',
          button: 'MAKE A RESERVATION'
        },
        {
          img: 'sushi-3.png',
          title: 'FRESH PRODUCE EVERYDAY',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis natus nostrum quod maxime.',
          button: 'LEARN MORE ABOUT US'
        }
      ],
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
      ],
      socialIcons: [
        'fab fa-facebook-f',
        'fab fa-twitter',
        'fab fa-youtube',
        'fab fa-instagram',
        'fab fa-linkedin-in'
      ],
    }
  }
}
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.7.1/css/all.css");
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:wght@400;600&family=Work+Sans:wght@200;400;500;600&display=swap');
@import '@/style/main.scss';
</style>
