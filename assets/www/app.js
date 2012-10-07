Ext.application({
	name : "Project",
	
	requires : [
		"Ext.ActionSheet",
		"Ext.MessageBox",
		"Ext.dataview.List",
		"Ext.data.proxy.JsonP",
	],
	
	models : [
		"mainModel_400",
		"mainModel_401",
		"mainModel_402",
		"mainModel_403",
		"mainModel_404",
		"mainModel_405",
		"mainModel_406",
		"mainModel_407",
		"mainModel_408",
		"mainModel_409",
		"mainModel_410",
		"mainModel_411",
		"mainModel_412",
		"mainModel_413",
		"mainModel_414",
		"mainModel_415",
		"mainModel_416",
		"mainModel_417",
	],
	
	stores : [
		"mainStore_400",
		"mainStore_401",
		"mainStore_402",
		"mainStore_403",
		"mainStore_404",
		"mainStore_405",
		"mainStore_406",
		"mainStore_407",
		"mainStore_408",
		"mainStore_409",
		"mainStore_410",
		"mainStore_411",
		"mainStore_412",
		"mainStore_413",
		"mainStore_414",
		"mainStore_415",
		"mainStore_416",
		"mainStore_417",
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

