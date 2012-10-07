Ext.define("Project.controller.213.detailViewController", {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			mainContainer : "mainContainer",
			mainView_213 : "mainView_213",
			
			backBtnAtDetailView_213 : "#backBtnAtDetailView_213",
		},
		control : {
			backBtnAtDetailView_213 : {
				tap : "onBackBtnAtDetailView_213_Tap",
			},
		},
	},	
	launch : function () {
		this.mainContainer = this.getMainContainer();
		this.mainView_213 = this.getMainView_213();
	},
	goBack : function() {
		setActivatedController(this.getApplication().getController("213.mianViewController"));
		this.mainContainer.setActiveItem(this.mainView_213);	
	},
	onBackBtnAtDetailView_213_Tap : function () {
		this.goBack();
	},
});
