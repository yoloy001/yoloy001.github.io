function entersearch(event) {
	if (event.keyCode == 13) {
		searchJump();
	}
}
function searchJump() {
    text = document.getElementById('text').value;
    url = "https://cn.bing.com/search?q=" + text;
    document.getElementById("page-display").innerHTML = '<iframe src = "' + url + '" ></iframe>';
    }
window.onload = function() {
	document.getElementById("text").focus();
	var btnBox = document.getElementById('parent');
	var btnList = btnBox.getElementsByTagName('button');
	for (var i = 0; i < btnList.length; i++) {
		btnList[i].onclick = function(i) {
			return function() {
				url = [
					"https://www.baidu.com/s?ie=UTF-8&wd=",
					"https://www.fsoufsou.com/search?q=",
					"https://www.zhihu.com/search?type=content&q=",
					"https://s.weibo.com/weibo?q=",
					"https://www.douban.com/search?q=",
					"https://search.bilibili.com/all?keyword=",
					"https://map.baidu.com/",
					"https://cupfox.app/search?key=",
					"https://adzhp.cn/?post_type=sites&s=",
					"https://www.xiaozhongjishu.com/?post_type=sites&s=",
					"https://www.magicalsearch.top/search?word=",
					"https://www.renrendoc.com/search.html?q=",
					"https://music.myepoch.cn/?name=",
					"https://search.jd.com/Search?keyword=",
					"https://lestore.lenovo.com/search?k=",
					"https://pc.qq.com/search.html#!keyword=",
					"https://baoku.360.cn/soft/search?kw="
				]
				text = document.getElementById('text').value;
				if (i != 0 && i != 2 && i != 4 && i != 5 && i != 6 && i != 14) {
					// window.open('https://'+url[i]+text,'_blank');
					var urltest = url[i] + text;
					document.getElementById("page-display").innerHTML = '<iframe src = "' + urltest + '" ></iframe>';
				} else if (i == 6) {
					// window.open('https://'+url[i]+text,'_blank');
					document.getElementById("page-display").innerHTML = '<iframe src = "' + url[i] + '" ></iframe>';
				} else if (i == 10) {
					// window.open('https://'+url[i]+text,'_blank');
					urltest = url[i] + text + "&cpage=0";
					document.getElementById("page-display").innerHTML = '<iframe src = "' + urltest + '" ></iframe>';
				} else if (i == 12) {
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

