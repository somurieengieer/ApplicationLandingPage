<template>
  <v-content>
    <FirstView/>
    <DetailView/>
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
