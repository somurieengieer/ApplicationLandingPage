<template>
  <v-layout row justify-center>
    <button onclick="location.href='https://apps.apple.com/jp/app/%E3%81%B3%E3%81%A1%E3%81%8F%E3%82%93/id1522604218?mt=8'" class="storeButton">
      <v-layout row justify-center>
        <v-flex>
          <img :src="require('@/assets/store/apple_store_logo.svg')" width="28"/>
        </v-flex>
        <v-flex class="textArea">
          <h5>Download on</h5>
          <h4>App Store</h4>
        </v-flex>
      </v-layout>
    </button>
    <button onclick="location.href='https://play.google.com/store/apps/details?id=com.somuriengineer.bitikun'" class="storeButton">
      <v-layout row justify-center>
        <v-flex>
          <img :src="require('@/assets/store/google_play_logo.svg')" width="28"/>
        </v-flex>
        <v-flex class="textArea">
          <h5>Download on</h5>
          <h4>GooglePlay</h4>
        </v-flex>
      </v-layout>
    </button>
  </v-layout>
</template>

<script>
export default {
  name: 'StoreIcon',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .storeButton {
    z-index: 3;
    background-color: var(--v-accent-base); /* メインの緑より一段回明るい色 */
    padding: 10px 30px 10px 30px;
    margin-left: 10px;
    margin-right: 10px;
    width: 200px;
    height: 50px;
    border-radius: 40px 40px 40px 0px;
  }
  .storeButton:focus {
    outline:0;
  }
  .textArea {
    text-align: left;
  }
  h5 {
    font-size: 0.8em;
    line-height: 1;
  }
  h4 {
    font-size: 1.1em;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    .storeButton {
      width: 160px;
    }
  }
</style>
