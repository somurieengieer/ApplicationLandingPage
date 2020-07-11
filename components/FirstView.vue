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
          <ImpactImage src="bichikun/screenshot1.png" />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ImpactText from "./ImpactText";
  import ImpactImage from "./ImpactImage";

  export default {
  name: 'FirstView',
  components: {ImpactImage, ImpactText},
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
</style>
