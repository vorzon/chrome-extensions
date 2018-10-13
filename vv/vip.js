var apis = [{
	name: "sonimei",
	url: "http://www.sonimei.cn/?url="
}, {
	name: "玩的嗨",
	url: "http://tv.wandhi.com/go.html?url="
}, {
	name: "百域阁",
	url: "http://api.baiyug.cn/vip/index.php?url=",
}, {
	name: "石头解析[腾讯]",
	url: "https://jiexi.071811.cc/jx.php?url=",
}, {
	name: "云解析",
	url: "http://jiexi.92fz.cn/player/vip.php?url="
}, {
	name: "噗噗电影",
	url: "http://pupudy.com/splay.php?play=",
}, {
	name: "人人发布",
	url: "http://v.renrenfabu.com/jiexi.php?url=",
}, {
	name: "眼睛会下雨",
	url: "http://www.vipjiexi.com/yun.php?url=",
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