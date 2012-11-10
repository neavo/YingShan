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
						html : "<img class = adImage src = resources/images/defaultAd.jpg >",
					},
				],
			}, {
				id : "categoryContainer",
				layout : "vbox",
				flex : 1,
				cls : "BackGround",
			},
		],
	},
});
