<template>
  <v-layout justify-center class="containerLayout">
<!--    @/assetsは呼び出し元で指定できない（するとcannot find moduleエラー）-->
    <div class="topLayout">
      <img class="topImage"
             :src="require(`@/assets/${src}`)" />
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'ImpactImage3d',
  props: {
    src: String // assets/以下のパスを記載
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .containerLayout {
    height: 100px !important;
  }
  .topLayout {
    height: 100px !important;
    position: absolute;
    perspective: 2000px;
  }
  .topImage {
    max-width: 300px;
    position: relative;
    top: -10%;
    left: 0px;
    transform-style: preserve-3d;
    transform: rotateX(40deg) rotateY(-10deg) rotateZ(-60deg);
  }
  @media (max-width: 960px) {
    .containerLayout {
      height: 360px !important;
    }
    .topLayout {
      height: 360px !important;
    }
    .topImage {
      top: -35%;
    }
  }
  @media (max-width: 600px) {
    .containerLayout {
      height: 200px !important;
    }
    .topLayout {
      height: 200px !important;
      perspective: 1000px;
    }
    .topImage {
      width: 160px;
      top: -40%;
      transform: rotateX(40deg) rotateY(-10deg) rotateZ(-40deg);
    }
  }
</style>
