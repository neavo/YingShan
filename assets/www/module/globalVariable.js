// 服务器相关参数
var Website = {
	// 发布服务器地址
	// serverUrl : "http://59.69.65.153:8080/WiseAgServer/Server/",
	// 开发服务器地址
	serverUrl : "http://59.69.65.153:8080/WiseAgServer/Server/",
	infoScriptUrl : "info.jsp?categoryid=",
};

// 本地数据
var DB = {
	activatedController : "", // 正在激活的页面的控制器
	activatedCategory : "", // 正在激活的页面的频道ID
	activatedStore : "", // 正在激活的页面对应的Store
};

// 页面指示
var infoPageNum = 1;
