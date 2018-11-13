<template>
  <v-container fill-height>
    <Notification v-bind="notification"></Notification>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-form v-model="valid">
          <v-text-field
            type="email"
            prepend-icon="email"
            label="Email"
            v-model="email"
            :rules="[
              value => !!value || 'Este campo es obligatorio',
              value => pattern.test(value) || 'Escribe un email válido'
            ]"
            autofocus
            required
          ></v-text-field>
          <v-text-field
            type="password"
            prepend-icon="lock"
            label="Contraseña"
            v-model="password"
            :rules="[
              value => !!value || 'Este campo es obligatorio'
            ]"
            required
          ></v-text-field>
          <v-btn
            class="mt-3"
            @click="signin"
            :disabled="!valid"
            :loading="loading"
          >
            Iniciar sesión
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import Notification from '@/components/Notification'

export default {
  name: 'Login',
  components: { Notification },
  data () {
    return {
      email: '',
      password: '',
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      loading: false,
      valid: false,
      notification: {
        icon: '',
        text: '',
        show: false,
        type: ''
      }
    }
  },
  methods: {
    async signin () {
      this.loading = true
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.replace('/dashboard')
      } catch (error) {
        this.notification = {
          text: 'Email o contraseña incorrectos',
          icon: 'mood_bad',
          show: true,
          type: 'error',
          timeout: 2500
        }
        this.loading = false
      }
    }
  }
}
</script>
