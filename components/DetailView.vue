<template>
  <v-container bg fluid fill-height class="topContainer">
    <v-sheet
      :width="800"
      :height="300"
      :elevation="5"
      :color="white"
      :tile="false"
    ></v-sheet>

  </v-container>
</template>

<script>
export default {
  name: 'DetailView',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topContainer {
    /*background: linear-gradient(160deg, #05FBFF, #1E00FF); !* 160度の角度からグラデーション *!*/
    padding-bottom: 0;
  }
  h2 {
    font-size: 100px;
    color: #FFFFFF;
    margin-bottom: 0;
  }
  p {
    color: #FFFFFF;
  }
  .h3div {
    color: #FFFFFF;
    font-size: 300px;
    position: absolute;
    top: 50%;
    transform: translate(-0%, -50%);
    opacity: 0.2;
  }
  .topLayout {
    position: relative;

  }
  .topImage {
    width: 60%;
    position: absolute;
    bottom: 0;
  }
</style>
