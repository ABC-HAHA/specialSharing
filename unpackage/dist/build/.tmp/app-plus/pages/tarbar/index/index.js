(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarbar/index/index"],{"0e1e":function(t,e,n){"use strict";var a=n("479d"),i=n.n(a);i.a},"21f2":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},"479d":function(t,e,n){},"59cd":function(t,e,n){"use strict";var a=n("a1b1"),i=n.n(a);i.a},"5fe7":function(t,e,n){"use strict";var a={"cmd-progress":()=>n.e("components/cmd-progress/cmd-progress").then(n.bind(null,"ecb2"))},i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},a1b1:function(t,e,n){},ac5f:function(t,e,n){"use strict";n.r(e);var a=n("c75c"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},c75c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{swiperImg:[{picUrl:"../../../static/banner.png"},{picUrl:"../../../static/banner.png"}],current:0,swiperCurrent:0}},mounted:function(){var e=this;t.request({url:this.websiteUrl+"/api/pic/query?picType=0",method:"GET",success:function(t){e.swiperImg=t.data.list},fail:function(){},complete:function(){}})},props:{},methods:{changeSwiper:function(t){this.swiperCurrent=t.detail.current},toAD:function(t){plus.runtime.openURL(t)}}};e.default=n}).call(this,n("6e42")["default"])},c92f:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("fb85"));function r(t){return t&&t.__esModule?t:{default:t}}var s=function(){return n.e("components/cmd-progress/cmd-progress").then(n.bind(null,"ecb2"))},o=function(){return n.e("pages/mine/uni-popup").then(n.bind(null,"e419"))},u=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"ce26"))},c={components:{swiperDot:i.default,uniPopup:u,unimask:o,cmdProgress:s},onShow:function(){this.update()},data:function(){return{activityInfoList:[],redPacketType:"",indexArr:[{title:"如何赚钱",dec:"一份耕耘一份财",src:"../../../static/picture1.png"},{title:"新手中心",dec:"新手上路秘籍发放",src:"../../../static/picture2.png"},{title:"领取佣金",dec:"注册绑定账号领取佣金",src:"../../../static/picture3.png"},{title:"代理赚佣",dec:"下级发圈立即赚佣",src:"../../../static/picture4.png"},{title:"客服咨询",dec:"一键点击自助了解",src:"../../../static/picture5.png"},{title:"疑难问答",dec:"你的疑问我来解答",src:"../../../static/picture6.png"}],advertArr:[{name:"张三",money:20},{name:"李武",money:30}],progress:0,type:""}},onLoad:function(){var e=this;t.request({url:this.websiteUrl+"/api/comnet/query",method:"GET",success:function(t){e.advertArr=t.data.list},fail:function(){},complete:function(){}})},methods:{hidePopup:function(){this.redPacketType=""},selectButton:function(t){switch(t.target.id){case"0":this.briefIntroduction();break;case"1":this.goHelp();break;case"2":this.union();break;case"3":this.goAgent();break;case"4":this.toQQ();break;case"5":this.goProblem();break}},briefIntroduction:function(){t.navigateTo({url:"/pages/mine/briefIntroduction",animationType:"slide-in-right"})},goHelp:function(){t.navigateTo({url:"/pages/help/help",animationType:"slide-in-right"})},union:function(){t.navigateTo({url:"/pages/help/getMoney/getMoney",animationType:"slide-in-right"})},goAgent:function(){t.navigateTo({url:"/pages/mine/agent",animationType:"slide-in-right"})},goProblem:function(){t.navigateTo({url:"/pages/mine/problem",animationType:"slide-in-right"})},toQQ:function(){var e=this;t.request({url:this.websiteUrl+"/api/customer/qq",method:"GET",success:function(n){a("log",n.data.data.qq," at pages\\tarbar\\index\\index.vue:208"),e.customeQQ=n.data.data.qq,t.showModal({title:"提示",content:"QQ:请复制官方群号添加，进群提供邀请码+手机号码才可加入",success:function(t){t.confirm?(a("log","用户点击确定"," at pages\\tarbar\\index\\index.vue:215"),plus.runtime.openURL("mqq://im/chat?chat_type=wpa&uin="+e.customeQQ,function(t){plus.nativeUI.alert("本机没有安装QQ，无法启动")})):t.cancel&&a("log","用户点击取消"," at pages\\tarbar\\index\\index.vue:220")}})}})},update:function(){var e,n,i=this,r=plus.os.name.toUpperCase(),s=plus.runtime.appid,o=6048e5,u=0;t.getStorage({key:"version_update_time",success:function(t){u=t.data}}),plus.runtime.getProperty(s,function(s){e=plus.storage.getItem("app-id"),e=e?e.replace(/\./g,""):s.versionCode,t.request({url:i.websiteUrl+"/sys/checkversion",method:"POST",data:{systemName:r,versionCode:e},success:function(e){a("log",e," at pages\\tarbar\\index\\index.vue:264");var s=e.data;if(s.data){a("log",123456," at pages\\tarbar\\index\\index.vue:267");var c=s.data.versionName}var l=new Date;if(l=l.getTime(),null!=s.data){if(a("log",1234567," at pages\\tarbar\\index\\index.vue:275"),u+o>l)return;a("log",1234569," at pages\\tarbar\\index\\index.vue:280"),3!=plus.networkinfo.getCurrentType()?(""!=s.data.versionWgtPath&&t.showModal({title:"发现新版本",content:"有新的版本发布，检测到您当前为非Wifi连接，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void t.setStorage({key:"version_update_time",data:o,success:function(){a("log","保存成功"," at pages\\tarbar\\index\\index.vue:364")}})}switch(r){case"ANDROID":var u=t.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",c.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):plus.nativeUI.toast("下载失败，请检查网络")}});u.onProgressUpdate(function(t){i.progress=t.progress}),clearInterval(n),i.type="",n=setInterval(function(){if(i.type="update_show",i.$store.commit("changeProgress",i.progress),100==progress)return clearInterval(n),void(i.type="")},500);break;case"IOS":t.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",c.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):plus.nativeUI.toast("下载失败，请检查网络")}});break}},fail:function(){},complete:function(){}}),""!=s.data.path&&t.showModal({title:"发现新版本",content:"有新的版本发布，检测到您当前为非Wifi连接，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void t.setStorage({key:"version_update_time",data:o,success:function(){a("log","保存成功"," at pages\\tarbar\\index\\index.vue:430")}})}switch(r){case"ANDROID":var u=t.downloadFile({url:s.data.path,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){},function(){plus.nativeUI.toast("安装失败")}):plus.nativeUI.toast("下载失败，请检查网络")}});u.onProgressUpdate(function(t){i.progress=t.progress}),clearInterval(n),i.type="",n=setInterval(function(){if(i.type="update_show",i.$store.commit("changeProgress",i.progress),100==progress)return clearInterval(n),void(i.type="")},500);break;case"IOS":plus.runtime.openURL(s.data.path);break}},fail:function(){},complete:function(){}})):(""!=s.data.versionWgtPath&&t.showModal({title:"发现新版本",content:"有新的版本发布，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void t.setStorage({key:"version_update_time",data:o,success:function(){a("log","保存成功"," at pages\\tarbar\\index\\index.vue:524")}})}switch(r){case"ANDROID":var u=t.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",c.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):plus.nativeUI.toast("下载失败，请检查网络")}});u.onProgressUpdate(function(t){i.progress=t.progress}),clearInterval(n),i.type="",n=setInterval(function(){if(i.type="update_show",i.$store.commit("changeProgress",i.progress),100==progress)return clearInterval(n),void(i.type="")},500);break;case"IOS":t.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",c.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):plus.nativeUI.toast("下载失败，请检查网络")}});break}},fail:function(){},complete:function(){}}),""!=s.data.path&&t.showModal({title:"发现新版本",content:"有新的版本发布，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void t.setStorage({key:"version_update_time",data:o,success:function(){a("log","保存成功"," at pages\\tarbar\\index\\index.vue:590")}})}switch(r){case"ANDROID":var u=t.downloadFile({url:s.data.path,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){},function(){plus.nativeUI.toast("安装失败")}):plus.nativeUI.toast("下载失败，请检查网络")}});u.onProgressUpdate(function(t){i.progress=t.progress}),clearInterval(n),i.type="",n=setInterval(function(){if(i.type="update_show",i.$store.commit("changeProgress",i.progress),100==progress)return clearInterval(n),void(i.type="")},500);break;case"IOS":plus.runtime.openURL(s.data.path);break}},fail:function(){},complete:function(){}}))}},fail:function(){},complete:function(){}})})}},computed:{pro:function(){return this.progress}}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},d3c1:function(t,e,n){"use strict";(function(t){n("2f26"),n("921b");a(n("66fd"));var e=a(n("e182"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e182:function(t,e,n){"use strict";n.r(e);var a=n("5fe7"),i=n("f96f");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("0e1e");var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"62477fa4",null,!1,a["a"],s);e["default"]=u.exports},f96f:function(t,e,n){"use strict";n.r(e);var a=n("c92f"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},fb85:function(t,e,n){"use strict";n.r(e);var a=n("21f2"),i=n("ac5f");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("59cd");var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=u.exports}},[["d3c1","common/runtime","common/vendor"]]]);