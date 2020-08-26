import Vue from 'vue'
import VuePaginate from 'vue-paginate'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VuePaginate)

Vue.mixin({
  methods: {
    getById(e) {
      return e[0].filter((val) => val.id == e[1]);
    },
  },
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
