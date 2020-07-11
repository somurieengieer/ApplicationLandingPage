<template>
  <v-layout row wrap justify-center align-end class="topLayout">
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
    position: relative;
    perspective: 2000px;
  }
  .topImage {
    width: 60%;
    position: absolute;
    bottom: 0;
    transform-style: preserve-3d;
    transform: rotateX(40deg) rotateY(-10deg) rotateZ(-60deg);
  }
</style>
