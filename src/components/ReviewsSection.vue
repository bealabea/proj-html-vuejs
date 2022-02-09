<template>
<div>
    <div class="small-container">
      <!-- titolo sezione -->
      <div class="section-title">
        <h2><i> What critics are saying about us </i></h2>
        <div class="spacing-line"></div>
      </div>

      <!-- banner reviews -->
      <div class="reviews-banner">

        <div class="text-box">
          <!-- testo banner reviews -->
          <div class="reviews-text">
            <h3>MEGGY STEWART</h3>
            <h2>NEW YORK TIMES</h2>
            <i v-for="index in stars" :key="index" class="fas fa-star"></i>
            <div class="line"></div>
            <p>
              Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
              scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
            </p>
            <p>Pellentesque vitae viverra risus, sagittis.</p>
            <button class="black-button">READ FULL ARTICLE</button>
          </div>

        </div>

        <!-- immagine banner reviews -->
        <img src="/img/blog72x.jpg" alt="" />
        
      </div>

      <!-- container x single review -->
      <div class="space-between mgt-40">
        <!-- review THE GUARDIAN -->
        <div class="single-review rev-left">
        
          <!-- testo single review -->
          <div class="reviews-text">
            <h3>MARY MAXEY</h3>
            <h2>THE GUARDIAN</h2>
            <i v-for="index in stars" :key="index" class="fas fa-star"></i>
            <div class="line"></div>
            <p>
              Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
              scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
            </p>
            <button class="transp-button">READ FULL ARTICLE</button>
          </div>

        </div>

        <!-- review GLOBE AND MAIL -->
        <div class="single-review rev-right">
        
          <!-- testo single review -->
          <div class="reviews-text">
            <h3>PATRICK MONROE</h3>
            <h2>GLOBE AND MAIL</h2>
            <i v-for="index in stars" :key="index" class="fas fa-star"></i>
            <div class="line"></div>
            <p>
              Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus
              scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
            </p>
            <button class="transp-button">READ FULL ARTICLE</button>
          </div>

        </div>

      </div>

    </div>
    <div class="full-image">
      <p>KUNG PAO CHICKEN - $32</p> 
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    stars: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/reviews-section.scss";
</style>
