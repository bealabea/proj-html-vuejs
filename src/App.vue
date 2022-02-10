<template>
  <div id="app">
    <header-box
      :nav="nav"
      logo="logo-restaurant.png"
      cart="fas fa-shopping-cart"
      :navOpen="navOpen"
      @change="menuBtn"
    />

    <intro-section :sushiBox="sushiBox" />

    <banner-section :banner="banner[0]" />

    <reviews-section :stars="5" />

    <news-promotions />

    <banner-section :banner="banner[1]" />

<!-- 3 menu + click per cambiare piatto
+ click per cambiare visualizzazione dello slider dei piatti in base al menu cliccato
con l'utilizzo di 3 booleani -->
    <menu-section
      :appetizerList="appetizerList"
      :mainCourseList="mainCourseList"
      :dessertList="dessertList"

      @prev="prevPlate"
      @next="nextPlate"
      :currentIndex="currentIndex"

      @plateListOne="getAppetizerSlider"
      @plateListTwo="getMainCourseSlider"
      @plateListThree="getDessertSlider"

      :appetizerSlider="appetizerSlider" 
      :mainCourseSlider="mainCourseSlider" 
      :dessertSlider="dessertSlider"
    />

    <footer-box
      logo="logo-restaurant.png"
      footerText="Quam eu proin sit massa condimentum. Volutpat non pulvinar aliquet nunc. Quam eu proin sit massa condimentum."
      :socialIcons="socialIcons"
    />
  </div>
</template>

<script>
import BannerSection from "./components/BannerSection.vue";
import FooterBox from "./components/FooterBox.vue";
import HeaderBox from "./components/HeaderBox.vue";
import IntroSection from "./components/IntroSection.vue";
import MenuSection from "./components/MenuSection.vue";
import NewsPromotions from "./components/NewsPromotions.vue";
import ReviewsSection from "./components/ReviewsSection.vue";

export default {
  name: "App",
  components: {
    HeaderBox,
    IntroSection,
    BannerSection,
    ReviewsSection,
    NewsPromotions,
    MenuSection,
    FooterBox,
  },
  data() {
    return {
      // booleano per burger menu
      navOpen: false,
      // booleani per slider dei piatti da visualizzare in base agli eventi click
      appetizerSlider: true,
      mainCourseSlider: false,
      dessertSlider: false,
      // + contatore per slider dei piatti
      currentIndex: 0,
      // dati HeaderBox
      nav: [
        "Home",
        "Culinary History",
        "Our Team",
        "Our Menu",
        "Takeout",
        "Bulletin",
        "Reservation",
      ],
      // dati IntroSection
      sushiBox: [
        {
          img: "sushi-1.png",
          title: "THE BEST TABLE IN TOWN",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis natus nostrum quod maxime.",
          button: "EXPLORE THE MENU",
        },
        {
          img: "sushi-2.png",
          title: "PERFECT FOR GROUPS",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis natus nostrum quod maxime.",
          button: "MAKE A RESERVATION",
        },
        {
          img: "sushi-3.png",
          title: "FRESH PRODUCE EVERYDAY",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis natus nostrum quod maxime.",
          button: "LEARN MORE ABOUT US",
        },
      ],
      // dati BannerSection
      banner: [
        {
          subtitle: "FINE DINING EXPERIENCE",
          title: "THE BEST TABLE IN TOWN",
          text: "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
          image: "/img/slider32x.jpg",
          button: "EXPLORE THE MENU",
        },
        {
          subtitle: "ENJOY YOUR MEAL AT HOME",
          title: "TAKEOUT NOW AVAILABLE",
          text: "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
          image: "/img/slider72x-scaled.jpg",
          icon: "fas fa-car",
          button: "VIEW TAKEOUT MENU",
        },
      ],
      // dati MenuSection (3 Menu)
      appetizerList: [
        {
          plateName: "AHI SALMON NIGIRI",
          price: "$48",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
        {
          plateName: "UMI MASU SALAD",
          price: "$21",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
        {
          plateName: "TEMAKI WITH CRAB",
          price: "$32",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
        {
          plateName: "CALIFORNIA ROLLS",
          price: "$22",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
      ],

      mainCourseList: [
        {
          plateName: "BRAISED ABALONE",
          price: "$52",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
        {
          plateName: "TWICE COOKED PORK",
          price: "$21",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
        {
          plateName: "KUNG PAO CHICKEN",
          price: "$32",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
        {
          plateName: "CHAR SIU & SUSHI",
          price: "$48",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
      ],

      dessertList: [
        {
          plateName: "CHOCOLATE BALL CAKE",
          price: "$13",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
        {
          plateName: "LIME PIE WITH CRUST",
          price: "$14",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
        {
          plateName: "RASPBERRY PEAR CAKE",
          price: "$18",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
        {
          plateName: "CAFÉ AU LAIT",
          price: "$6",
          text: "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
          description:
            "Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
        },
      ],
      // dati FooterBox
      socialIcons: [
        "fab fa-facebook-f",
        "fab fa-twitter",
        "fab fa-youtube",
        "fab fa-instagram",
        "fab fa-linkedin-in",
      ],
    }
  },
  methods: {
    // methods che cambia l'icona del burger menu
    menuBtn() {
      return (this.navOpen = !this.navOpen);
    },
    // methods per navigare in avanti lo slider dei piatti
    nextPlate(menuArray) {
      this.currentIndex++;
      if (this.currentIndex > menuArray.length - 1) {
        this.currentIndex = 0;
      }
    },
    // methods per navigare indietro lo slider dei piatti
    prevPlate(menuArray) {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = menuArray.length - 1;
      }
    },
    // methods per visualizzare lo slider dei piatti in base al click sui menu
    getAppetizerSlider(){
      this.appetizerSlider = true;
      this.mainCourseSlider = false;
      this.dessertSlider = false;
      this.currentIndex=0;
    },
    getMainCourseSlider(){
      this.appetizerSlider = false;
      this.mainCourseSlider = true;
      this.dessertSlider = false;
      this.currentIndex=0;
    },
    getDessertSlider(){
      this.appetizerSlider = false;
      this.mainCourseSlider = false;
      this.dessertSlider = true;
      this.currentIndex=0;
    }
  },
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.7.1/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:wght@400;600&family=Work+Sans:wght@200;400;500;600&display=swap");
@import "@/style/main.scss";
</style>
