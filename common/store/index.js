import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		user 
	}
})