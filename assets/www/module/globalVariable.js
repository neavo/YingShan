// 服务器相关参数
var Website = {
	// 发布服务器地址
	serverUrl : "http://221.235.190.14:8080/YingShanServer/Server/",
	// 开发服务器地址
	// serverUrl : "http://59.69.65.153:8080/YingShanServer/Server/",
	infoScriptUrl : "info.jsp?categoryid=",
};

// 本地数据全局命名空间
var DB = {
	versionInfo : "掌上 • 英山 v3.0",
	activatedController : "", // 正在激活的页面的控制器
	activatedCategory : "", // 正在激活的页面的频道ID
	weather : {
		icon : "08", // 默认为晴天
		text : "晴朗", // 晴天
		low : "10",
		high : "20",
	},
	screenHeight : 0, // 屏幕高度
	screenWidth : 0, // 屏幕宽度
	videoUrl : "", // 要播放的视频的url
	scaleFlag : 0, // 详细信息页面缩放Flag
};

// 页面指示
var currInfoPageNum = 1;
var lastInfoPageNum = 1;

// 频道列表
var Category = [{
		categoryTitle : "新闻",
		categoryIconUrl : "resources/icons/01.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryTitle : "图文新闻",
				categoryIconUrl : "resources/icons/01.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "400",
						categoryTitle : "时政要闻",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "401",
						categoryTitle : "部门动态",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "402",
						categoryTitle : "财经新闻",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "403",
						categoryTitle : "科技动态",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "404",
						categoryTitle : "文化动态",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "405",
						categoryTitle : "网络媒体",
						categoryIconUrl : "resources/icons/01.png",
					},
				],
			}, {
				categoryTitle : "视频新闻",
				categoryIconUrl : "resources/icons/01.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "406",
						categoryTitle : "英山新闻",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "407",
						categoryTitle : "行风热线",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "408",
						categoryTitle : "与法同行",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "409",
						categoryTitle : "神州大地英山人",
						categoryIconUrl : "resources/icons/01.png",
					},
				],
			},
		],
	}, {
		categoryTitle : "政务",
		categoryIconUrl : "resources/icons/02.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryTitle : "英山印象",
				categoryIconUrl : "resources/icons/02.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "410",
						categoryTitle : "走进英山",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "411",
						categoryTitle : "行政规划",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "412",
						categoryTitle : "自然地理",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "413",
						categoryTitle : "人口民族",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "414",
						categoryTitle : "县景县貌",
						categoryIconUrl : "resources/icons/02.png",
					},
				],
			}, {
				categoryTitle : "政务信息",
				categoryIconUrl : "resources/icons/02.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "415",
						categoryTitle : "县委文件",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "416",
						categoryTitle : "政府文件",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "417",
						categoryTitle : "部门文件",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "418",
						categoryTitle : "领导介绍",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "419",
						categoryTitle : "政策长廊",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "420",
						categoryTitle : "五城同创",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "421",
						categoryTitle : "公告公示",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "422",
						categoryTitle : "政务动态",
						categoryIconUrl : "resources/icons/02.png",
					},
				],
			}, {
				categoryTitle : "服务中心",
				categoryIconUrl : "resources/icons/02.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "423",
						categoryTitle : "县长信箱",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "424",
						categoryTitle : "招标公告",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "425",
						categoryTitle : "中标公告",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "426",
						categoryTitle : "办理指南",
						categoryIconUrl : "resources/icons/02.png",
					},
				],
			}, {
				categoryTitle : "市民热线",
				categoryIconUrl : "resources/icons/02.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "427",
						categoryTitle : "建言献策",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "428",
						categoryTitle : "我要写信",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "429",
						categoryTitle : "信息公开",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "430",
						categoryTitle : "我要查询",
						categoryIconUrl : "resources/icons/02.png",
					},
				],
			},
		],
	}, {
		categoryTitle : "茶叶",
		categoryIconUrl : "resources/icons/03.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "431",
				categoryTitle : "茶业动态",
				categoryIconUrl : "resources/icons/03.png",
			}, {
				categoryId : "432",
				categoryTitle : "茶技推广",
				categoryIconUrl : "resources/icons/03.png",
			}, {
				categoryId : "433",
				categoryTitle : "供求信息",
				categoryIconUrl : "resources/icons/03.png",
			}, {
				categoryId : "434",
				categoryTitle : "专家在线",
				categoryIconUrl : "resources/icons/03.png",
			}, {
				categoryTitle : "发布供求",
				categoryIconUrl : "resources/icons/03.png",
				categoryStyle : "publishPanel",
				targetCategoryId : "433",
			},
		],
	}, {
		categoryTitle : "旅游",
		categoryIconUrl : "resources/icons/04.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "435",
				categoryTitle : "旅游动态",
				categoryIconUrl : "resources/icons/04.png",
			}, {
				categoryId : "436",
				categoryTitle : "景点介绍",
				categoryIconUrl : "resources/icons/04.png",
			}, {
				categoryId : "437",
				categoryTitle : "旅游指南",
				categoryIconUrl : "resources/icons/04.png",
			}, {
				categoryTitle : "旅游服务",
				categoryIconUrl : "resources/icons/04.png",
				childCategory : [{
						categoryId : "438",
						categoryTitle : "吃在英山",
						categoryIconUrl : "resources/icons/04.png",
					}, {
						categoryId : "439",
						categoryTitle : "住在英山",
						categoryIconUrl : "resources/icons/04.png",
					}, {
						categoryId : "440",
						categoryTitle : "游在英山",
						categoryIconUrl : "resources/icons/04.png",
					}, {
						categoryId : "441",
						categoryTitle : "娱在英山",
						categoryIconUrl : "resources/icons/04.png",
					},
				],
			},
		],
	}, {
		categoryTitle : "招商",
		categoryIconUrl : "resources/icons/05.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "442",
				categoryTitle : "投资英山",
				categoryIconUrl : "resources/icons/05.png",
			}, {
				categoryId : "443",
				categoryTitle : "招商项目",
				categoryIconUrl : "resources/icons/05.png",
			}, {
				categoryId : "444",
				categoryTitle : "服务指南",
				categoryIconUrl : "resources/icons/05.png",
			}, {
				categoryId : "445",
				categoryTitle : "优惠政策",
				categoryIconUrl : "resources/icons/05.png",
			},
		],
	}, {
		categoryTitle : "科技",
		categoryIconUrl : "resources/icons/06.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "446",
				categoryTitle : "科技动态",
				categoryIconUrl : "resources/icons/06.png",
			}, {
				categoryId : "447",
				categoryTitle : "民生科技",
				categoryIconUrl : "resources/icons/06.png",
			}, {
				categoryId : "448",
				categoryTitle : "特色产业",
				categoryIconUrl : "resources/icons/06.png",
			}, {
				categoryId : "449",
				categoryTitle : "科技创新",
				categoryIconUrl : "resources/icons/06.png",
			}, {
				categoryId : "450",
				categoryTitle : "科技在线",
				categoryIconUrl : "resources/icons/06.png",
			},
		],
	}, {
		categoryId : "",
		categoryTitle : "医疗",
		categoryIconUrl : "resources/icons/07.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "451",
				categoryTitle : "卫生快讯",
				categoryIconUrl : "resources/icons/07.png",
			}, {
				categoryId : "452",
				categoryTitle : "档案查询",
				categoryIconUrl : "resources/icons/07.png",
				categoryStyle : "customHtml",
				customHtml : "<iframe src = http://219.139.49.58:8888/health/website/web_index_sj.action frameborder = no width = 100%  height = 100% scrolling = no></iframe>",
			}, {
				categoryId : "453",
				categoryTitle : "健康知识",
				categoryIconUrl : "resources/icons/07.png",
			}, {
				categoryId : "454",
				categoryTitle : "政策法规",
				categoryIconUrl : "resources/icons/07.png",
			}, {
				categoryId : "455",
				categoryTitle : "医疗推介",
				categoryIconUrl : "resources/icons/07.png",
			},
		],
	}, {
		categoryTitle : "生活",
		categoryIconUrl : "resources/icons/08.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "456",
				categoryTitle : "话费查询",
				categoryIconUrl : "resources/icons/08.png",
			}, {
				categoryId : "457",
				categoryTitle : "房产信息",
				categoryIconUrl : "resources/icons/08.png",
			}, {
				categoryId : "458",
				categoryTitle : "求职招聘",
				categoryIconUrl : "resources/icons/08.png",
			}, {
				categoryId : "459",
				categoryTitle : "停电停水公告",
				categoryIconUrl : "resources/icons/08.png",
			}, {
				categoryId : "460",
				categoryTitle : "同城交友",
				categoryIconUrl : "resources/icons/08.png",
			}, {
				categoryId : "461",
				categoryTitle : "应用汇",
				categoryIconUrl : "resources/icons/08.png",
			},
		],
	},
];
