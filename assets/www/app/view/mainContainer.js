Ext.define("Project.view.mainContainer", {
	extend : "Ext.Container",
	xtype : "mainContainer",
	config : {
		layout : "vbox",
		cls : "mainContainer",
		defaults : {
			flex : 1, 
		},
		items : [{
				xtype : "homeTop",
			}, {
				xtype : "homeMain",
			}, {
				xtype : "homeBottom",
			},{
				xtype : "childCategoryTop",
				hidden : true,
			}, {
				xtype : "childCategoryMain",
				hidden : true,
			}, {
				xtype : "childCategoryBottom",
				hidden : true,
			},{
				xtype : "infoListTop",
				hidden : true,
			}, {
				xtype : "infoListMain",
				hidden : true,
			}, {
				xtype : "infoListBottom",
				hidden : true,
			},{
				xtype : "infoDetailTop",
				hidden : true,
			}, {
				xtype : "infoDetailMain",
				hidden : true,
			}, {
				xtype : "infoDetailBottom",
				hidden : true,
			},{
				xtype : "customHtmlTop",
				hidden : true,
			}, {
				xtype : "customHtmlMain",
				hidden : true,
			}, {
				xtype : "customHtmlBottom",
				hidden : true,
			},{
				xtype : "publishTop",
				hidden : true,
			}, {
				xtype : "publishMain",
				hidden : true,
			}, {
				xtype : "publishBottom",
				hidden : true,
			},
		],
	},
});
