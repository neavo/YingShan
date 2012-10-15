Ext.define("Project.view.homeView", {
	extend : "Ext.Container",
	xtype : "homeView",
	config : {
		layout : "vbox",
		style : "background : url(resources/images/mainBackground.png); background-repeat : repeat-y;",
		items : [{
				xtype : "toolbar",
				height : DB.screenHeight * 0.08,
				title : "掌上 • 英山",
				docked : "top",
			}, {
				id : "weatherContainer",
				xtype : "container",
				height : DB.screenHeight * 0.15,
				cls : "weatherContainer",
				style : "background : url(resources/images/weatherBackground.png); background-repeat : repeat-x;",
				html : "<img class = weatherImage src = resources/images/weather.png />"
				+ "<div class = weatherTextLine_01><b>晴转多云&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp东南风<b></div>"
				+ "<div class = weatherTextLine_02><b>今日气温：&nbsp&nbsp10℃ ~ 22℃</b></div>",
			}, {
				id : "adCarousel",
				xtype : "carousel",
				height : DB.screenHeight * 0.27,
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
					},
				],
			}, {
				id : "categoryContainer",
				xtype : "container",
				cls : "categoryContainer",
				height : DB.screenHeight * 0.5,
				layout : "vbox",
			},
		],
	},
});
