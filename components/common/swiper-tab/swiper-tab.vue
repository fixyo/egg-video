<template>
	<view>
		<scroll-view
			ref="tabbar" 
			id="tab-bar" 
			class="tab-bar" 
			:scroll="false"
			:scroll-x="true"
			:show-scrollbar="false"
			:scroll-into-view="scrollInto"
		>
			<view style="flex-direction: column;">
				<view style="flex-direction: row;">
					<view 
						class="uni-tab-item" 
						:style="{width: `${getTabWidth}rpx`}"
						v-for="(tab,index) in tabList" 
						:key="tab.id" 
						:id="tab.id"
						:ref="'tabitem' + index"
						:data-id="index"
						:data-current="index" 
						@click="ontabtap"
					>
						<text 
							class="uni-tab-item-title" 
							:class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
					</view>
				</view>
				<view class="scroll-view-indicator">
					<view 
						ref="underline" 
						class="scroll-view-underline" 
						:class="isTap ? 'scroll-view-animation':''"
						:style="{'left': `${getLineLeft}rpx`, 'width': `${getTabWidth}rpx`}"
					></view>
				</view>
			</view>
		</scroll-view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				tabList: [],
				scrollInto: "",
				indicatorLineLeft: 0,
				indicatorLineWidth: 0,
				tabIndex: 1,
				isTap: false 
			}
		},
		mounted() {
			// console.log('mounted')
		},
		created() {
			console.log('created')
			for (var i = 0; i < 4; i++) {
				this.tabList.push({
					id: "tab" + i,
					name: 'Tab ' + (i + 1),
					pageid: i + 1
				})
			}
		},
		computed: {
			getTabWidth() {
				if (!this.tabList.length) {
					return 0
				} else {
					return `${750 / this.tabList.length}` 
				}
			},
			getLineLeft() {
				return this.getTabWidth * this.tabIndex 
			}
		},
		methods: {
			ontabtap() {}
		}
	}
</script>

<style>
	/* #ifndef APP-PLUS */
	page {
		width: 100%;
		min-height: 100%;
		display: flex;
	}
	/* #endif */
	
	.tabs {
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		background-color: #ffffff;
		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}
	
	.tab-bar {
		width: 750rpx;
		height: 84rpx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}
	
	/* #ifndef APP-NVUE */
	.tab-bar ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	/* #endif */
	
	.uni-tab-item {
		/* #ifndef APP-PLUS */
		display: inline-block;
		/* #endif */
		flex-wrap: nowrap;
		align-items: center;
	}
	
	.scroll-view-indicator {
		position: relative;
		height: 2px;
		background-color: transparent;
	}
	
	.scroll-view-underline {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 0;
		background-color: #007AFF;
	}
	
	.scroll-view-animation {
		transition-duration: 0.2s;
		transition-property: left;
	}
	
	.uni-tab-item-title {
		color: #555;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		flex-wrap: nowrap;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}
	
	.uni-tab-item-title-active {
		color: #007AFF;
	}
</style>
