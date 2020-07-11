<template>
  <v-row class="mb-2"
         no-gutters
         style="height: 100%; min-height: 400px;"
  >
    <v-col cols=6 data-aos="fade-in"
    >
      <ImpactText :main-message="mainMessage"
                  :sub-message="subMessage"
                  :back-character="backCharacter"
                  :store-icon="storeIcon"
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
        <ImpactImage :src="src" />
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
  import ImpactText from "./ImpactText";
  import ImpactImage from "./ImpactImage";

  export default {
    name: 'ImpactImageText',
    components: {ImpactImage, ImpactText},
    props: {
      mainMessage: String,
      subMessage: String,
      backCharacter: String,
      storeIcon: Boolean,
      src: String, // assets/以下のパスを記載
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
