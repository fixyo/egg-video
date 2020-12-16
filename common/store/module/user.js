import cacheKeys from '@/common/config/cacheKeys.js'
export default {
	state: {
		userInfo: uni.getStorageSync(cacheKeys.CACHE_USER_INFO) || null,
		usreToken: uni.getStorageSync(cacheKeys.CACHE_USER_TOKEN) || ''
	},
	getters: {
		userInfo: state => state.userInfo,
		userToken: state => state.userToken 
	},
	mutations: {
		[cacheKeys.CACHE_USER_INFO](state, payload) {
			state.userInfo = payload 
			uni.setStorageSync(cacheKeys.CACHE_USER_INFO, payload)
		},
		[cacheKeys.CACHE_USER_TOKEN](state, payload) {
			state.userToken = payload 
			uni.setStorageSync(cacheKeys.CACHE_USER_TOKEN, payload)
		}
	}
}