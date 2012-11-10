Ext.define("Project.view.expertView", {
	extend : "Ext.Container",
	xtype : "expertView",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "expertTop",
			}, {
				xtype : "expertMain",
			}, {
				xtype : "expertBottom",
			}, ],
	},
});
