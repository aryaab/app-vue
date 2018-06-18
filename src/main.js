import Vue from 'vue'
import App from './App.vue'
import ChildComponent from './ChildComponent.vue'

import EventBus from '@/plugins/event-bus'

Vue.use(EventBus)

Vue.component('child', ChildComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
