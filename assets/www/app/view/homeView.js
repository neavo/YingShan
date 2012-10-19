Ext.define("Project.view.homeView", {
	extend : "Ext.Container",
	xtype : "homeView",
	config : {
		layout : "vbox",
		cls : "homeView",
		items : [{
				id : "weatherContainer",
				xtype : "container",
				cls : "weatherContainer",
				height : DB.screenHeight * 0.12,
				html : "<img class = weatherImage src = " + "resources/weather/" + DB.weather.icon + ".png >"
				 + "<div class = weatherTextLine><b></b>载入天气中 ... </div>"
			}, {
				id : "adCarousel",
				xtype : "carousel",
				cls : "adCarousel",
				height : DB.screenHeight * 0.38,
				items : [{
						xtype : "container",
						html : "<img class = adImage src = resources/images/ad_01.jpg >"
					}, {
						xtype : "container",
						html : "<img class = adImage src = resources/images/ad_02.jpg >"
					}, {
						xtype : "container",
						html : "<img class = adImage src = resources/images/ad_03.jpg >"
					}, {
						xtype : "container",
						html : "<img class = adImage src = resources/images/ad_04.jpg >"
					},
				],
			}, {
				xtype : "categoryContainer",
				height : DB.screenHeight * 0.42,
			}, {
				xtype : "bottomToolbar",
				height : DB.screenHeight * 0.08,
			},
		],
	},
});
