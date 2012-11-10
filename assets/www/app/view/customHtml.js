Ext.define("Project.view.customHtml", {
	extend : "Ext.Container",
	xtype : "customHtml",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "customHtmlTop",
			}, {
				xtype : "customHtmlMain",
			}, {
				xtype : "customHtmlBottom",
			},
		],
	},
});
