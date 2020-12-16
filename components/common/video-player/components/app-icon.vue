<template>
	<view @click="click" class="icon-wrapper">
		<text class="iconfont text-white" :style="`font-size:${size}px;`">{{icon}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			size: {
				type: [Number, String],
				default: 20
			},
			icon: {
				type: String,
				default: ''
			}
		},
		methods: {
			click() {
				this.$emit('click')
			}
		}
	}
</script>

<style>
	.icon-wrapper {
		width: 44px;
		height: 44px;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
