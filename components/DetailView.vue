<template>
  <v-container bg fluid fill-height class="topContainer">
    <v-sheet
      style="width: 100%; margin-left: 20px; margin-right: 20px; opacity: 0.3;"
      height="300"
      elevation="20"
      color="#FFF"
      tile="false"
    >
      <v-row class="mb-2"
             no-gutters
             style="height: 100%; min-height: 400px;"
      >
        <v-col cols=6 data-aos="fade-in"
        >
        </v-col>
      </v-row>


    </v-sheet>

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
