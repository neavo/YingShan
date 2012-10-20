Ext.define("Project.controller.init", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			homeView : "homeView",
			childCategoryView : "childCategoryView",
			infoDetailView : "infoDetailView",
			mainContainer : "mainContainer",
		},
		control : {},
	},
	launch : function () {
		DB.homeView = this.getHomeView();
		DB.childCategoryView = this.getChildCategoryView();
		DB.infoDetailView = this.getInfoDetailView();
		DB.mainContainer = this.getMainContainer();
	},
});
