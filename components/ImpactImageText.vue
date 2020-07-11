<template>
  <!-- v-layoutにrowを入れれば横並び、columnで縦-->
  <v-layout align-center fill-height
  >
    <v-layout row wrap>

      <!-- v-layoutで左右中央寄せにする -->
      <v-flex xs12 sm12 md6
              v-for="leftItem in [true, false]"
              :key="leftItem"
      >
        <ImpactText :main-message="mainMessage"
                    :sub-message="subMessage"
                    :back-character="backCharacter"
                    :store-icon="storeIcon"
                    v-if="leftItem !== imageLeft"
                    />
        <v-container bg fill-height
                     v-if="leftItem === imageLeft"
        >
          <ImpactImage3d :src="src" />
        </v-container>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
  import ImpactText from "./ImpactText";
  import ImpactImage3d from "./ImpactImage";

  export default {
    name: 'ImpactImageText',
    components: {ImpactImage3d, ImpactText},
    props: {
      mainMessage: String,
      subMessage: String,
      backCharacter: String,
      storeIcon: Boolean,
      src: String, // assets/以下のパスを記載
      imageLeft: {
        type: Boolean,
        required: false,
        default: false,
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
