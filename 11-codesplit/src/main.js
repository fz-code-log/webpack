import Vue from 'vue'
// const Vue = window.Vue
import App from './App.vue'

// import(/* webpackChunkName: 'utils' */'./utils').then(module => {
//   console.log(module);
// })

import {test} from './utils'
console.log(test);
new Vue({
  el: '#app',
  render: h => h(App)
});