Ext.define("Project.view.container.homeMain", {
	extend : "Ext.Container",
	xtype : "homeMain",
	config : {
		items : [{
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
				id : "categoryContainer",
				cls : "categoryContainer",
				height : DB.screenHeight * 0.42,
			},
		],
	},
});
