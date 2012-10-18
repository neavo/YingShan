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
				xtype : "container",
				cls : "weatherContainer",
				height : DB.screenHeight * 0.12,
				style : "background : url(resources/weather/weatherBackground.png); background-repeat : repeat-x;",
				html : "<img class = weatherImage src = " + "resources/weather/" + DB.weather.icon + ".png >"
				+ "<div class = weatherTextLine><b>" + DB.weather.text + "　" + DB.weather.low + "℃ ~ " + DB.weather.high + "℃" + "<b></div>",
			}, {
				id : "adCarousel",
				xtype : "carousel",
				cls : "adCarousel",
				height : DB.screenHeight * 0.3,
				items : [{
						xtype : "container",
						html : "<img class = adImage src = resources/images/ad_01.jpg >"
					},{
						xtype : "container",
						html : "<img class = adImage src = resources/images/ad_02.jpg >"
					},{
						xtype : "container",
						html : "<img class = adImage src = resources/images/ad_03.jpg >"
					},{
						xtype : "container",
						html : "<img class = adImage src = resources/images/ad_04.jpg >"
					},
				],
			}, {
				id : "categoryContainer",
				xtype : "container",
				cls : "categoryContainer",
				height : DB.screenHeight * 0.42,
				layout : "vbox",
			}, {
				xtype : "toolbar",
				height : DB.screenHeight * 0.08,
				docked : "bottom",
				items : [{
						xtype : "spacer",
					}, {
						id : "updateBtn",
						xtype : "button",
						ui : "plain",
						iconCls : "download",
						iconMask : true,
					}, {
						xtype : "spacer",
					}, {
						xtype : "button",
						ui : "plain",
						iconCls : "search",
						iconMask : true,
					}, {
						xtype : "spacer",
					}, {
						id : "aboutBtn",
						xtype : "button",
						ui : "plain",
						iconCls : "more", 
						iconMask:true,
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
