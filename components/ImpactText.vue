<template>
  <!-- fluidで横幅いっぱい full-heightで高さいっぱいにする-->
  <v-container bg fluid fill-height>
    <!-- v-layoutとv-flexで上下左右中央寄せにする-->
    <v-layout row wrap align-center>
      <v-flex>
        <!-- v-layoutで左右中央寄せにする -->
        <v-layout justify-center>
          <div>
            <div class="h2div"
                 data-aos="zoom-in"
            >
              <h2>{{ mainMessage }}</h2>
            </div>
            <div class="pdiv"
                 data-aos="slide-right"
                 data-aos-offset="0"
            >
              <p>{{ subMessage }}</p>
            </div>
            <div class="h3div">
              <h3 data-aos="zoom-in"
                  data-aos-duration="2000"
                  data-aos-offset="0"
              >{{ backCharacter }}</h3>
            </div>
            <div v-if="storeIcon">
              <v-layout row justify-center>
                <v-img :src="require('../assets/store/app_store_badge.svg')"
                       width="100"
                       height="55"
                       style="border-radius: 10px;"
                       onclick="alert('AppStore申請中')"
                />
                <v-img :src="require('../assets/store/google-play-badge.png')"
                       width="120"
                       height="55"
                       style="border-radius: 10px;"
                       onclick="alert('GooglePlay申請中')"
                />
              </v-layout>
            </div>
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ImpactText',
  props: {
    mainMessage: String,
    subMessage: String,
    backCharacter: String,
    storeIcon: Boolean,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
