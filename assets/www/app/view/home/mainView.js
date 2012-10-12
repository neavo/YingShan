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
			}, {
				id : "weatherCarousel",
				xtype : "carousel",
				flex : 1.5,
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
				id : "adCarousel",
				xtype : "carousel",
				flex : 2.5,
				cls : "adCarousel",
				items : [{
						xtype : "image",
						src : "resources/images/ad_02.jpg",
						cls : "adImage",
					}, {
						xtype : "image",
						src : "resources/images/ad_03.jpg",
						cls : "adImage",
					}, {
						xtype : "image",
						src : "resources/images/ad_01.jpg",
						cls : "adImage",
					},
				],
			}, {
				id : "categoryContainer",
				xtype : "container",
				cls : "categoryContainer",
				flex : 4.5,
				layout : "vbox",
			},
		],
	},
});
