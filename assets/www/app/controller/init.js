Ext.define("Project.controller.init", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			homeView : "homeView",
			mainContainer : "mainContainer",
		},
		control : {},
	},
	launch : function () {
		DB.mainContainer = this.getMainContainer();
		DB.homeView = this.getHomeView();
	},
});
