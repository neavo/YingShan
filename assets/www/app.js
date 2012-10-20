Ext.application({
	name : "Project",
	
	requires : [
		"Ext.MessageBox",
		"Ext.dataview.List",
		"Ext.data.proxy.JsonP",
	],
	
	models : [
		"mainModel",
		"childCategoryModel",
	],
	
	stores : [
		"mainStore",
		"childCategoryStore",
	],
	
	views : [
		"mainContainer",
		"homeView",
		"categoryContainer",
		"bottomToolbar",
		"childCategoryView",
		"infoListView",
		"infoDetailView",
		"customHtmlView",
	],
	
	controllers : [
		"homeViewController",
		"mainCategoryContainer",
		"bottomToolbar",
		"childCategoryController",
		"infoListView",
		"infoDetailView",
		"customHtmlView",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
