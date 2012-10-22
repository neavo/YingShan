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
		"widget.backBtn", "widget.updateBtn", "widget.aboutBtn", "widget.prevBtn",
		"widget.nextBtn", "widget.homeBtn", "widget.biggerBtn", "widget.smallerBtn",
		"container.homeTop", "container.homeMain", "container.homeBottom",
		"container.childCategoryTop", "container.childCategoryMain", "container.childCategoryBottom",
		"container.infoListTop", "container.infoListMain", "container.infoListBottom",
		"container.infoDetailTop", "container.infoDetailMain", "container.infoDetailBottom",
		"container.customHtmlTop", "container.customHtmlMain", "container.customHtmlBottom",
		"mainContainer",
	],
	
	controllers : [
		"init",
		"widget.backBtn", "widget.updateBtn", "widget.aboutBtn", "widget.prevBtn",
		"widget.nextBtn", "widget.homeBtn", "widget.biggerBtn", "widget.smallerBtn",
		"container.homeMain",
		"container.childCategoryMain",
		"container.infoListMain",
		"homeView", "childCategory", "infoList", "infoDetail",
		"customHtml",
	],

	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
