<template>
	<view class="container">
		<!-- 轮播 -->
		<swiper class="swiper" :autoplay="true" :interval="3000" :duration="1000" :current="swiperCurrent" @change="changeSwiper">
			<swiper-item v-for="(item, index) in swiperImg" :key="index"><image class="swiper-item" :src="item.picUrl" @tap="toAD(item.skipUrl)"></image></swiper-item>
			<!-- <image src="../../static/banner.png" mode=""></image> -->
		</swiper>
		<!-- 轮播指示点样式修改 -->
		<view class="dots">
			<block v-for="(item, index) in swiperImg.length" :key="item"><view class="dot" :class="index == swiperCurrent ? ' active' : ''"></view></block>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperImg: [{ picUrl: '../../../static/banner.png' }, { picUrl: '../../../static/banner.png' }],
			current: 0,
			swiperCurrent: 0
		};
	},
	mounted() {
		uni.request({
			url: this.websiteUrl + '/api/pic/query?picType=' + 0,
			method: 'GET',
			success: res => {
				this.swiperImg = res.data.list;
				// console.log(this.swiperImg);
			},
			fail: () => {},
			complete: () => {}
		});
	},
	props: {},
	methods: {
		changeSwiper(e) {
			this.swiperCurrent = e.detail.current;
		},
		toAD(url) {
			// #ifdef APP-PLUS
			plus.runtime.openURL(url);
			// #endif
		}
	}
};
</script>

<style lang="less">
.container {
	position: relative;
	margin-top: 70upx;
	margin-bottom: 10upx;

	.swiper {
		width: 710rpx;
		height: 345rpx;
		border-radius: 16rpx;
		overflow: hidden;
		margin-top: 16rpx;
		position: relative;
		// margin-left: 10rpx;
		.swiper-item {
			width: 710rpx;
			height: 344rpx;
			border-radius: 16rpx;
		}
	}

	.dots {
		position: absolute;
		bottom: 70upx;
		left: 15%;
		// 这里一定要注意兼容不然很可能踩坑
		transform: translate(-50%, 0);
		-webkit-transform: translate(-50%, 0);
		z-index: 99;
		display: flex;
		flex-direction: row;
		justify-content: center;

		.dot {
			width: 60rpx;
			height: 4rpx;
			transition: all 0.6s;
			background: rgba(0, 0, 0, 0.3);
			margin-right: 10rpx;
		}

		.active {
			width: 60rpx;
			height: 4rpx;
			background: rgba(255, 255, 255, 0.8);
		}
	}
}
</style>
