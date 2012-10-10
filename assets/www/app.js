Ext.application({
	name : "Project",
	
	requires : [
		"Ext.ActionSheet",
		"Ext.MessageBox",
		"Ext.dataview.List",
		"Ext.data.proxy.JsonP",
	],
	
	models : [
		"mainModel",
	],
	
	stores : [
		"mainStore",
	],
	
	views : [
		"mainContainer",
		"home.mainView",
		"info.mainView",
		"info.detailView",
	],
	
	controllers : [
		"home.mainViewController",
		"home.carouselListController",
		"info.mainViewController",
		"info.detailViewController",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});

