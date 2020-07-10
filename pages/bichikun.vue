<template>
  <v-app>
    <v-content>
      <FirstView/>
<!--      <HelloAOS/>-->
    </v-content>
  </v-app>
</template>

<script>
  // import HelloAOS from "../components/HelloAOS";
  import FirstView from "../components/FirstView";


  export default {
  components: {
    FirstView,
    // HelloAOS,
  },
  data: () => ({
    //
  }),
};
</script>
