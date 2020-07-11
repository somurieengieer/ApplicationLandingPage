<template>
  <v-layout row wrap justify-center align-end class="topLayout">
<!--    @/assetsは呼び出し元で指定できない（するとcannot find moduleエラー）-->
    <img class="topImage"
           :src="require(`@/assets/${src}`)" />
  </v-layout>
</template>

<script>
export default {
  name: 'ImpactImage',
  props: {
    src: String // assets/以下のパスを記載
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topLayout {
    position: relative;
  }
  .topImage {
    width: 60%;
    position: absolute;
    bottom: 0;
  }
</style>
