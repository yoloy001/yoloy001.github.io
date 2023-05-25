
function entersearch(event){
	if (event.keyCode == 13)
	{
		text = document.getElementById('text').value;
		
		url = 'http://www.baidu.com/s?ie=UTF-8&wd=' + text;
		
		window.open(url, '_blank');
	}
}

function fsou() {
	text = document.getElementById('text').value;
	url = 'https://fsoufsou.com/search?q=' + text;
	window.open(url, '_blank');
}
function zhihu() {
	text = document.getElementById('text').value;
	url = 'https://www.zhihu.com/search?type=content&q=' + text;
	window.open(url, '_blank');
}
function douban() {
	text = document.getElementById('text').value;
	url = 'https://www.douban.com/search?q=' + text;
	window.open(url, '_blank');
}
function bili() {
	text = document.getElementById('text').value;
	url = 'https://search.bilibili.com/all?keyword=' + text;
	window.open(url, '_blank');
}
function chzh() {
	text = document.getElementById('text').value;
	url = 'https://czspp.com/xssearch?q=' + text;
	window.open(url, '_blank');
}
function cbh() {
	text = document.getElementById('text').value;
	url = 'https://cupfox.app/search?key=' + text ;
	window.open(url, '_blank');
}
function xzjs() {
	url = 'https://www.xiaozhongjishu.com/' ;
	window.open(url, '_blank');
}
function adzh() {
	url = 'https://adzhp.cn/' ;
	window.open(url, '_blank');
}
// 软件下载
function lenovo() {
	text = document.getElementById('text').value;
	url = 'https://lestore.lenovo.com/search?k=' + text;
	window.open(url, '_blank');
}
function tengxun() {
	text = document.getElementById('text').value;
	url = 'https://pc.qq.com/search.html#!keyword=' + text;
	window.open(url, '_blank');
}
function soft360() {
	text = document.getElementById('text').value;
	url = 'https://baoku.360.cn/soft/search?kw=' + text;
	window.open(url, '_blank');
}
