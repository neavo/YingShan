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
		"homeView", "container.homeTop", "container.homeMain", "container.homeBottom", 
		"childCategory", "container.childCategoryTop", "container.childCategoryMain", "container.childCategoryBottom", 
		"infoList", "container.infoListTop", "container.infoListMain", "container.infoListBottom",
		"infoDetail", "container.infoDetailTop", "container.infoDetailMain", "container.infoDetailBottom", 
		"customHtml", "container.customHtmlTop", "container.customHtmlMain", "container.customHtmlBottom", 
		"publishView", "container.publishTop", "container.publishMain", "container.publishBottom",
		"mainContainer",
	],
	
	controllers : [
		"mainController",
		"widget.backBtn", "widget.updateBtn", "widget.aboutBtn", "widget.prevBtn",
		"widget.nextBtn", "widget.homeBtn", "widget.biggerBtn", "widget.smallerBtn",
		"widget.addBtn", "widget.resetBtn",
		"homeView", "container.homeMain",
		"childCategory", "container.childCategoryMain",
		"infoList", "container.infoListMain",
		"infoDetail",
		"customHtml",
		"publishView",
	],
	
	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
