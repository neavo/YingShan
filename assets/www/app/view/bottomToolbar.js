Ext.define("Project.view.bottomToolbar", {
	extend : "Ext.Toolbar",
	xtype : "bottomToolbar",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "button",
				ui : "plain",
				iconCls : "search",
				iconMask : true,
			}, {
				xtype : "spacer",
			}, {
				id : "updateBtn",
				xtype : "button",
				ui : "plain",
				iconCls : "download",
				iconMask : true,
			}, {
				xtype : "spacer",
			}, {
				id : "aboutBtn",
				xtype : "button",
				ui : "plain",
				iconCls : "more",
				iconMask : true,
			}, {
				xtype : "spacer",
			}, {
				id : "backBtn",
				xtype : "button",
				ui : "plain",
				iconCls : "reply",
				iconMask : true,
			}, {
				xtype : "spacer",
			},
		],
	},	
});
