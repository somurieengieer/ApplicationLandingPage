<template>

              <v-layout row justify-center>
                <button onclick="alert('AppStore申請中')" class="storeButton">
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
                <button onclick="alert('GooglePlay申請中')" class="storeButton">
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
<!--                <button class="storeButton" onclick="alert('AppStore申請中')">-->
<!--                  <div style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/ja-jp/badge-lrg.svg?releaseDate=2016-06-01&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;"-->
<!--                  ></div>-->
<!--                </button>-->

<!--                <button class="storeButton" onclick="alert('GooglePlay申請中')">-->
<!--                  <img alt="Google Play で手に入れよう" src="https://play.google.com/intl/en_us/badges/images/generic/ja_badge_web_generic.png"-->
<!--                       width="155"-->
<!--                       height="60"-->
<!--                  />-->
<!--                </button>-->
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

  p {
    color: #FFFFFF;
  }
  .storeButton {
    z-index: 3;
    background-color: #05FBFF;
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

  }
</style>
