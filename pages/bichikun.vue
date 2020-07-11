<template>
  <v-content>
    <FirstView/>
    <DetailView main-message="Free"
                sub-message="備蓄品を数え直して頭を悩ませていた日々はもう終わりです"
                back-character="F"
                src="bichikun/screenshot2.png"
                :image-left=true
    />
    <DetailView main-message="Nature"
                sub-message="フードロス０の社会を一緒に創りませんか"
                back-character="N"
                src="bichikun/screenshot3.png"
    />
    <DetailView main-message="Personal"
                sub-message="家庭ごとの備蓄量目標もあなたの思いのままに"
                back-character="P"
                src="bichikun/screenshot3.png"
                :image-left=true
    />
  </v-content>
</template>

<script>
  import FirstView from "../components/FirstView";
  import DetailView from "../components/DetailView";


  export default {
  components: {
    DetailView,
    FirstView,
  },
  data: () => ({
    //
  }),
};
</script>
