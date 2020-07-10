<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
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

    <v-content>
<!--      <HelloWorld/>-->
      <FirstView/>
      <HelloAOS/>
    </v-content>
  </v-app>
</template>

<script>
import HelloAOS from "../components/HelloAOS";
import FirstView from "../components/FirstView";


export default {
  components: {
    FirstView,
    HelloAOS,
  },
  data: () => ({
    //
  }),
};
</script>
