Ext.define("Project.controller.212.detailViewController", {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			mainContainer : "mainContainer",
			mainView_212 : "mainView_212",
			
			backBtnAtDetailView_212 : "#backBtnAtDetailView_212",
		},
		control : {
			backBtnAtDetailView_212 : {
				tap : "onBackBtnAtDetailView_212_Tap",
			},
		},
	},	
	launch : function () {
		this.mainContainer = this.getMainContainer();
		this.mainView_212 = this.getMainView_212();
	},
	goBack : function() {
		setActivatedController(this.getApplication().getController("212.mianViewController"));
		this.mainContainer.setActiveItem(this.mainView_212);	
	},
	onBackBtnAtDetailView_212_Tap : function () {
		this.goBack();
	},
});
