// 服务器相关参数
var Website = {
	// 发布服务器地址
	// serverUrl : "http://59.69.65.153:8080/WiseAgServer/Server/",
	// 开发服务器地址
	serverUrl : "http://59.69.65.153:8080/WiseAgServer/Server/",
	infoScriptUrl : "info.jsp?categoryid=",
};

// 频道ID对应表
var Category = {
	agriNews : "200", // 农业新闻
	marketAnalysis : "201", // 市场分析
	reguPolicy : "202", // 政策法规
	enShiNews : "203", // 恩施新闻
	famousVariety : "204", // 名优品种
	plantTech : "205", // 种植技术
	//agriNews : "206",			// 烟草收购
	//agriNews : "207",			// 我要供应
	//agriNews : "208",			// 收购地图
	//agriNews : "209",			// 专家指导
	//agriNews : "210",			// 问题列表
	//agriNews : "211",			// 在线提问
	//agriNews : "212",			// 电话咨询
	//agriNews : "213",			// 农业气象
};

// 本地数据
var DB = {
	activatedController : "", // 正在激活的页面的控制器
	activatedCategory : "", // 正在激活的页面的频道ID
	activatedStore : "", // 正在激活的页面对应的Store
};

// 页面指示
var infoPageNum = 1;
