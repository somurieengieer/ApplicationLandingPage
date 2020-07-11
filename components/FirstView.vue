<template>
  <v-container bg fluid fill-height class="topContainer">
    <v-row class="mb-2"
           no-gutters
           style="height: 100%; min-height: 400px;"
    >
      <v-col cols=6 data-aos="fade-in"
      >
        <ImpactText main-message="びちくん"
                    sub-message="かつてない備蓄品管理体験をあなたに"
                    back-character="備"
                    store-icon="true"
                    />
      </v-col>
      <v-col cols=6 data-aos="fade-in">
        <v-container bg fill-height
                     data-aos="fade-in"
                     data-aos-delay="700"
                     data-aos-duration="2000"
                     data-aos-offset="-400"
                     style="padding-bottom: 0"
        >
          <v-layout row wrap justify-center align-end class="topLayout">
            <v-img class="topImage"
                   v-bind:src="require('@/assets/bichikun/screenshot1.png')" />
          </v-layout>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ImpactText from "./ImpactText";

  export default {
  name: 'FirstView',
  components: {ImpactText},
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
