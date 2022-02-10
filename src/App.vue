<template>
  <div id="app">

    <header-box
    :nav="nav"
    logo='logo-restaurant.png'
    cart= 'fas fa-shopping-cart'
    :navOpen="navOpen"
    @change="menuBtn"
    />

    <intro-section :sushiBox="sushiBox"/>

    <banner-section :banner="banner[0]"/>

    <reviews-section
    :stars="5"/>

    <news-promotions/>

    <banner-section :banner="banner[1]"/>

    <menu-section
    :menuOne="menuOne"
    :menuTwo="menuTwo"
    :menuThree="menuThree"
    />

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
      navOpen: false,
      nav:
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
      menuOne: [
        {
          plateName: 'AHI SALMON NIGIRI',
          price: '$48',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
        {
          plateName: 'UMI MASU SALAD',
          price: '$21',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
        {
          plateName: 'TEMAKI WITH CRAB',
          price: '$32',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
        {
          plateName: 'CALIFORNIA ROLLS',
          price: '$22',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
      ],
      menuTwo: [
        {
          plateName: 'BRAISED ABALONE',
          price: '$52',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
        {
          plateName: 'TWICE COOKED PORK',
          price: '$21',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
        {
          plateName: 'KUNG PAO CHICKEN',
          price: '$32',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
        {
          plateName: 'CHAR SIU & SUSHI',
          price: '$48',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
      ],
      menuThree: [
        {
          plateName: 'CHOCOLATE BALL CAKE',
          price: '$13',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
        {
          plateName: 'LIME PIE WITH CRUST',
          price: '$14',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
        {
          plateName: 'RASPBERRY PEAR CAKE',
          price: '$18',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
        {
          plateName: 'CAFÉ AU LAIT',
          price: '$6',
          description: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.',
        },
      ],
      socialIcons: [
        'fab fa-facebook-f',
        'fab fa-twitter',
        'fab fa-youtube',
        'fab fa-instagram',
        'fab fa-linkedin-in'
      ],
    }
  },
  methods: {
    menuBtn(){
      return this.navOpen= !this.navOpen;
      }
    }
  }
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.7.1/css/all.css");
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:wght@400;600&family=Work+Sans:wght@200;400;500;600&display=swap');
@import '@/style/main.scss';
</style>
