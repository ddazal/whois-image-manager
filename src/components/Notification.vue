<template>
  <v-snackbar
    top
    :color="type"
    :value="show"
    :timeout="timeout"
  >
    <v-layout row align-center>
      <v-icon v-if="icon" color="white">{{ icon }}</v-icon>
      {{ text }}
    </v-layout>
    <v-btn v-if="button" flat small @click="action">{{ button }}</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    action: {
      type: Function
    },
    button: {
      type: String
    },
    icon: {
      type: String
    },
    show: {
      required: true,
      type: Boolean
    },
    text: {
      required: true,
      type: String
    },
    timeout: {
      default: 0,
      type: Number
    },
    type: {
      type: String
    }
  }
}
</script>

