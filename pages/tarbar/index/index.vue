<template>
	<view class="index-page">
		<swiperDot></swiperDot>
		<view class="notice">
			<image src="../../../static/notice.png" mode=""></image>
			<swiper class="video-guanggao-swiper" :autoplay="true" circular="true" vertical="true">
				<swiper-item class="video-guanggao-item" v-for="(adverItem, index) in advertArr" :key="index">
					<view class="">{{ adverItem.windowText }}</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="list">
			<view class="list-item" v-for="(item, index) in indexArr" :key="index" :id="index" @tap="selectButton">
				<view>
					{{ item.title }}
					<text>{{ item.dec }}</text>
				</view>
				<image :id="index" :src="item.src" @tap="selectButton"></image>
			</view>
		</view>
		<image class="bottom-image" src="../../../static/banner.png"></image>
		<!-- <image  style="width:100upx;height:100upx" src="../../../static/152x152.png"></image> -->
		<!-- <uni-popup :show="redPacketType === 'redPacketStatus'" position="middle" :shareStatus="false" @hidePopup="hidePopup">
			<view class="packet">
				<image class="close1" src="../../../static/redpacket4.png" @click="hidePopup"></image>
				<image class="redpacket1" src="../../../static/redpacket1.png"></image>
				<image class="redpacketButton" src="../../../static/redpacket3.png" @click="getRedPacket"></image>
			</view>
		</uni-popup>
		<uni-popup :show="redPacketType === 'redPacketResult'" position="middle" :shareStatus="false" @hidePopup="hidePopup">
			<view class="packet">
				<image class="close2" src="../../../static/redpacket4.png" @click="hidePopup"></image>
				<image class="redpacket2" src="../../../static/redpacket2.png"></image>
			</view>
		</uni-popup> -->
		<unimask :show="type === 'update_show'" position="middle" :shareStatus="true">
			<view class="shareGroup">
				<!-- 遮罩 -->
				<!-- {{ pro }} -->
				<view class="shareGroup_pro"><cmd-progress :percent="pro" :stroke-width="24" stroke-color="linear-gradient(to right, #ef32d9, #89fffd)"></cmd-progress></view>
			</view>
		</unimask>
	</view>
</template>

<script>
import cmdProgress from '@/components/cmd-progress/cmd-progress.vue';
import unimask from '@/pages/mine/uni-popup.vue';

import swiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'; //加载动画
import uniPopup from '@/components/uni-popup/uni-popup';
export default {
	components: {
		swiperDot,
		uniPopup,
		unimask,
		cmdProgress
	},
	onShow() {
		this.update();
		// this.getRedPacketStatus();
	},
	data() {
		return {
			activityInfoList: [],
			redPacketType: '',
			indexArr: [
				{ title: '如何赚钱', dec: '一份耕耘一份财', src: '../../../static/picture1.png' },
				{ title: '新手中心', dec: '新手上路秘籍发放', src: '../../../static/picture2.png' },
				{ title: '领取佣金', dec: '注册绑定账号领取佣金', src: '../../../static/picture3.png' },
				{ title: '代理赚佣', dec: '下级发圈立即赚佣', src: '../../../static/picture4.png' },
				{ title: '客服咨询', dec: '一键点击自助了解', src: '../../../static/picture5.png' },
				{ title: '疑难问答', dec: '你的疑问我来解答', src: '../../../static/picture6.png' }
			],
			advertArr: [
				{
					name: '张三',
					money: 20.0
				},
				{
					name: '李武',
					money: 30.0
				}
			],
			progress: 0,
			type: ''
		};
	},
	onLoad() {
		uni.request({
			url: this.websiteUrl + '/api/comnet/query',
			method: 'GET',
			success: res => {
				// console.log(res);
				this.advertArr = res.data.list;
				// console.log(this.advertArr);
			},
			fail: () => {},
			complete: () => {}
		});
	},
	methods: {
		hidePopup() {
			this.redPacketType = '';
		},
		selectButton(e) {
			switch (e.target.id) {
				case '0':
					this.briefIntroduction();
					break;
				case '1':
					this.goHelp();
					break;
				case '2':
					// plus.nativeUI.toast('正在开发中');
					this.union();
					break;
				case '3':
					this.goAgent();
					break;
				case '4':
					this.toQQ();
					break;
				case '5':
					this.goProblem();
					break;
			}
		},
		briefIntroduction() {
			uni.navigateTo({
				url: '/pages/mine/briefIntroduction',
				animationType: 'slide-in-right'
			});
		},
		goHelp() {
			uni.navigateTo({
				url: '/pages/help/help',
				animationType: 'slide-in-right'
			});
		},
		union() {
			uni.navigateTo({
				url: '/pages/help/getMoney/getMoney',
				animationType: 'slide-in-right'
			});
		},
		goAgent() {
			uni.navigateTo({
				url: '/pages/mine/agent',
				animationType: 'slide-in-right'
			});
		},
		goProblem() {
			uni.navigateTo({
				url: '/pages/mine/problem',
				animationType: 'slide-in-right'
			});
		},
		// // 获取红包状态
		// getRedPacketStatus() {
		// 	var self = this;
		// 	uni.request({
		// 		url: self.websiteUrl + '/api/activity/getFirstLogin',
		// 		header: {
		// 			Authorization: self.$store.state.userInfo.token
		// 		},
		// 		method: 'GET',
		// 		success: res => {
		// 			console.log(res.data);
		// 			if (res.data.code != 600) {
		// 				console.log(res.data.list instanceof Array);
		// 				if (res.data.list.length > 0) {
		// 					self.activityInfoList = res.data.list;
		// 					self.redPacketType = 'redPacketStatus';
		// 				} else {
		// 				}
		// 			} else {
		// 				plus.nativeUI.alert('登录过期，请重新登录');
		// 			}
		// 		}
		// 	});
		// },
		// getRedPacket() {
		// 	uni.request({
		// 		url: this.websiteUrl + '/api/activity/receive',
		// 		header: {
		// 			Authorization: this.$store.state.userInfo.token
		// 		},
		// 		data: {
		// 			activityId: this.activityInfoList[0].activityId, //activityInfoList[0].activityId
		// 			userId: this.$store.state.userInfo.userId
		// 		},
		// 		method: 'POST',
		// 		success: res => {
		// 			console.log(res.data);
		// 			if (res.data.code == 200) {
		// 				this.redPacketType = 'redPacketResult';
		// 			}
		// 		}
		// 	});
		// },
		toQQ() {
			var self = this;
			uni.request({
				url: this.websiteUrl + '/api/customer/qq',
				method: 'GET',
				success: res => {
					console.log(res.data.data.qq);
					self.customeQQ = res.data.data.qq;
					uni.showModal({
						title: '提示',
						content: 'QQ:请复制官方群号添加，进群提供邀请码+手机号码才可加入',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
								plus.runtime.openURL('mqq://im/chat?chat_type=wpa&uin=' + self.customeQQ, function(res) {
									plus.nativeUI.alert('本机没有安装QQ，无法启动');
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			});
		},
		// onLoad(){
		// 	getRedPacketStatus();
		// }
		update() {
			//#ifdef APP-PLUS
			let that = this;
			let systemName = plus.os.name.toUpperCase();
			let versionNum;
			// let progress = 0;
			let downtimer;
			let appid = plus.runtime.appid;
			let upgradeCycle = 604800000;
			let lastTime = 0;
			uni.getStorage({
				key: 'version_update_time',
				success: function(res) {
					lastTime = res.data;
				}
			});
			plus.runtime.getProperty(appid, function(wgtinfo) {
				versionNum = plus.storage.getItem('app-id'); // wgtinfo.versionCode;
				// console.log(versionNum);
				// console.log(111111111111111111111111111111111111, wgtinfo);
				if (!versionNum) {
					versionNum = wgtinfo.versionCode;
				} else {
					versionNum = versionNum.replace(/\./g, '');
				}
				// console.log(systemName, versionNum);
				uni.request({
					url: that.websiteUrl + '/sys/checkversion',
					method: 'POST',
					data: {
						systemName: systemName,
						versionCode: versionNum
					},
					success: res => {
						console.log(res);
						let data = res.data;
						if (data.data) {
							console.log(123456);
							var currentVersion = data.data.versionName;
						}
						// plus.storage.setItem("app-id", res.data.data.versionName.toString());
						let currentTime = new Date();
						currentTime = currentTime.getTime();
						if (data.data != null) {
							// console.log(updateType)
							console.log(1234567);

							if (lastTime + upgradeCycle > currentTime) {
								return;
							}
							console.log(1234569);
							if (plus.networkinfo.getCurrentType() != 3) {
								if (data.data.versionWgtPath != '') {
									uni.showModal({
										title: '发现新版本',
										content: '有新的版本发布，检测到您当前为非Wifi连接，是否立即进行新版本下载？',
										showCancel: true,
										cancelText: '下次再说',
										confirmText: '现在更新',
										success: res => {
											if (res.confirm) {
												switch (systemName) {
													case 'ANDROID':
														let downloadTask = uni.downloadFile({
															url: data.data.versionWgtPath,
															success: function(res) {
																if (res.statusCode === 200) {
																	plus.runtime.install(
																		res.tempFilePath,
																		{
																			force: true
																		},
																		function() {
																			plus.storage.setItem('app-id', currentVersion.toString());
																			plus.nativeUI.toast('更新成功');
																			plus.runtime.restart();
																		},
																		function() {
																			plus.nativeUI.toast('更新失败');
																		}
																	);
																} else {
																	plus.nativeUI.toast('下载失败，请检查网络');
																}
															}
														});
														downloadTask.onProgressUpdate(function(res) {
															that.progress = res.progress;
														});
														clearInterval(downtimer);
														that.type = '';
														downtimer = setInterval(function() {
															that.type = 'update_show';
															that.$store.commit('changeProgress', that.progress);
															if (progress == 100) {
																clearInterval(downtimer);
																that.type = '';
																return;
															}
														}, 500);
														break;
													case 'IOS':
														uni.downloadFile({
															url: data.data.versionWgtPath,
															success: function(res) {
																if (res.statusCode === 200) {
																	plus.runtime.install(
																		res.tempFilePath,
																		{
																			force: true
																		},
																		function() {
																			plus.storage.setItem('app-id', currentVersion.toString());
																			plus.nativeUI.toast('更新成功');
																			plus.runtime.restart();
																		},
																		function() {
																			plus.nativeUI.toast('更新失败');
																		}
																	);
																} else {
																	plus.nativeUI.toast('下载失败，请检查网络');
																}
															}
														});
														break;
												}
											} else {
												let currentTapTime = new Date();
												currentTapTime = currentTapTime.getTime();
												uni.setStorage({
													key: 'version_update_time',
													data: currentTapTime,
													success: function() {
														console.log('保存成功');
													}
												});
												return;
											}
										},
										fail: () => {},
										complete: () => {}
									});
								}
								if (data.data.path != '') {
									uni.showModal({
										title: '发现新版本',
										content: '有新的版本发布，检测到您当前为非Wifi连接，是否立即进行新版本下载？',
										showCancel: true,
										cancelText: '下次再说',
										confirmText: '现在更新',
										success: res => {
											if (res.confirm) {
												switch (systemName) {
													case 'ANDROID':
														let downloadTask = uni.downloadFile({
															url: data.data.path,
															success: function(res) {
																if (res.statusCode === 200) {
																	plus.runtime.install(
																		res.tempFilePath,
																		{
																			force: true
																		},
																		function() {},
																		function() {
																			plus.nativeUI.toast('安装失败');
																		}
																	);
																} else {
																	plus.nativeUI.toast('下载失败，请检查网络');
																}
															}
														});
														downloadTask.onProgressUpdate(function(res) {
															that.progress = res.progress;
														});
														clearInterval(downtimer);
														that.type = '';
														downtimer = setInterval(function() {
															that.type = 'update_show';
															that.$store.commit('changeProgress', that.progress);
															if (progress == 100) {
																clearInterval(downtimer);
																that.type = '';
																return;
															}
														}, 500);
														break;
													case 'IOS':
														plus.runtime.openURL(data.data.path);
														break;
												}
											} else {
												let currentTapTime = new Date();
												currentTapTime = currentTapTime.getTime();
												uni.setStorage({
													key: 'version_update_time',
													data: currentTapTime,
													success: function() {
														console.log('保存成功');
													}
												});
												return;
											}
										},
										fail: () => {},
										complete: () => {}
									});
								}
							} else {
								if (data.data.versionWgtPath != '') {
									uni.showModal({
										title: '发现新版本',
										content: '有新的版本发布，是否立即进行新版本下载？',
										showCancel: true,
										cancelText: '下次再说',
										confirmText: '现在更新',
										success: res => {
											if (res.confirm) {
												switch (systemName) {
													case 'ANDROID':
														let downloadTask = uni.downloadFile({
															url: data.data.versionWgtPath,
															success: function(res) {
																if (res.statusCode === 200) {
																	plus.runtime.install(
																		res.tempFilePath,
																		{
																			force: true
																		},
																		function() {
																			plus.storage.setItem('app-id', currentVersion.toString());
																			plus.nativeUI.toast('更新成功');
																			plus.runtime.restart();
																		},
																		function() {
																			plus.nativeUI.toast('更新失败');
																		}
																	);
																} else {
																	plus.nativeUI.toast('下载失败，请检查网络');
																}
															}
														});
														downloadTask.onProgressUpdate(function(res) {
															that.progress = res.progress;
														});

														clearInterval(downtimer);
														that.type = '';
														downtimer = setInterval(function() {
															that.type = 'update_show';
															that.$store.commit('changeProgress', that.progress);
															if (progress == 100) {
																clearInterval(downtimer);
																that.type = '';
																return;
															}
														}, 500);
														break;
													case 'IOS':
														uni.downloadFile({
															url: data.data.versionWgtPath,
															success: function(res) {
																if (res.statusCode === 200) {
																	plus.runtime.install(
																		res.tempFilePath,
																		{
																			force: true
																		},
																		function() {
																			plus.storage.setItem('app-id', currentVersion.toString());
																			plus.nativeUI.toast('更新成功');
																			plus.runtime.restart();
																		},
																		function() {
																			plus.nativeUI.toast('更新失败');
																		}
																	);
																} else {
																	plus.nativeUI.toast('下载失败，请检查网络');
																}
															}
														});
														break;
												}
											} else {
												let currentTapTime = new Date();
												currentTapTime = currentTapTime.getTime();
												uni.setStorage({
													key: 'version_update_time',
													data: currentTapTime,
													success: function() {
														console.log('保存成功');
													}
												});
												return;
											}
										},
										fail: () => {},
										complete: () => {}
									});
								}
								if (data.data.path != '') {
									uni.showModal({
										title: '发现新版本',
										content: '有新的版本发布，是否立即进行新版本下载？',
										showCancel: true,
										cancelText: '下次再说',
										confirmText: '现在更新',
										success: res => {
											if (res.confirm) {
												switch (systemName) {
													case 'ANDROID':
														let downloadTask = uni.downloadFile({
															url: data.data.path,
															success: function(res) {
																if (res.statusCode === 200) {
																	plus.runtime.install(
																		res.tempFilePath,
																		{
																			force: true
																		},
																		function() {},
																		function() {
																			plus.nativeUI.toast('安装失败');
																		}
																	);
																} else {
																	plus.nativeUI.toast('下载失败，请检查网络');
																}
															}
														});
														downloadTask.onProgressUpdate(function(res) {
															that.progress = res.progress;
														});
														clearInterval(downtimer);
														that.type = '';
														downtimer = setInterval(function() {
															that.type = 'update_show';
															that.$store.commit('changeProgress', that.progress);
															if (progress == 100) {
																clearInterval(downtimer);
																that.type = '';
																return;
															}
														}, 500);
														break;
													case 'IOS':
														plus.runtime.openURL(data.data.path);
														break;
												}
											} else {
												let currentTapTime = new Date();
												currentTapTime = currentTapTime.getTime();
												uni.setStorage({
													key: 'version_update_time',
													data: currentTapTime,
													success: function() {
														console.log('保存成功');
													}
												});
												return;
											}
										},
										fail: () => {},
										complete: () => {}
									});
								}
							}
						}
					},
					fail: () => {},
					complete: () => {}
				});
			});
			//#endif
		}
	},
	computed: {
		pro: function() {
			return this.progress;
		}
	}
};
</script>

<style lang="less" scoped>
.index-page {
	width: 750upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.swiperDot {
		width: 710upx;
		height: 345upx;
	}
	.notice {
		width: 750upx;
		height: 90upx;
		background: rgba(255, 250, 232, 1);
		display: flex;
		// flex-direction: row;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		> image {
			margin-left: 40upx;
			width: 40upx;
			height: 40upx;
		}
		.video-guanggao-swiper {
			width: 720upx;
			height: 50upx;
			margin-left: 30upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
		}
		.video-guanggao-item {
			width: 720upx;
			height: 176upx;
			font-size: 36upx;
			color: rgba(226, 186, 79, 1);
		}
	}
	.list {
		width: 705upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		.list-item {
			margin-top: 20upx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			// align-items:center;
			width: 342upx;
			height: 186upx;
			background: rgba(220, 248, 248, 1);
			border-radius: 8upx;
			> view {
				margin-top: 10upx;
				display: flex;
				flex-direction: column;
				font-size: 24upx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40upx;
				> text {
					width: 100upx;
					font-size: 20upx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
			> image {
				margin-left: 50upx;
				margin-top: 40upx;
				width: 128upx;
				height: 128upx;
			}
		}
	}
	.bottom-image {
		margin-top: 20upx;
		width: 710upx;
		height: 345upx;
	}
	.redpacket1 {
		width: 620upx;
		height: 684upx;
	}
	.redpacket2 {
		width: 640upx;
		height: 660upx;
	}
	.redpacketButton {
		width: 403upx;
		height: 86upx;
		position: absolute;
		left: 110upx;
		top: 575upx;
	}
	.close1 {
		width: 45upx;
		height: 45upx;
		position: absolute;
		left: 580upx;
		top: 20upx;
	}
	.close2 {
		width: 45upx;
		height: 45upx;
		position: absolute;
		left: 500upx;
		top: 20upx;
	}
	.packet {
		position: absolute;
		// width:100upx;
		// height:100upx;
	}
}
.shareGroup {
	width: 750upx;
	height: 480upx;
	background-image: url(~@/static/update_img.png);
	background-size: 100% 100%;
	margin-top: 150upx;
	margin-left: 30upx;
	color: #007aff;
	position: relative;
	.shareGroup_pro {
		position: absolute;
		top: 330upx;
		left: 10%;
		width: 600upx;
	}
}
</style>
