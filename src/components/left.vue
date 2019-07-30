<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    :fixed="fixed"
    id="style-1"
    app
  >
    <v-list class="pt-0" dense>
      <v-list-group
        value="true"
      >
        <!-- <v-icon slot="prependIcon">fas fa-camera</v-icon> -->
        <img :src="`${publicPath}images/favicon-evercam.png`" alt="Evercam Logo">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Cameras</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="(item, i) in items"
          :to="item.to"
          link
          class="tile"
        >
          <v-list-item-title v-text="item.title" />
        </v-list-item>
      </v-list-group>
    </v-list>

    <v-list class="pt-0" dense>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>fas fa-video</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Add IP Camera</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>fas fa-envelope-open-text</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Snapmail</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>fas fa-archive</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Archives</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>fas fa-map-marked</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Map View</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>fas fa-wifi</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Status Report</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>fas fa-cog</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>fas fa-comments</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Live Support</v-list-item-title>
      </v-list-item>

      <v-list-item
        @click="logout()"
        link
      >
        <v-list-item-icon>
          <v-icon>fas fa-sign-out-alt</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Sign out</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-0 float-right">
        <v-btn
          icon
          right
          @click.stop="miniVariant = !miniVariant"
        >
          <v-icon>fas fa-chevron-right</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>
  #style-1::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }
  #style-1::-webkit-scrollbar-thumb {
    background-color: #F90;
    background-image: -webkit-linear-gradient(90deg, rgba(255, 255, 255, .2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, .2) 50%,
                        rgba(255, 255, 255, .2) 75%,
                        transparent 75%,
                        transparent)
  }
  #style-1::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
  .tile {
    background: #303030;
  }
</style>

<script>
import axios from 'axios'

export default {
  name: 'Left',
  data: () => ({
    publicPath: process.env.BASE_URL,
    clipped: true,
    drawer: true,
    fixed: true,
    items: [],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: 'Evercam'
  }),
  created() {
    this.getCameras()
  },
  methods: {
    getCameras() {
      let myitems = []
      axios.get(process.env.VUE_APP_API_URL + 'cameras',{
        params: {
          api_id: this.$session.get('api_id'),
          api_key: this.$session.get('api_key')
        }
      })
      .then(function (response) {
        // handle success
        let aux = response.data.cameras
        aux.forEach(function (arrayItem) {
          myitems.push({
            icon: 'videocam',
            title: arrayItem.name,
            to: '/camera/' + arrayItem.id
          })
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      this.items = myitems
    },
    logout() {
      this.$session.destroy()
      this.$router.push('/users/login')
    }
  }
};
</script>
