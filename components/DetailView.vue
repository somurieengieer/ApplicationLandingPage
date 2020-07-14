<template>
  <v-container bg fluid fill-height class="topContainer"
  >

    <ImpactImageText :main-message="mainMessage"
                     :sub-message="subMessage"
                     :back-character="backCharacter"
                     :store-icon=false
                     :src="src"
                     :imageLeft=imageLeft
    />
  </v-container>
</template>

<script>
export default {
  name: 'DetailView',
  props: {
    mainMessage: String,
    subMessage: String,
    backCharacter: String,
    src: String, // assets/以下のパスを記載
    imageLeft: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topContainer {
    margin: 0;
    margin-top: 100px;
    padding: 0;
    position: relative;
    height: 100vh;
  }
  .topContainer:before {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    content: "";

    background-color: #FFFFFF;
    opacity: 0.2;
  }


</style>
