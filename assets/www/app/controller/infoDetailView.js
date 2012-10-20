Ext.define("Project.controller.infoDetailView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",
			infoMainView : "infoMainView",
		},
		control : {},
	},
	launch : function () {
		this.mainContainer = this.getMainContainer();
		this.infoMainView = this.getInfoMainView();
	},
	goBack : function () {
		setActivatedController(this.getApplication().getController("infoListView"));
		this.mainContainer.setActiveItem(this.infoMainView);
	},
});
