Ext.application({

	name : "Project",
	
	requires : [
		"Ext.MessageBox",
		"Ext.field.Number",
		"Ext.dataview.List",
		"Ext.field.TextArea",
		"Ext.device.Camera",
		"Ext.plugin.ListPaging",
		"Ext.data.proxy.JsonP",
		"Ext.carousel.Carousel", 
	],
	
	models : [
		"mainModel",
		"childCategoryModel",
		"expertModel", 
		"adModel", 
	],
	
	stores : [
		"mainStore",
		"childCategoryStore",
		"expertStore",
		"adStore",
	],
	
	views : [
		"widget.backBtn", "widget.updateBtn", "widget.aboutBtn", "widget.homeBtn",
		"widget.biggerBtn", "widget.smallerBtn", "widget.addBtn", "widget.resetBtn",
		
		"homeView", "container.homeTop", "container.homeMain", "container.homeBottom",
		"childCategory", "container.childCategoryTop", "container.childCategoryMain", "container.childCategoryBottom",
		"infoList", "container.infoListTop", "container.infoListMain", "container.infoListBottom",
		"infoDetail", "container.infoDetailTop", "container.infoDetailMain", "container.infoDetailBottom",
		"customHtml", "container.customHtmlTop", "container.customHtmlMain", "container.customHtmlBottom",
		"publishView", "container.publishTop", "container.publishMain", "container.publishBottom",
		"expertView", "container.expertTop", "container.expertMain", "container.expertBottom", "mainContainer",
	],
	
	controllers : [
		"mainController",
		
		"widget.backBtn", "widget.updateBtn", "widget.aboutBtn", "widget.homeBtn",
		"widget.biggerBtn", "widget.smallerBtn", "widget.addBtn", "widget.resetBtn",
		
		"homeView", "container.homeMain", "container.homeTop",
		"childCategory", "container.childCategoryMain",
		"infoList", "container.infoListMain",
		"infoDetail",
		"customHtml",
		"publishView",
		"expertView",
	],
	
	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
