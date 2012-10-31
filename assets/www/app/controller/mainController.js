Ext.define("Project.controller.mainController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",

			homeView : "homeView", homeTop : "homeTop", homeMain : "homeBottom", homeBottom : "homeBottom", 
			childCategory : "childCategory", childCategoryTop : "childCategoryTop", childCategoryMain : "childCategoryMain", childCategoryBottom : "childCategoryBottom", 
			infoList : "infoList", infoListTop : "infoListTop", infoListMain : "infoListMain", infoListBottom : "infoListBottom",
			infoDetail : "infoDetail", infoDetailTop : "infoDetailTop", infoDetailMain : "infoDetailMain", infoDetailBottom : "infoDetailBottom", 
			customHtml : "customHtml", customHtmlTop : "customHtmlTop", customHtmlMain : "customHtmlMain", customHtmlBottom : "customHtmlBottom", 
			publishView : "publishView", publishTop : "publishTop", publishMain : "publishMain", publishBottom : "publishBottom", 
		},
		control : {},
	},
	launch : function () {
		DB.mainController = this;
		DB.mainContainer = this.getMainContainer();

		DB.homeView = this.getHomeView(); DB.homeTop = this.getHomeTop(); DB.homeMain = this.getHomeMain(); DB.homeBottom = this.getHomeBottom(); 
		DB.childCategory = this.getChildCategory(); DB.childCategoryTop = this.getChildCategoryTop(); DB.childCategoryMain = this.getChildCategoryMain(); DB.childCategoryBottom = this.getChildCategoryBottom(); 
		DB.infoList = this.getInfoList(); DB.infoListTop = this.getInfoListTop(); DB.infoListMain = this.getInfoListMain(); DB.infoListBottom = this.getInfoListBottom(); 
		DB.infoDetail = this.getInfoDetail(); DB.infoDetailTop = this.getInfoDetailTop(); DB.infoDetailMain = this.getInfoDetailMain(); DB.infoDetailBottom = this.getInfoDetailBottom(); 
		DB.customHtml = this.getCustomHtml(); DB.customHtmlTop = this.getCustomHtmlTop(); DB.customHtmlMain = this.getCustomHtmlMain(); DB.customHtmlBottom = this.getCustomHtmlBottom();
		DB.publishView = this.getPublishView(); DB.publishTop = this.getPublishTop(); DB.publishMain = this.getPublishMain(); DB.publishBottom = this.getPublishBottom(); 
	},
});
