Ext.define("Project.view.infoDetailView", {
	extend : "Ext.Container",
	xtype : "infoDetailView",
	config : {
		scrollable : "both",
		styleHtmlContent : true,
		cls : "detail",
		items : [{
				xtype : "toolbar",
				height : DB.screenHeight * 0.08,
				docked : "top",
				title : "详细信息"
			}, {
				xtype : "toolbar",
				height : DB.screenHeight * 0.08,
				docked : "bottom",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "searchBtn",
					}, {
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
