//向服务器发送信息函数
var xmlhttp = createXMLHttp();
if (xmlhttp) {
	xmlhttp.onreadystatechange = setPageData();
	xmlhttp.open("GET", "http://m.weather.com.cn/data/101010100.html");
	xmlhttp.send(null);
} else {
	alert("XMLHttpRequest对象为空");
}
//回调函数，获得从服务器回发的文档信息并显示在disp层中
function setPageData() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var word = bytes2BSTR(xmlhttp.responseBody);
		console.lgo(word);
	}
}
