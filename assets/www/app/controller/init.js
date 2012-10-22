Ext.define("Project.controller.init", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",
			
			homeTop : "homeTop",
			homeMain : "homeMain",
			homeBottom : "homeBottom",
			childCategoryTop : "childCategoryTop",
			childCategoryMain : "childCategoryMain",
			childCategoryBottom : "childCategoryBottom",
			infoListTop : "infoListTop",
			infoListMain : "infoListMain",
			infoListBottom : "infoListBottom",
			infoDetailTop : "infoDetailTop",
			infoDetailMain : "infoDetailMain",
			infoDetailBottom : "infoDetailBottom",
			customHtmlTop : "customHtmlTop",
			customHtmlMain : "customHtmlMain",
			customHtmlBottom : "customHtmlBottom",
		},
	},
	launch : function () {
		DB.mainContainer = this.getMainContainer();
		
		DB.homeTop = this.getHomeTop();
		DB.homeMain = this.getHomeMain();
		DB.homeBottom = this.getHomeBottom();
		DB.childCategoryTop = this.getChildCategoryTop();
		DB.childCategoryMain = this.getChildCategoryMain();
		DB.childCategoryBottom = this.getChildCategoryBottom();
		DB.infoListTop = this.getInfoListTop();
		DB.infoListMain = this.getInfoListMain();
		DB.infoListBottom = this.getInfoListBottom();
		DB.infoDetailTop = this.getInfoDetailTop();
		DB.infoDetailMain = this.getInfoDetailMain();
		DB.infoDetailBottom = this.getInfoDetailBottom();
		DB.customHtmlTop = this.getCustomHtmlTop();
		DB.customHtmlMain = this.getCustomHtmlMain();
		DB.customHtmlBottom = this.getCustomHtmlBottom();
	},
});
