Ext.application({
	name : "Project",
	
	requires : [
		"Ext.MessageBox",
		"Ext.field.Number",
		"Ext.dataview.List",
		"Ext.data.proxy.JsonP",
		"Ext.carousel.Carousel",
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
		"widget.addBtn", "widget.resetBtn",
		"container.homeTop", "container.homeMain", "container.homeBottom",
		"container.childCategoryTop", "container.childCategoryMain", "container.childCategoryBottom",
		"container.infoListTop", "container.infoListMain", "container.infoListBottom",
		"container.infoDetailTop", "container.infoDetailMain", "container.infoDetailBottom",
		"container.customHtmlTop", "container.customHtmlMain", "container.customHtmlBottom",
		"container.publishTop", "container.publishMain", "container.publishBottom",
		"mainContainer",
	],
	
	controllers : [
		"mainController",
		"widget.backBtn", "widget.updateBtn", "widget.aboutBtn", "widget.prevBtn",
		"widget.nextBtn", "widget.homeBtn", "widget.biggerBtn", "widget.smallerBtn",
		"widget.addBtn", "widget.resetBtn",
		"container.homeMain",
		"container.childCategoryMain",
		"container.infoListMain",
		"homeView", "childCategory", "infoList", "infoDetail",
		"customHtml", "publishView",
	],
	
	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
