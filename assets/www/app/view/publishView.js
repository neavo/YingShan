Ext.define("Project.view.publishView", {
	extend : "Ext.Container",
	xtype : "publishView",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "publishTop",
			}, {
				xtype : "publishMain",
			}, {
				xtype : "publishBottom",
			}, ],
	},
});
