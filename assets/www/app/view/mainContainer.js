Ext.define("Project.view.mainContainer", {
	extend : "Ext.Container",
	xtype : "mainContainer",
	
	config : {
		layout : {
			type : "card",
			//animation : "pop",
		},
		items : [{
				xtype : "homeView",
			}, {
				xtype : "infoMainView",
			},{
				xtype : "infoDetailView",
			},
		],
	},
});
