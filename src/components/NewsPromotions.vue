<template>

  <div class="small-container">
      <!-- titolo sezione -->
    <div class="section-title">
      <h2><i> Latest News &amp; Promotions </i></h2>
      <div class="spacing-line"></div>
    </div>

    <!-- box news x3 -->
    <div class="news-container space-between">
      <div class="news-card">
        <img src="/img/blog92x.jpg" alt="" />
        <div class="overlay"></div>
        <div class="news-card-text">
          <i class="fas fa-link"></i>
          <h2>THE BEST COFFEE IN TOWN</h2>
          <p>News</p>
        </div>
        <div class="box-hide">
          <h2 class="text-box">THE BEST COFFEE IN TOWN</h2>
          <p>By admin | January 7th, 2020 | Categories: News</p>
        </div>
      </div>

      <div class="news-card">
        <img src="/img/blog72x.jpg" alt="" />
        <div class="overlay"></div>
        <div class="news-card-text">
          <i class="fas fa-link"></i>
          <h2>DISCOVER OUR NEW MENU</h2>
          <p>News</p>
        </div>
        <div class="box-hide">
          <h2 class="text-box">DISCOVER OUR NEW MENU</h2>
          <p>By admin | January 7th, 2020 | Categories: News</p>
        </div>
      </div>

      <div class="news-card">
        <img src="/img/blog82x.jpg" alt="" />
        <div class="overlay"></div>
        <div class="news-card-text">
          <i class="fas fa-link"></i>
          <h2>WE NOW ACCEPT SQUARE!</h2>
          <p>News</p>
        </div>
        <div class="box-hide">
          <h2 class="text-box">WE NOW ACCEPT SQUARE!</h2>
          <p>By admin | January 7th, 2020 | Categories: News</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/style/news-promotions.scss";
</style>
