Ext.define("Project.view.home.mainView", {
	extend : "Ext.Container",
	xtype : "homeView",
	config : {
		layout : "vbox",
		items : [{
				xtype : "toolbar",
				flex : 1,
				title : "掌上 • 英山",
				docked : "top",
			},{
				id : "adCarousel",
				xtype : "carousel",
				flex : 2.3,
				cls : "adCarousel",
				items : [{
						xtype : "image",
						src : "resources/images/ad_01.jpg",
						cls : "adImage",
					}, {
						xtype : "image",
						src : "resources/images/ad_02.jpg",
						cls : "adImage",
					}, {
						xtype : "image",
						src : "resources/images/ad_03.jpg",
						cls : "adImage",
					},{
						xtype : "image",
						src : "resources/images/ad_02.jpg",
						cls : "adImage",
					}, {
						xtype : "image",
						src : "resources/images/ad_01.jpg",
						cls : "adImage",
					}, {
						xtype : "image",
						src : "resources/images/ad_03.jpg",
						cls : "adImage",
					},
				],
			},{
				xtype : "carousel",
				flex : 5.7,
				items : [{
						id : "carouselList_01",
						xtype : "list",
						cls : "carouselList",
						scrollable : false,
						ui : "round",
						onItemDisclosure : true,
						html : "<div class = carouselTitle><b>英　山　政　务</b></div>",
						data : [{
								name : "走进英山",
								imageSrc : "resources/icons/01.png",
							}, {
								name : "英山新闻",
								imageSrc : "resources/icons/02.png",
							}, {
								name : "政策长廊",
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
						html : "<div class = carouselTitle><b>英山旅游</b></div>",
						data : [{
								name : "景区介绍",
								imageSrc : "resources/icons/04.png",
							}, {
								name : "旅游服务",
								imageSrc : "resources/icons/05.png",
							}, {
								name : "在线预订",
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
						html : "<div class = carouselTitle><b>开放英山</b></div>",
						data : [{
								name : "招商指南",
								imageSrc : "resources/icons/07.png",
							}, {
								name : "招商成果",
								imageSrc : "resources/icons/08.png",
							}, {
								name : "项目介绍",
								imageSrc : "resources/icons/09.png",
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
						html : "<div class = carouselTitle><b>科技英山</b></div>",
						data : [{
								name : "创新科技",
								imageSrc : "resources/icons/10.png",
							}, {
								name : "科技产业",
								imageSrc : "resources/icons/11.png",
							}, {
								name : "12396在线",
								imageSrc : "resources/icons/12.png",
							},
						],
						itemTpl : "<img class = carouselListImage src={imageSrc} />"
						 + "<div class = carouselListTexts><b>{name}</b></div>"
					}, {
						id : "carouselList_05",
						xtype : "list",
						cls : "carouselList",
						scrollable : false,
						ui : "round",
						onItemDisclosure : true,
						html : "<div class = carouselTitle><b>健康英山</b></div>",
						data : [{
								name : "健康教育",
								imageSrc : "resources/icons/13.png",
							}, {
								name : "政策法规",
								imageSrc : "resources/icons/14.png",
							}, {
								name : "在线服务",
								imageSrc : "resources/icons/15.png",
							},
						],
						itemTpl : "<img class = carouselListImage src={imageSrc} />"
						 + "<div class = carouselListTexts><b>{name}</b></div>"
					}, {
						id : "carouselList_06",
						xtype : "list",
						cls : "carouselList",
						scrollable : false,
						ui : "round",
						onItemDisclosure : true,
						html : "<div class = carouselTitle><b>英山茶叶</b></div>",
						data : [{
								name : "茶叶市场",
								imageSrc : "resources/icons/16.png",
							}, {
								name : "茶技推广",
								imageSrc : "resources/icons/17.png",
							}, {
								name : "专家在线",
								imageSrc : "resources/icons/18.png",
							},
						],
						itemTpl : "<img class = carouselListImage src={imageSrc} />"
						 + "<div class = carouselListTexts><b>{name}</b></div>"
					},
				],
			}, {
				xtype : "toolbar",
				flex : 1,
				docked : "bottom",
				items : [{
						id : "updateBtnAtHomeView",
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
