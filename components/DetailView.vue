<template>
  <v-container bg fluid fill-height class="topContainer">
    <v-sheet
      class="sheet"
      elevation="20"
      color="#7F828B"
      tile="false"
    >
      <ImpactImageText main-message="びちくん"
                       sub-message="かつてない備蓄品管理体験をあなたに"
                       back-character="備"
                       store-icon="true"
                       src="bichikun/screenshot1.png"
      />
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
  .sheet {
    width: 100%;
    /*height: 100vh;*/
    height: 500px;
    margin-left: 20px;
    margin-right: 20px;
  }
  /*.topContainer {*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*}*/
  /*.topContainer:before {*/
  /*  position: fixed;!*固定配置*!*/
  /*  top: 0; left: 0;!*左上に固定*!*/
  /*  width: 100%; height: 100%;!*画面全体を覆う*!*/
  /*  content: "";*/

  /*  background-color: #FFFFFF;*/
  /*  opacity: 0.2;*/
  /*}*/


</style>
