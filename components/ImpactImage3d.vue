<template>
  <v-layout row justify-center class="topLayout" style="height: 10px;">
<!--    @/assetsは呼び出し元で指定できない（するとcannot find moduleエラー）-->
    <img class="topImage"
           :src="require(`@/assets/${src}`)" />
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
  .topLayout {
    height: 10px;
    position: absolute;
    perspective: 2000px;
  }
  .topImage {
    /*width: 60%;*/
    max-width: 300px;
    position: relative;
    top: -100px;
    left: 50px;
    transform-style: preserve-3d;
    transform: rotateX(40deg) rotateY(-10deg) rotateZ(-60deg);
  }
</style>
