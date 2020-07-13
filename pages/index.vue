<template>
  <v-main>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <nuxt-link :to="card.url">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    head: {
      title: 'アプリケーション一覧'
    },
    components: {
    },
    data: () => ({
      cards: [
        { title: '備蓄管理システム びちくん',
          src: require('@/assets/bichikun/screenshot1.png'),
          url: '/bichikun',
          flex: 6 },
      ],
      header: {
        title: 'アプリケーション一覧'
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
  }
</script>
