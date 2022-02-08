<template>
  <div>
    <!-- intro container -->
    <div class="small-container space-between">
      
      <div class="intro-text">
        <!-- testi box sinistro -->
        <p>
          <strong>LOREM IPSUM, DOLOR SIT AMET </strong>consectetur adipisicing
          elit. Ab ex tempora rerum officiis illo laborum dignissimos excepturi!
          Quidem rerum consequuntur voluptatum est aspernatur vitae. Asperiores
          reprehenderit aliquam laboriosam explicabo incidunt.
        </p>
        <h2>FOOD IS OUR COMMON <br />GROUND, A UNIVERSAL <br />EXPERIENCE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique
          sequi enim eligendi id quaerat. Quod doloremque magni temporibus,
          voluptatum, ipsum voluptatem consequuntur labore inventore repellat
          hic quisquam praesentium laboriosam!
        </p>
        <!-- firma -->
        <img src="/img/signature-200x172.jpg" alt="" />
      </div>

      <!-- immagine box destro -->
      <div class="intro-image">
        <img src="/img/info22x.jpg" alt="" />
      </div>

    </div>

    <div class="sushi-container small-container space-between">
      <!-- call to action con disegni sushi x 3 -->
      <div class="sushi">
        <img src="/img/sushi-1.png" alt="" />
        <h3>THE BEST TABLE IN TOWN</h3>
        <div class="spacing-line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis
          natus nostrum quod maxime.
        </p>
        <button class="white-button">EXPLORE THE MENU</button>
      </div>

      <div class="sushi">
        <img src="/img/sushi-2.png" alt="" />
        <h3>PERFECT FOR GROUPS</h3>
        <div class="spacing-line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis
          natus nostrum quod maxime.
        </p>
        <button class="white-button">MAKE A RESERVATION</button>

      </div>

      <div class="sushi">
        <img src="/img/sushi-3.png" alt="" />
        <h3>FRESH PRODUCE EVERYDAY</h3>
        <div class="spacing-line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis
          natus nostrum quod maxime.
        </p>
        <button class="white-button">LEARN MORE ABOUT US</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
// testi e immagini intro
.intro-text {
  width: 50%;
  padding-right: 100px;
  h2 {
    font-size: 50px;
    font-weight: 200;
  }
  img {
    margin-top: 40px;
    width: 150px;
  }
}
.intro-image {
  width: 50%;
  img {
    width: 100%;
  }
}

// sushi container
.sushi-container {
  width: 33%;
  .sushi {
    text-align: center;
    padding: 0 40px;
    h3 {
      margin: 20px 0;
      font-size: 30px;
      font-weight: 400;
    }
    p {
      margin: 20px 0;
    }
  }
}
</style>
