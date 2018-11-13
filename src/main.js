import './plugins/vuetify'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import config from './config'

Vue.config.productionTip = false

firebase.initializeApp(config)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
