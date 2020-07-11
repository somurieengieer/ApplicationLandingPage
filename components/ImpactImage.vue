<template>
  <v-layout justify-center style="height: 100px;">
<!--    @/assetsは呼び出し元で指定できない（するとcannot find moduleエラー）-->
    <div style="topLayout">
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
  .topLayout {
    /*height: 400px; heightはstyleに書かないと優先順的に動かない */
    position: absolute;
    perspective: 2000px;
  }
  .topImage {
    /*width: 60%;*/
    max-width: 300px;
    position: relative;
    top: 0px;
    left: 0px;
    transform-style: preserve-3d;
    transform: rotateX(40deg) rotateY(-10deg) rotateZ(-60deg);
    /*transform: rotateX(40deg) rotateY(-10deg) rotateZ(-60deg)  translate(-50%, -30%);*/
  }
  @media (max-width: 600px) {
    .topImage {
      max-width: 200px;
    }

  }
</style>
