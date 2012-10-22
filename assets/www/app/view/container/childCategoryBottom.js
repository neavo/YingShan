Ext.define("Project.view.container.childCategoryBottom", {
	extend : "Ext.Toolbar",
	xtype : "childCategoryBottom",
	config : {
		height : DB.screenHeight * 0.08,
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "updateBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "aboutBtn",
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
