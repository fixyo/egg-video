<template>
	<view 
		class="app-slider flex align-center"
		@touchstart="touchstart"
		@touchmove="touchmove"
		@touchend="touchend" 
		@touchcancel="touchcancel"
	>
		<view class="slider-bar rounded flex-1">
			<view class="slider-bar-progress bg-main" :style="progressBarStyle"></view>
		</view>
		<view class="slider-circle rounded-circle bg-main" :style="progressBtnStyle"></view>
	</view>
</template>

<script>
	export default {
		inject: ['videoComInstance'],
		props: {
			currentTime: {
				type: Number,
				default: 0
			},
			duration: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				width: 0,
				currentWidth: 0,
				left: 0,
				touchStart: false 
			}
		},
		created() {
			this.width = this.videoComInstance.windowWidth - 88 - 90 - 15
			this.left = 44 
			this.getCurrentWidth()
			// console.log(this.width)
		},
		computed: {
			progressBarStyle() {
				return `width: ${this.currentWidth}px;`
			},
			progressBtnStyle() {
				return `left: ${this.currentWidth}px;`
			},
			curTime() {
				return this.width === 0 ? 0 : this.currentWidth / this.width * this.duration 
			}
		},
		watch: {
			currentTime(newVal) {
				if (this.touchStart) return 
				// const rate = this.dration === 0 ? 0 : newVal / this.duration 
				// this.currentWidth = rate * this.width 
				this.getCurrentWidth()
			}
		},
		methods: {
			getCurrentWidth() {
				this.currentWidth = this.duration == 0 ? 0 : (this.currentTime/this.duration) * this.width
			},
			touchstart(e) {
				// ssh
				if (this.duration === 0) return 
				this.touchStart = true 
	
				this.currentWidth = e.touches[0].screenX - this.left 
			},
			touchmove(e) {
				if (this.duration === 0) return 
				let width = e.touches[0].screenX - this.left 
				if (width <= 0) {
					this.currentWidth = 0
				} else if (width >= this.width) {
					this.currentWidth = this.width 
				} else {
					this.currentWidth = width 
				}
				
				this.$emit('update', this.curTime)
			},
			touchend(e) {
				if(this.duration === 0) return
				this.touchStart = false
				console.log(this.curTime, 'curTime')
				this.$emit('change', this.curTime)
			},
			touchcancel(e) {
				
			}
		}
	}
</script>

<style>
	.app-slider {
		height: 44px;
		position:relative;
	}
	.slider-bar {
		height: 3px;
		background-color: rgba(255,255,255, 0.5);
		
	}
	.slider-circle {
		width: 15px;
		height: 15px;
		position: absolute;
	}
	.slider-bar-progress {
		height: 3px;
	}
</style>
