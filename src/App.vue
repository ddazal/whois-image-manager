<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Whois Image Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>Cerrar sesión</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <div id="uploader"></div>
      </v-container>
    </v-content>
    <v-footer class="pa-2 white--text" color="#0E0329">
      <v-spacer></v-spacer>
      <div>Datasketch &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
const { cloudinary } = window

export default {
  name: 'App',
  data () {
    return {
      widget: undefined,
      options: {
        clientAllowedFormats: ['png', 'jpeg', 'jpg'],
        inlineContainer: '#uploader',
        language: 'es',
        multiple: false,
        sources: ['local', 'url', 'camera'],
        theme: 'white',
        uploadPreset: 'whois_preset'
      }
    }
  },
  mounted () {
    cloudinary.setAPIKey('821243592279346')
    cloudinary.setCloudName('randommonkey')
    this.widget = cloudinary.createUploadWidget(this.options, (error, result) => {
      if (error) {
        console.log(error)
        // Do some with error
      }
      if (result && result.event === 'success') {
        console.log(result)
        // Do some with result.secure_url
      }
    }).open()
  },
  methods: {
    openWidget () {
      this.widget.open()
    }
  }
}
</script>
