export default {
	toast(title, icon = 'none', duration = 1500) {
		return uni.showToast({
			title,
			icon,
			duration
		})
	},
	async backToLogin() {
			// 存当前页面的地址
			const currentPage = getCurrentPages()[getCurrentPages().length - 1];
			const params = {};
			// #ifdef H5
			params.route = `/${currentPage.$vm.route}`;
			params.query = currentPage.$vm.$mp && currentPage.$vm.$mp.query;
			// #endif
			// #ifdef MP
			params.route = `/${currentPage.$vm.__route__}`;
			params.query = currentPage.$vm.$mp && currentPage.$vm.$mp.query;
			// #endif
			// #ifdef APP-PLUS
			params.route = `/${currentPage.route}`;
			params.query = currentPage.options;
			// #endif
			uni.setStorageSync('backToPage', JSON.stringify(params));
			// uni.removeTabBarBadge({ index: mConstDataConfig.cartIndex });
			// uni.removeTabBarBadge({ index: mConstDataConfig.notifyIndex });
			// await mStore.commit('logout');
			// mRouter.push({ route: '/pages/public/logintype' });
		},
}