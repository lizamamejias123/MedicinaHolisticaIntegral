import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
firebase.initializeApp(firebaseConfig)

var firebaseConfig = {
    apiKey: "AIzaSyDkPNyGDg5ksyRwAPpPCBsXYs6VH5AV5-s",
    authDomain: "paginawebmhi.firebaseapp.com",
    databaseURL: "https://paginawebmhi.firebaseio.com",
    projectId: "paginawebmhi",
    storageBucket: "paginawebmhi.appspot.com",
    messagingSenderId: "480473394553",
    appId: "1:480473394553:web:4b7bc9c5282dd924d413a8"
};

// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')