<template>
  <!-- fluidで横幅いっぱい full-heightで高さいっぱいにする-->
  <v-container bg fluid fill-height data-aos="fade-in" class="root">
    <!-- v-layoutとv-flexで上下左右中央寄せにする-->
    <v-layout row wrap align-center>
      <v-flex>
        <!-- v-layoutで左右中央寄せにする -->
        <v-layout justify-center>
          <div class="alignCenterParent">
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
            <div class="backCharacter alignCenterChild">
              <h3 data-aos="zoom-in"
                  data-aos-duration="2000"
                  data-aos-offset="0"
              >{{ backCharacter }}</h3>
            </div>
            <div v-if="storeIcon">
              <v-layout row justify-center>
                <div style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/ja-jp/badge-lrg.svg?releaseDate=2016-06-01&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;"
                     onclick="alert('AppStore申請中')"
                ></div>

                <img alt="Google Play で手に入れよう" src="https://play.google.com/intl/en_us/badges/images/generic/ja_badge_web_generic.png"
                     width="155"
                     height="60"
                     style="margin-top:-10px;"
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
  .backCharacter {
    color: #FFFFFF;
    font-size: 300px;
    opacity: 0.2;
  }
  .alignCenterParent {
    position: relative;
  }
  .alignCenterChild {
    position: absolute;
    top: 50%;
    transform: translate(-0%, -50%);
  }
  @media (max-width: 600px) {
    .root {
      padding-top: 40px;
      padding-bottom: 40px;
    }
    h2 {
      font-size: 60px;
    }
    .backCharacter {
      font-size: 200px;
    }

  }
</style>
