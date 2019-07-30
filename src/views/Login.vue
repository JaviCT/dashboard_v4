<template>
  <v-app id="login2">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-form id="nativeForm">
                <v-card-text>
                  <v-text-field prepend-icon="fas fa-user" v-model="formUsername" name="email" label="Email" type="text"></v-text-field>
                  <v-text-field prepend-icon="fas fa-lock" v-model="formPassword" id="password" name="password" label="Password" type="password"></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login">Login</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: () => ({
    formUsername: '',
    formPassword: ''
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    async login () {
      let api_id = null
      let api_key = null
      await axios.get(process.env.VUE_APP_API_URL + 'users/'+ this.formUsername +'/credentials', {
        params: {
          password: this.formPassword
        }
      }).then(function (response) {
        if (response.status === 200 && 'api_id' in response.data && 'api_key' in response.data) {
          api_id = response.data.api_id
          api_key = response.data.api_key
        }
      }, function (err) {
        console.log('err', err)
      })
      if (api_id && api_key) {
        this.$session.start()
        this.$session.set('api_id', api_id)
        this.$session.set('api_key', api_key)
        // Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
        this.$router.push('/cameras')
      }
    }
  }
};
</script>
