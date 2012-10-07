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
			},{
				xtype : "mainView_212",
			},{
				xtype : "detailView_212",
			},{
				xtype : "operateActionSheet_212",
				hidden : true,
			},{
				xtype : "mainView_213",
			},{
				xtype : "detailView_213",
			},{
				xtype : "operateActionSheet_213",
				hidden : true,
			},
		],
	},
});
