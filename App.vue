<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 初始化用户登录状态
			// this.$store.dispatch('initUser')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 引入官方样式库 */
	/* #ifndef APP-NVUE */
	@import url("./common/style/uni.css");
	/* 引入animate动画库 */
	@import url("./common/style/animate.css");
	/* #endif */
	/* 引入全局样式库 */
	@import url("./common/style/common.css");
	/* 引入全局样式补充 */
	@import url("./common/style/customize.css");
	/* 引入自定义图标库 */
	/* #ifndef APP-NVUE */
	@import url("./common/style/icon.css");
	/* #endif */
</style>
