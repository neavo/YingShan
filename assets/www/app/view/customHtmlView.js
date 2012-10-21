Ext.define("Project.view.customHtmlView", {
	extend : "Ext.Container",
	xtype : "customHtmlView",
	config : {
		items : [{
				xtype : "toolbar",
				height : DB.screenHeight * 0.08,
				docked : "bottom",
				items : [/*({
						xtype : "spacer",
					}, {
						xtype : "searchBtn",
					}, */{
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
		],
	},
});
