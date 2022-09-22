import Vue from 'vue'
// const Vue = window.vue
// const ElementUI = window['element-ui']
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
  el: '#app',
  render: h => h(App)
});