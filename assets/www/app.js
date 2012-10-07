Ext.application({
	name : "Project",
	
	requires : [
		"Ext.ActionSheet",
		"Ext.MessageBox",
		"Ext.dataview.List",
		"Ext.data.proxy.JsonP",
	],
	
	models : [
		"mainModel_200",
		"mainModel_201",
		"mainModel_202",
		"mainModel_203",
		"mainModel_204",
		"mainModel_205",
		"mainModel_212",
		"mainModel_213",
	],
	
	stores : [
		"mainStore_200",
		"mainStore_201",
		"mainStore_202",
		"mainStore_203",
		"mainStore_204",
		"mainStore_205",
		"mainStore_212",
		"mainStore_212",
	],
	
	views : [
		"mainContainer",
		"home.mainView",
		"info.mainView",
		"info.detailView",
		"212.mainView",
		"212.detailView",
		"212.operateActionSheet",
		"213.mainView",
		"213.detailView",
		"213.operateActionSheet",
	],
	
	controllers : [
		"home.mainViewController",
		"home.carouselListController",
		"info.mainViewController",
		"info.detailViewController",
		"212.mainViewController",
		"212.detailViewController",
		"212.operateActionSheetController",
		"213.mainViewController",
		"213.detailViewController",
		"213.operateActionSheetController",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});

