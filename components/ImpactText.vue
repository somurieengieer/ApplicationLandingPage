<template>
  <!-- fluidで横幅いっぱい full-heightで高さいっぱいにする-->
  <!-- v-layoutとv-flexで上下左右中央寄せにする-->
  <v-layout align-center
            class="root">
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
          <StoreIcon />
        </div>
      </div>
    </v-layout>
  </v-layout>
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
    color: var(--v-primary-base);
    margin-bottom: 0;
  }
  p {
    color: var(--v-primary-base);
  }
  .backCharacter {
    color: var(--v-primary-base);
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
