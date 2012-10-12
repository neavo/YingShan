Ext.define("Project.view.mainContainer", {
	extend : "Ext.Container",
	xtype : "mainContainer",
	
	config : {
		layout : {
			type : "card",
		},
		items : [{
				xtype : "homeView",
			}, {
				xtype : "childCategoryView",
			}, {
				xtype : "infoMainView",
			},{
				xtype : "infoDetailView",
			},
		],
	},
});
