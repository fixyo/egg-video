import Request from './request'
import systemConfig from '@/common/config/index.js'
import helper from '@/common/util'

const http = new Request()
http.setConfig(config => {
	config.baseUrl = process.env.NODE_ENV === 'development' 
		? systemConfig.development.baseUrl 
		: systemConfig.production.baseUrl 
	const systemInfo = uni.getSystemInfoSync()
	const systemInfoHeader = {
		'device-name': systemInfo.brand ,
		'width': systemInfo.screenWidth,
		'height': systemInfo.screenHeight,
		'os': systemInfo.platform,
		'os-version': systemInfo.system 
	}
	config.header = {
		...config.header,
		...systemInfoHeader 
	}
	return config 
})

let isRefreshing = false 
let requests = []
http.interceptor.request(
	(config) => {
		config.header['ticket'] = uni.getStorageSync('token')
		return config 
	}
)


// 刷新token 
async function handleRefreshToken(refresh_token) {
	const params = {}
	params.refresh_token = refresh_token 
	await http.post('/api/refesh_token', params).then(async res => {
		// 刷新token成功
		isRefreshing = false 
	})
}


http.interceptor.response(
	async response => {
		switch(response.statusCode) {
			case 200:
				return response.data 
				break;
			case 400:
				helper.toast('请求失败')
				return Promise.reject(response.data.message)
				break;
			case 401:
				isRefreshing = false 
				// 刷新token失败
				if (response.config.url === '/api/refresh_token') {
					uni.removeStorageSync('token')
					await store.commit('logout')
					uni.showModal({
						content: '会话过期，是否跳转登录页面？',
						success: confirm => {
							if (confirm.confirm) {
								helper.backToLogin()
								throw response.data.message 
							}
						}
					})
					break;
				} else {
					if (!store.state.refreshToken) {
						uni.removeStorageSync('token')
						await store.commit('logout')
						uni.showModal({
							content: '会话过期，是否跳转登录页面？',
							success: confirm => {
								if (confirm.confirm) {
									helper.backToLogin()
									throw response.data.message 
								}
							}
						})
					} else {
						if (!isRefreshing) {
							isRefreshing = true 
							await handleRefreshToken(store.state.refresh_token, response)
							requests.forEach(cb => cb());
							requests = [];
							isRefreshing = false;
							return http.request(response.config);
						} else {
							return new Promise(resplve => {
								requests.push(() => {
									resolve(http.request(response.config))
								})
							})
						}
					}
				}
				break;
			case 405:
				helper.toast('当前操作不被允许');
				return Promise.reject(response.data.message);
			case 404:
				helper.toast(response.data.message);
				return Promise.reject(response.data.message);
			case 429:
				helper.toast('请求过多，先休息一下吧');
				return Promise.reject(response.data.message);
			case 500:
				helper.toast('服务器打瞌睡了');
				return Promise.reject(response.data.message);
			default:
				helper.toast(response.data.message);
				return Promise.reject(response.data.message);
		}
	}
)


export { http }

