Ext.define("Project.view.container.infoDetailBottom", {
	extend : "Ext.Toolbar",
	xtype : "infoDetailBottom",
	config : {
		height : DB.screenHeight * 0.08,
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "biggerBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "smallerBtn",
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
