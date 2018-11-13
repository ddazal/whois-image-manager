<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Whois Image Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="user" @click="signout" flat>Cerrar sesión</v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer class="pa-2 white--text" color="#0E0329">
      <v-spacer></v-spacer>
      <div>Datasketch &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'App',
  data () {
    return {
      user: undefined
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user
    })
  },
  methods: {
    async signout () {
      await firebase.auth().signOut()
      this.$router.replace('/')
    }
  }
}
</script>
