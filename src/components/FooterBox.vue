<template>
  <div>
    <div class="footer-bg">
      <div class="footer-text">
        <img :src="`/img/${logo}`" alt="" />
        <p>{{ footerText }}</p>
        <div class="social-container">
          <div class="social-icon" v-for="(icon, i) in socialIcons" :key="i">
            <i :class="icon"></i>
          </div>
        </div>
      </div>
    </div>
     <div class="end-footer">
        <p>&copy; Copyright 2012 - 2022 | Avada Theme by <a href="">ThemeFusion</a> | All Rights Reserved | Powered by <a href="">WordPress</a> </p>
     </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    logo: String,
    footerText: String,
    socialIcons: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/footer-box.scss";
</style>
