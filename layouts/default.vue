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
          :src="require('@/assets/bichikun/store_icon.svg')"
          transition="scale-transition"
          width="40"
        />
        <h3 style="margin-left: 1em;"
        >備蓄品管理ツール びちくん</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        onclick="alert('link not yet created')"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

    </v-app-bar>

    <nuxt />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
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
