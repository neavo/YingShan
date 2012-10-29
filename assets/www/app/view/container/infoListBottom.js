Ext.define("Project.view.container.infoListBottom", {
	extend : "Ext.Toolbar",
	xtype : "infoListBottom",
	config : {
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
