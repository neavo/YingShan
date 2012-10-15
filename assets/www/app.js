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
		"homeView",
		"childCategoryView",
		"info.mainView",
		"info.detailView",
	],
	
	controllers : [
		"home.mainViewController",
		"home.categoryContainerController",
		"childCategoryController",
		"info.mainViewController",
		"info.detailViewController",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
