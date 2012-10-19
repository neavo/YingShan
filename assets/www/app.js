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
		"categoryContainer",
		"bottomToolbar",
		"childCategoryView",
		"infoListView",
		"infoDetailView",
	],
	
	controllers : [
		"homeViewController",
		"categoryContainerController",
		"bottomToolbar",
		"childCategoryController",
		"infoListView",
		"infoDetailView",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
