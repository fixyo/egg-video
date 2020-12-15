class Request {
	config = {
		baseUrl: '',
		header: {
			'content-type': 'application/json'
		},
		methods: 'POST',
		dataType: 'json',
		// #ifdef APP-PLUS
		sslVerify: true 
		// #endif
	}
	
	// 是否是绝对路径
	static isFullUrl(url) {
		return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
	}
	
	// 拼接Url 
	static mergeUrl(url, baseUrl, params) {
		let fullUrl = Request.isFullUrl(url) ? url : `${baseUrl}${url}` 
		let queryStr = ''
		if (params && Object.keys(params).length > 0) {
			queryStr = Request.getQueryString(params)
			fullUrl = fullUrl.includes('?') ? `${fullUrl}${queryStr}` : `${fullUrl}?${queryStr}`
		}
		
		console.log(fullUrl, 'fullurl')
		return fullUrl 
	}
	
	// 拼接查询字符串
	static getQueryString(params) {
		// params: {name: 'zhangsan', age: 1} ==> name=zhangsan&age=1
		let str = ''
		
		Object.keys(params).forEach(key => {
			return str += `${key}=${encodeURIComponent(params[key])}&`
		})
		
		return str.slice(0, str.length - 1)
	}
	
	/**
	 * request.interceptor.request((config) => {
		 
	 })
	 */
	interceptor = {
		request: (cb) => {
			if (cb) {
				this.requestBeforeFun = cb 
			}
		},
		response: (cb, errcb) => {
			if (cb) {
				this.requestComFun = cb 
			}
			if (errcb) {
				this.requestComFail = errcb 
			}
		}
	}
	
	requestBeforeFun(config) {
		return config 
	}
	
	requestComFun(response) {
		return response
	}
	
	requestComFail(response) {
		return response 
	}
	
	validataStatus(statusCode) {
		return statusCode === 200 
	}
	
	setConfig(f) {
		this.config = f(this.config)
	}
	
	async request(options = {}) {
		
		options.baseUrl = options.baseUrl || this.config.baseUrl 
		options.dataType = options.dataType || this.config.dataType 
		options.url = options.url || ''
		options.data = options.data || {}
		options.params = options.params || {}
		options.header = {...this.config.header, ...options.header}
		options.method = options.method || this.config.method
		options.getTask = options.getTask || this.config.getTask 
		console.log(111)
		return new Promise((resolve, reject) => {
			let next = true 
			const cancel = (t = 'handle cancel', config = options) => {
				const err = {
					errMsg: t,
					config: config 
				}
				reject(err)
				next = false 
			}
			
			
			const requestConfig = { ...this.requestBeforeFun(options, cancel)}
			const _config = {...requestConfig}
			if (!next) return 
			const requestTask = uni.request({
				url: Request.mergeUrl(_config.url, _config.baseUrl, _config.params),
				data: _config.data,
				header: _config.header ,
				method: _config.method,
				complete: (res) => {
					res.config = requestConfig 
					console.log('complete', res)
					if (this.validataStatus(res.statusCode)) {
						res = this.requestComFun(res)
						console.log('xxxhhhhhhhhh', res)
						resolve(res)
					} else {
						console.log(2)
						res = this.requestComFail(res)
						reject(res)
					}
				}
			})
			if (requestConfig.getTask) {
				requestConfig.getTask(requestTask, handleRe)
			}
		})
	}
	
	get(url, params = {}) {
		const options = {}
		options.url = url 
		options.params = params 
		return this.request({
			method: 'GET',
			...options 
		})
	}
	
	post(url, data, options = {}) {
		return this.request({
			url,
			data,
			method: 'POST',
			...options 
		})
	}
}

export default Request 