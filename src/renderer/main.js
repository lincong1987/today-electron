import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n'
import wzel from 'wzel'

import { dateFormatter } from './utils/filters/dateformatter'

Vue.config.productionTip = false
Vue.use(wzel)

Vue.filter('date', dateFormatter)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
