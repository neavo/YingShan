Ext.define("Project.controller.childCategory", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoAnim();
		DB.childCategoryTop.hide();
		DB.childCategoryMain.hide();
		DB.childCategoryBottom.hide();
		DB.homeTop.show();
		DB.homeMain.show();
		DB.homeBottom.show();
		setActivatedController(this.getApplication().getController("homeView"));
	},
});
