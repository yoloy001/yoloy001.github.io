window.onload = function() {

	var aBox = document.getElementById('listLeft');
	var aList = aBox.getElementsByTagName('a');
	for (var i = 0; i < aList.length; i++) {
		aList[i].onclick = function(i) {
			return function() {
				txtUrl = [
					"pc-black","pc-blue","pc-low","print",
					"hw-swith","cisco-swith",
					"bat","","",
					"os-soft"
				]
				if (i!==0 && i!==7 && i!==8) {
					$("#pc-black").load("txt/"+txtUrl[i]+".txt");
				} else{
					location.reload();
				}
				
			}
		}(i);
	}
}

function copyfun() {
	var e = document.getElementById("copyvalue");
	e.select(); // 选择对象
	document.execCommand("Copy"); // 执行浏览器复制命令
	// alert("复制成功");
}
