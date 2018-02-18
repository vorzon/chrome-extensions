var apis = [{
	name: "酷绘",
	url: "http://appapi.svipv.kuuhui.com/svipjx/liulanqichajian/browserplugin/qhjx/qhjx.php?id=",
}, {
	name: "百域阁",
	url: "http://api.baiyug.cn/vip/index.php?url=",
}, {
	name: "乐乐视频解析",
	url: "http://www.662820.com/xnflv/index.php?url=&url="
}, {
	name: "旋风解析",
	url: "http://api.xfsub.com/index.php?url=",
}, {
	name: "jqaaa",
	url: "http://jqaaa.com/jx.php?url="
}, {
	name: "92fz",
	url: "http://jiexi.92fz.cn/player/vip.php?url="
}, {
	name: "vParse[腾讯]",
	url: "https://api.vparse.org/?url="
}, {
	name: "噗噗电影",
	url: "http://pupudy.com/play?make=url&id=",
}, {
	name: "石头解析",
	url: "https://jiexi.071811.cc/jx.php?url=",
}, {
	name: "无名小站",
	url: "http://www.sfsft.com/admin.php?url=",
}, {
	name: "VIP看看",
	url: "http://q.z.vip.totv.72du.com/?url=",
}, {
	name: "ODFLV",
	url: "http://aikan-tv.com/?url=",
}, {
	name: "163人",
	url: "http://jx.api.163ren.com/vod.php?url=",
}, {
	name: "CKFLV",
	url: "http://www.0335haibo.com/tong.php?url=",
}, {
	name: "无名小站2",
	url: "http://www.wmxz.wang/video.php?url=",
}, {
	name: "眼睛会下雨",
	url: "http://www.vipjiexi.com/yun.php?url=",
}, {
	name: "1008影视",
	url: "http://api.1008net.com/v.php?url=",
}, {
	name: "人人发布",
	url: "http://v.renrenfabu.com/jiexi.php?url=",
}];

var ul = document.getElementsByTagName("ul")[0];
for (var i in apis) {
	var li = document.createElement("li");
	ul.appendChild(li);
	li.innerHTML = apis[i].name;
	li.setAttribute("data-url", apis[i].url);
}


li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
	li[i].onclick = function() {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, (tabs) => {
			window.open(this.dataset.url + tabs[0].url);
		});
	};
}