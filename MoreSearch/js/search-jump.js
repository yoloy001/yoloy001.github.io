function entersearch(event) {
	if (event.keyCode == 13) {
		text = document.getElementById('text').value;
		url = "https://www.baidu.com/s?ie=UTF-8&wd=" + text;
		window.open(url, '_blank');
	}
}
window.onload = function() {
	document.getElementById("text").focus();
	var btnBox = document.getElementById('parent');
	var btnList = btnBox.getElementsByTagName('button');
	for (var i = 0; i < btnList.length; i++) {
		btnList[i].onclick = function(i) {
			return function() {
				url = [
					"https://www.fsoufsou.com/search?q=",
					"https://cn.bing.com/search?q=",
					"https://www.zhihu.com/search?type=content&q=",
					"https://s.weibo.com/weibo?q=",
					"https://www.douban.com/search?q=",
					"https://search.bilibili.com/all?keyword=",
					"https://map.baidu.com/",
					"https://cupfox.app/search?key=",
					"https://www.magicalsearch.top/search?word=",
					"https://adzhp.cn/?post_type=sites&s=",
					"https://www.xiaozhongjishu.com/?post_type=sites&s=",
					"https://music.myepoch.cn/?name=",
					"12",
					"https://search.jd.com/Search?keyword="
					
				]
				text = document.getElementById('text').value;
				if (i != 2 && i != 4 && i != 6 && i < 11) {
					// window.open('https://'+url[i]+text,'_blank');
					var urltest = url[i] + text;
					document.getElementById("page-display").innerHTML = '<iframe src = "' + urltest + '" ></iframe>';
				} else if (i >= 6 && i != 8&& i != 11&& i != 13) {
					// window.open('https://'+url[i]+text,'_blank');
					document.getElementById("page-display").innerHTML = '<iframe src = "' + url[i] + '" ></iframe>';
				} else if (i == 8) {
					// window.open('https://'+url[i]+text,'_blank');
					urltest = url[i] + text + "&cpage=0";
					document.getElementById("page-display").innerHTML = '<iframe src = "' + urltest + '" ></iframe>';
				} else if (i == 11) {
					// window.open('https://'+url[i]+text,'_blank');
					urltest = url[i] + text + "&type=netease";
					document.getElementById("page-display").innerHTML = '<iframe src = "' + urltest + '" ></iframe>';
				}else if (i == 13) {
					// window.open('https://'+url[i]+text,'_blank');
					urltest = url[i] + text + "&enc=utf-8";
					document.getElementById("page-display").innerHTML = '<iframe src = "' + urltest + '" ></iframe>';
				}else {
					window.open(url[i] + text, '_blank');
				}




			}
		}(i);
	}
}
document.addEventListener("keydown", function(event) {
  if (event.altKey && event.key === "q") { // 检查是否同时按下了ALT + K
    document.getElementById("text").focus(); // 聚焦到输入框
  }
});
