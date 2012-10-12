Ext.define("Project.controller.info.detailViewController", {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			mainContainer : "mainContainer",
			infoMainView : "infoMainView",
			
			backBtnAtInfoDetailView : "#backBtnAtInfoDetailView",
		},
		control : {
			backBtnAtInfoDetailView : {
				tap : "onBackBtnAtInfoDetailViewTap",
			},
		},
	},
	launch : function () {
		this.mainContainer = this.getMainContainer();
		this.infoMainView = this.getInfoMainView();
	},
	goBack : function()
	{
		setActivatedController(this.getApplication().getController("info.mainViewController"));
		this.mainContainer.setActiveItem(this.infoMainView);		
	},
	onBackBtnAtInfoDetailViewTap : function () {
		this.goBack();
	},
});
