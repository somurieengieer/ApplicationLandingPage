<template>
  <v-main>
    <FirstView/>
    <DetailView main-message="Free"
                sub-message="備蓄品を何度も確認する必要はもうありません"
                back-character="F"
                src="bichikun/screenshot2.png"
                :image-left=true
    />
    <DetailView main-message="Nature"
                sub-message="フードロスのない社会を一緒に創りませんか"
                back-character="N"
                src="bichikun/screenshot3.png"
    />
    <DetailView main-message="Personal"
                sub-message="家庭ごとの備蓄量目標もあなたの思いのままに"
                back-character="P"
                src="bichikun/screenshot3.png"
                :image-left=true
    />
  </v-main>
</template>

<script>
  import FirstView from "../components/FirstView";
  import DetailView from "../components/DetailView";

  export default {
    head: {
      title: '備蓄品管理ツールびちくん'
    },
    components: {
      DetailView,
      FirstView,
    },
    data: () => ({
      header: {
        title: '備蓄品管理ツールびちくん'
      }
    }),
    mounted() {
      this.updateHeader()
    },
    methods: {
      updateHeader() {
        this.$nuxt.$emit('updateHeaderTitle', this.header.title)
      }
    }
  };
</script>
