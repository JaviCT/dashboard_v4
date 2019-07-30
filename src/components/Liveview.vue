<template>
  <v-layout align-center justify-center>
    <img
      v-if="isLoading"
      class="text-xs-center buttons"
      :src="`${publicPath}images/loading.gif`"
      alt="Evercam Logo"
    >
    <v-img
      v-else
      :src="url"
      :lazy-src="url"
      class="grey lighten-2"
      width="100%"
    ></v-img>
    <div
      v-if="!isLoading"
      class="text-xs-center buttons"
    >
      <v-btn
        dark
        fab
        small
        color="rgba(0, 0, 0, 0.65)"
        v-if="!isPlaying"
        @click="isPlaying = !isPlaying; playJpegStream()"
      >
        <v-icon>fas fa-play</v-icon>
      </v-btn>
      <v-btn
        dark
        fab
        small
        color="rgba(0, 0, 0, 0.65)"
        v-else
        @click="isPlaying = !isPlaying; stopJpegStream()"
      >
        <v-icon>fas fa-pause</v-icon>
      </v-btn>
      <v-btn
        dark
        fab
        small
        color="rgba(0, 0, 0, 0.65)"
      >
        <v-icon>fas fa-search</v-icon>
      </v-btn>
      <v-btn
        dark
        fab
        small
        color="rgba(0, 0, 0, 0.65)"
      >
        <v-icon>fas fa-download</v-icon>
      </v-btn>
      <v-btn
        dark
        fab
        small
        color="rgba(0, 0, 0, 0.65)"
      >
        <v-icon>fas fa-pencil-alt</v-icon>
      </v-btn>
      <v-btn
        dark
        fab
        small
        color="rgba(0, 0, 0, 0.65)"
      >
        <v-icon>fas fa-expand-arrows-alt</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<style scope>
.buttons{
  position: absolute;
}
.button {
  opacity: 0.5;
}
</style>

<script>
import axios from 'axios'
import { Socket} from 'phoenix-socket'

export default {
  data: () => ({
    publicPath: process.env.BASE_URL,
    isPlaying: true,
    url: "",
    isLoading: true
  }),
  watch: {
    '$route' (to, from) {
      if(this.channel) {
        this.isLoading = true
        this.channel.leave()
      }
      this.playJpegStream()
    }
  },
  created() {
    this.playJpegStream()
  },
  methods: {
    playJpegStream() {
      this.isPlaying = true
      let socket = new Socket(process.env.VUE_APP_SOCKET, {params: {api_id: this.$session.get('api_id'), api_key: this.$session.get('api_key'), ip: '1.1.1.1', source: "private_widget"}})
      socket.connect()
      this.channel = socket.channel("cameras:" + this.$route.params.id, {})
      this.channel.join()
      this.channel.on('snapshot-taken', (data) => {
        this.url = 'data:image/jpeg;base64,' + data.image
        this.isLoading = false
      });
    },
    stopJpegStream() {
      if(this.channel) {
        this.channel.leave()
      }
    }
  }
};
</script>
