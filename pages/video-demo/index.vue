<template>
	<view>
		<button type="default" @click="toVideoDetail">详情</button>
	</view>
</template>

<script>
	export default {
		methods: {
			toVideoDetail() {
				console.log('xxx')
				uni.navigateTo({
					url: '/pages/detail-video/detail-video'
				})
			}
		}
	}
</script>

<style>
</style>
