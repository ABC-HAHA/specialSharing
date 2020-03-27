<template>
	<view >
		<text class="problem-title">常见问题解决方法</text>
		<view class="problem-item">
			<p>1.热更新失败</p>
			<view>如果打开APP后提示更新，点击“立即更新”但是更新非常慢，或者显示“更新失败”，一般是因为网速问题比较慢，或者热更新高峰期
			导致，可以在高峰期过后再进行版本更新。高峰期过后请点击“我的”——“设置”——“更新版本”——“现在更新”进行版本更新。
			</view>
		</view>
		<view class="problem-item">
			<p>2.任务领取点不动或者领取失败</p>
			<view>如果看见APP上发布的任务，点击“任务领取”的时候发现没有反应，首先看下自己的用户等级和任务等级是否匹配，高级用户只能领取高级任务，中级用户只能领取中级任务，低级用户只能领取低级任务。并且任务每天每个用户只能领取一个对应等级的任务。
			</view>
		</view>
		<view class="problem-item">
			<p>3.任务审核被打回</p>
			<view>如果提交的任务被审核人员打回，请认真核对是否按照要求文成了任务项，同时被打回的任务也会说明审核不通过的原因。
			</view>
		</view>
		<view class="problem-item">
			<p>4.体现审核反馈比较慢</p>
			<view>如果提交的任务被审核人员打回，请认真核对是否按照要求文成了任务项，同时被打回的任务也会说明审核不通过的原因。
			</view>
		</view>
		<view class="feedBack" @click="feedback">我要反馈
			
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		 methods: {
			feedback(){
				uni.navigateTo({
					url: '/pages/mine/feedback',
					animationType: 'slide-in-right'
				});
			},
		 }
	}
</script>

<style lang="less" scoped>
	.problem-title{
		padding:10upx 30upx;
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.problem-item{
		width:750upx;
		height:220upx;
		background:rgba(255,255,255,1);
		margin-top:10upx;
		// padding:10upx 0upx;
		>p{
			font-size:24upx;
			font-family:PingFang SC;
			font-weight:500;
			color:#3F8AF0;
		}
		>view{
			font-size:18upx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(102,102,102,1);
			line-height:36upx;
			padding:10upx ;
		}
		
	}
	.feedBack{
		position: fixed;
		width:750upx;
		height:80upx;
		background:#3F8AF0;
		bottom:0;
		line-height:80upx;
		text-align: center;
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
</style>
