<template>
  <section>
    <Notification v-bind="notification"></Notification>
    <v-container fluid>
      <div id="uploader"></div>
    </v-container>
  </section>
</template>

<script>
import Notification from '@/components/Notification'
const { cloudinary } = window

export default {
  name: 'Dashboard',
  components: { Notification },
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
      },
      notification: {
        action: undefined,
        button: '',
        icon: '',
        show: false,
        text: '',
        type: ''
      },
      url: ''
    }
  },
  created () {
    cloudinary.setAPIKey('821243592279346')
    cloudinary.setCloudName('randommonkey')
  },
  mounted () {
    this.widget = cloudinary.createUploadWidget(this.options, (error, result) => {
      if (error) {
        this.notification = {
          icon: 'info',
          show: true,
          text: 'Algo salió mal...',
          timeout: 2500,
          type: 'warning'
        }
      }
      if (result && result.event === 'success') {
        this.url = result.info.secure_url
        this.notification = {
          action: this.copyToClipboard,
          button: 'Copiar URL',
          icon: 'done',
          show: true,
          text: '¡Listo!',
          type: 'success'
        }
      }
    }).open()
  },
  methods: {
    copyToClipboard () {
      const input = document.createElement('input')
      input.style = 'position: absolute; left: -1000px; top: -1000px'
      input.value = this.url
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      this.notification.show = false
    }
  }
}
</script>
