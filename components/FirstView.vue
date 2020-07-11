<template>
  <v-container bg fluid class="topContainer">
    <ImpactImageText main-message="びちくん"
                     sub-message="かつてない備蓄品管理体験をあなたに"
                     back-character="備"
                     store-icon="true"
                     src="bichikun/screenshot1.png"
                     />
  </v-container>
</template>

<script>
  import ImpactText from "./ImpactText";
  import ImpactImage from "./ImpactImage";
  import ImpactImageText from "./ImpactImageText";

  export default {
  name: 'FirstView',
  components: {ImpactImageText, ImpactImage, ImpactText},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topContainer {
    padding-bottom: 0;
    height: 600px;
  }
</style>
