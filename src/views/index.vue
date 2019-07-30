<template>

  <v-container
    fluid
    grid-list-sm
  >
    <Left />
    <v-layout wrap>
      <v-flex
        v-for="i in items"
        xs12
        md4
      >
        <v-img
          :src="i.thumbnail"
          :lazy-src="i.thumbnail"
          aspect-ratio="1"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import Left from '../components/left.vue';

export default {
  name: 'Index',
  components: {
    Left
  },
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
    this.$vuetify.theme.dark = true
    this.getCameras()
    console.log(this.items);
  },
  methods: {
    getCameras() {
      let api_id = this.$session.get('api_id')
      let api_key = this.$session.get('api_key')
      let myitems = []
      axios.get(process.env.VUE_APP_API_URL + 'cameras',{
        params: {
          api_id: api_id,
          api_key: api_key
        }
      })
      .then(function (response) {
        // handle success
        let aux = response.data.cameras
        aux.forEach(function (arrayItem) {
          myitems.push({
            thumbnail: arrayItem.thumbnail_url + '?api_id=' + api_id + '&api_key=' + api_key,
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
  }
};
</script>
