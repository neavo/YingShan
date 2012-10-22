Ext.define("Project.view.container.publishBottom", {
	extend : "Ext.Toolbar",
	xtype : "publishBottom",
	config : {
		height : DB.screenHeight * 0.08,
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "addBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "resetBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "backBtn",
			}, {
				xtype : "spacer",
			},
		],
	},
});
