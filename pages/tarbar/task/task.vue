<template>
	<div>
		<!-- <swiper class="swiper" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in swiperArry" :key="index"><image class="swiper-list" :src="item.picUrl"></image></swiper-item>
		</swiper> -->
		<!-- <navigator class="taskbox" url="../../help/help">
			<image src="../../../static/bangzhu.png" mode=""></image>
			<view class="task_list">
				<view class="task_title">帮助中心</view>
				<view class="task_content">为您提供各种任务教程,不懂点这里</view>
			</view>
		</navigator> -->
		<navigator class="taskbox" url="../../tuwenPromoting/tuwenPromoting">
			<image src="../../../static/tuwen.png" mode=""></image>
			<view class="task_list">
				<view class="task_title">图文推广</view>
				<view class="task_content">分享图文信息到朋友圈，赚取佣金</view>
			</view>
		</navigator>
		<navigator class="taskbox" url="../../lianjiePromoting/lianjiePromoting">
			<image src="../../../static/lianjie.png" mode=""></image>
			<view class="task_list">
				<view class="task_title">链接推广</view>
				<view class="task_content">分享链接信息到朋友圈，赚取佣金</view>
			</view>
		</navigator>
		<navigator class="taskbox" url="../../shipinPromoting/shipinPromoting">
			<image src="../../../static/shipin.png" mode=""></image>
			<view class="task_list">
				<view class="task_title">视频推广</view>
				<view class="task_content">分享图文信息到朋友圈，赚取佣金</view>
			</view>
		</navigator>
		<!-- <navigator class="taskbox" url="/pages/help/getMoney/getMoney">
			<image src="../../../static/yongjin.png" mode=""></image>
			<view class="task_list">
				<view class="task_title">领取佣金</view>
				<view class="task_content">点击此处进入，注册账号，领取佣金</view>
			</view>
		</navigator> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			swiperArry: [{ picUrl: '../../../static/banner.png' }, { picUrl: '../../../static/banner.png' }]
		};
	},
	created() {
		uni.request({
			url: this.websiteUrl + '/api/pic/query?picType=' + 1,
			method: 'GET',
			success: res => {
				if (res.data.list.length > 0) {
					this.swiperArry = res.data.list;
					console.log(this.swiperArry);
				}
			},
			fail: () => {},
			complete: () => {}
		});
	}
};
</script>

<style lang="less" scoped>
.swiper {
	height: 180upx;
	.swiper-list {
		margin-top: 20upx;
		margin-left: 25upx;
		width: 700upx;
		height: 174upx;
	}
}

.taskbox {
	margin: 25upx;
	background: #ffffff;
	display: flex;
	image {
		width: 120upx;
		height: 120upx;
		margin: 35upx 40upx;
	}
	.task_list {
		margin: 58upx 0upx 20upx;
		.task_title {
			font-size: 30upx;
			color: #25a39c;
		}
		.task_content {
			font-size: 24upx;
		}
	}
}
</style>
