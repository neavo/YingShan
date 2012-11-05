Ext.define("Project.view.container.homeMain", {
	extend : "Ext.Container",
	xtype : "homeMain",
	config : {
		layout : "vbox",
		items : [{
				id : "adCarousel",
				xtype : "carousel",
				cls : "adCarousel",
			}, {
				id : "categoryContainer",
				layout : "vbox",
				flex : 1,
			}, ],
	},
});
