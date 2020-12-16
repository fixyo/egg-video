<template>
	<button
		class="app-uni-button"
		:class="[getClass(), getSize()]"
		:loading="loading"
    :disabled="disabled"
		:open-type="openType"
    :form-type="formType"
		@getuserinfo="bindgetUserInfo"
		@tap="btnClick"
	>
		<slot></slot>
	</button>
</template>

<script>
// @params type: 样式类型						primary主要  info信息  success成功 error错误  warning警告 default
// @params color: 颜色							  默认: ''
// @params size: 按钮尺寸						可选: larger large  middle small smaller mini
// @params font-size: 字体大小				默认: 32
// @params plain: 是否为朴素按钮			默认: false
// @params disabled: 是否为禁用按钮		默认: false
// @params round: 是否为圆角		默认: false
export default {
	props: {
		type: {
			type: String,
			default: 'default'
		},
    formType: String,
		color: {
			type: String,
			default: ''
		},
		// larger large middle small smaller mini
		size: {
			type: String,
			default: 'middle'
		},
		plain: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
    link: {
    	type: Boolean,
    	default: false
    },
		loading: {
			type: Boolean,
			default: false
		},
		round: {
			type: Boolean,
			default: false
		},
		openType: {
			type: String,
			default: ''
		},
    path: String // 跳转路径
	},
	data() {
		return {};
	},
  created() {
  },
	computed: {},
	methods: {
		bindgetUserInfo({ detail = {} } = {}) {
			this.$emit('getuserinfo', detail);
		},
		btnClick() {
			if (this.disabled) return false;
      if(this.path) {
        uni.navigateTo({
          url: this.path
        })
      } else {
        this.$emit('click');
      }
		},
		getClass() {
			const className = [];
      let t = ''
      if(this.link) {
        t = `app-${this.type}-link underline`
      } else {
        t = `app-${this.type}-btn`
      }
      className.push(t)
      if(this.plain) className.push('plain')
      if(this.disabled) className.push('disabled')
			if(this.round) className.push('round')
      return className.join(' ')
		},
    getSize() {
      return `app-btn-${this.size}`
    }
	}
};
</script>

<style lang="scss" scoped>
  @import  'app-button.scss'
</style>
