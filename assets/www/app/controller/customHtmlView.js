Ext.define("Project.controller.customHtmlView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",
			homeView : "homeView",
		},
		control : {},
	},
	launch : function () {
		this.mainContainer = this.getMainContainer();
		this.homeView = this.getHomeView();
	},
	goBack : function () {
		setActivatedController(this.getApplication().getController("homeViewController"));
		this.mainContainer.setActiveItem(this.homeView);
	},
});
