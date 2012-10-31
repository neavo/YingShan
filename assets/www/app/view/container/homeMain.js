Ext.define("Project.view.container.homeMain", {
	extend : "Ext.Container",
	xtype : "homeMain",
	config : {
		layout : "vbox",
		items : [{
				id : "adCarousel",
				xtype : "carousel",
				cls : "adCarousel",
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
				layout : "vbox",
				flex : 1,
			},
		],
	},
});
