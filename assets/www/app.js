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
		"widget.backBtn",
		"widget.searchBtn",
		"widget.updateBtn",
		"widget.aboutBtn",
		"widget.prevBtn",
		"widget.nextBtn",
		"widget.homeBtn",
		"widget.biggerBtn",
		"widget.smallerBtn",
		"mainContainer",
		"homeView",
		"categoryContainer",
		"childCategoryView",
		"infoListView",
		"infoDetailView",
		"customHtmlView",
	],
	
	controllers : [
		"init",
		"widget.backBtn",
		"widget.searchBtn",
		"widget.updateBtn",
		"widget.aboutBtn",
		"widget.prevBtn",
		"widget.nextBtn",
		"widget.homeBtn",
		"widget.biggerBtn",
		"widget.smallerBtn",
		"homeViewController",
		"mainCategoryContainer",
		"childCategoryController",
		"infoListView",
		"infoDetailView",
		"customHtmlView",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
