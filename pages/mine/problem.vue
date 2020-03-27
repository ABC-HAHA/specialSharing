<template>
	<view>
		<image class="agent-item" src="../../static/problem2.png" @tap="onLine"></image>
		<image class="agent-item" src="../../static/problem1.png" @click="toAnswer"></image>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		onLine() {
			// #ifdef APP-PLUS
			plus.runtime.openWeb('https://train.yanola.com/talk/chatClient/chatbox.jsp?companyID=631055507&configID=391&jid=6145092818&s=1');
			// #endif
		},
		toAnswer() {
			uni.navigateTo({
				url: '/pages/mine/answer',
				animationType: 'slide-in-right'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.agent-item {
	width: 750upx;
	height: 326upx;
}
</style>
