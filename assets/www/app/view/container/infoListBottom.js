Ext.define("Project.view.container.infoListBottom", {
	extend : "Ext.Toolbar",
	xtype : "infoListBottom",
	config : {
		height : DB.screenHeight * 0.08,
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "prevBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "nextBtn",
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
