<template>
  <v-app style="background: initial">
    <v-app-bar
      app
      color="#3A3A3A"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          contain
          :src="require('@/assets/logo.svg')"
          transition="scale-transition"
          width="40"
        />
        <h3 style="margin-left: 1em;"
        >{{ title }}</h3>
      </div>

<!--      <v-spacer></v-spacer>-->

<!--      <v-btn-->
<!--        target="_blank"-->
<!--        text-->
<!--        onclick="alert('link not yet created')"-->
<!--      >-->
<!--        <span class="mr-2"-->
<!--        >Latest Release</span>-->
<!--        <v-icon>mdi-open-in-new</v-icon>-->
<!--      </v-btn>-->

    </v-app-bar>

    <nuxt />
  </v-app>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data () {
    return {
      title: ''
    }
  },
  created() {
    this.setListener()
  },
  methods: {
    setListener() {
      // タイトルは以下を参考に実装
      // https://qiita.com/yama-t/items/b051cd9ea802f69da118
      this.$nuxt.$on('updateHeaderTitle', this.setHeader)
    },
    setHeader(title) {
      this.title = title || ''
    }
  }
}
</script>

<style>
  .body-class:before {
    position: fixed;/*固定配置*/
    top: 0; left: 0;/*左上に固定*/
    width: 100%; height: 100%;/*画面全体を覆う*/
    content: "";

    background: linear-gradient(160deg, #05FBFF, #1E00FF); /* 160度の角度からグラデーション */
    padding-bottom: 0;
  }
</style>
