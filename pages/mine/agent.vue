<template>
	<view >
		<image  class="agent-item" src="../../static/agent1.png" @click="myTeam"></image>
		<image  class="agent-item" src="../../static/agent2.png" @click="inTeam"></image>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		 methods: {
			myTeam(){
				uni.navigateTo({
					url: '/pages/mine/myTeam',
					animationType: 'slide-in-right'
				});
			},
			inTeam(){
				uni.navigateTo({
					url: '/pages/mine/inviteTeam',
					animationType: 'slide-in-right'
				});
			}
		 }
	}
</script>

<style lang="less" scoped>
	.agent-item{
		width:750upx;
		height: 326upx;;
	}
</style>
