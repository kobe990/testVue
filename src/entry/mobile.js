
/* eslint-disable */
// Dynamic setting assetsServer due to require.ensure
__webpack_public_path__ = ''
/* eslint-enable */

import Vue from 'vue'
import App from '~views/mobile/index'
import router from '~router/mobile/index'
import store from '~store/index'

// import FastClick from 'fastclick'


// Init FastClick
// FastClick.attach(document.body)


const app = new Vue({
  ...App,
  router,
  store,
})
app.$mount('#app')
