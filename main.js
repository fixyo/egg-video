import Vue from 'vue'
import App from './App'

import $H from './common/request.js';
import { http } from './common/lib/request/index.js'
import helper from './common/util/index.js'

Vue.prototype.$H = $H
Vue.prototype.$request = http 
Vue.prototype.$helper = helper 

// import store from './store/index.js';
import store from './common/store/index.js'
Vue.prototype.$store = store


// Vue.prototype.authJump = (options)=>{
// 	if(!store.state.token){
// 		uni.showToast({
// 			title: '请先登录',
// 			icon: 'none'
// 		});
// 		return uni.navigateTo({
// 			url: '/pages/login/login'
// 		});
// 	}
// 	uni.navigateTo(options);
// }

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
  ...App
})
app.$mount()
