Ext.define("Project.view.home.mainView", {
	extend : "Ext.Container",
	xtype : "homeView",
	config : {
		layout : "vbox",
		items : [{
				xtype : "toolbar",
				flex : 1,
				title : "恩施 • 烟草通",
				docked : "top",
			}, {
				xtype : "spacer",
				height : 5,
			}, {
				xtype : "formpanel",
				flex : 2.5,
				layout : "fit",
				scrollable : false,
				items : [{
						xtype : "container",
						docked : "top",
						html : "<div class = weatherTitle><b>农业气象</b></div>",
					}, {
						xtype : "formpanel",
						title : "农业气象",
						//html:"<img src='resources/images/weather.png' style='max-height:200px;max-width:200px'>"
						//html : "<img class = carouselListImage src=resources/images/weather.png />",
						//src : "resources/images/weather.png",
					},
				],
			}, {
				xtype : "spacer",
				height : 5,
			}, {
				xtype : "formpanel",
				flex : 5.5,
				layout : "fit",
				scrollable : "horizontal",
				items : [{
						xtype : "carousel",
						items : [{
								id : "carouselList_01",
								xtype : "list",
								cls : "carouselList",
								scrollable : false,
								ui : "round",
								onItemDisclosure : true,
								html : "<div class = carouselTitle><b>烟草资讯</b></div>",
								data : [{
										name : "农业新闻",
										imageSrc : "resources/icons/01.png",
									}, {
										name : "市场分析",
										imageSrc : "resources/icons/02.png",
									}, {
										name : "政策法规",
										imageSrc : "resources/icons/03.png",
									},
								],
								itemTpl : "<img class = carouselListImage src={imageSrc} />"
								 + "<div class = carouselListTexts><b>{name}</b></div>",
							}, {
								id : "carouselList_02",
								xtype : "list",
								cls : "carouselList",
								scrollable : false,
								ui : "round",
								onItemDisclosure : true,
								html : "<div class = carouselTitle><b>烟草恩施</b></div>",
								data : [{
										name : "恩施新闻",
										imageSrc : "resources/icons/04.png",
									}, {
										name : "名优品种",
										imageSrc : "resources/icons/05.png",
									}, {
										name : "烟草技术",
										imageSrc : "resources/icons/06.png",
									},
								],
								itemTpl : "<img class = carouselListImage src={imageSrc} />"
								 + "<div class = carouselListTexts><b>{name}</b></div>",
							}, {
								id : "carouselList_03",
								xtype : "list",
								cls : "carouselList",
								scrollable : false,
								ui : "round",
								onItemDisclosure : true,
								html : "<div class = carouselTitle><b>专家指导</b></div>",
								data : [{
										name : "问题列表",
										imageSrc : "resources/icons/07.png",
									}, {
										name : "电话咨询",
										imageSrc : "resources/icons/07.png",
									}, {
										name : "在线提问",
										imageSrc : "resources/icons/07.png",
									},
								],
								itemTpl : "<img class = carouselListImage src={imageSrc} />"
								 + "<div class = carouselListTexts><b>{name}</b></div>"
							}, {
								id : "carouselList_04",
								xtype : "list",
								cls : "carouselList",
								scrollable : false,
								ui : "round",
								onItemDisclosure : true,
								html : "<div class = carouselTitle><b>供求热线</b></div>",
								data : [{
										name : "我要供应",
										imageSrc : "resources/icons/08.png",
									}, {
										name : "我要收购",
										imageSrc : "resources/icons/08.png",
									}, {
										name : "发布信息",
										imageSrc : "resources/icons/08.png",
									},
								],
								itemTpl : "<img class = carouselListImage src={imageSrc} />"
								 + "<div class = carouselListTexts><b>{name}</b></div>"
							},
						],
					},
				],
			},{
				xtype : "toolbar",
				flex : 1,
				docked : "bottom",
				items : [{
						xtype : "button",
						text : "更新",
						ui : "back",
					}, {
						xtype : "spacer",
					}, {
						id : "backBtnAtHomeView",
						xtype : "button",
						text : "返回桌面",
						ui : "round",
					}, {
						xtype : "spacer",
					}, {
						id : "aboutBtnAtAgriNewsView",
						xtype : "button",
						text : "关于",
						ui : "forward",
					},
				],
			},
		],
	},
});
