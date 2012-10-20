Ext.define("Project.view.customHtmlView", {
	extend : "Ext.Container",
	xtype : "customHtmlView",
	config : {
		items : [{
				xtype : "bottomToolbar",
				height : DB.screenHeight * 0.08,
			},
		],
	},
});
