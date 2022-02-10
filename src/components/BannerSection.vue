<template>
  
  <div class="banner-container">

    <div class="banner-bg-right-box justify-center">
      <!-- testo del banner -->
      <div class="banner-flex">
        <div class="line"></div>
        <div class="banner-text">
          <h3>{{banner.subtitle}}</h3>
          <h2>{{banner.title}}</h2>
          <p>{{banner.text}}</p>
          <button class="black-button"><i :class="banner.icon"></i>{{banner.button}}</button>
        </div>
      </div>
    </div>

    <!-- immagine banner -->
    <img :src="banner.image" alt="">
    
  </div>
  
</template>
 
<script>
export default {
  name: 'App',
  props: {
    banner: Object,
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/banner-section.scss";
</style>