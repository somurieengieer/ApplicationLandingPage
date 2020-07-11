<template>
  <v-container bg fluid fill-height class="topContainer">

      <ImpactImageText main-message="びちくん"
                       sub-message="かつてない備蓄品管理体験をあなたに"
                       back-character="備"
                       store-icon="true"
                       src="bichikun/screenshot1.png"
      />
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
  .sheet {
    width: 100%;
    /*height: 100vh;*/
    height: 500px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .topContainer {
    margin: 0;
    margin-top: 100px;
    padding: 0;
    position: relative;
    height: 600px;
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
