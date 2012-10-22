Ext.define("Project.controller.infoList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoAnim();
		DB.infoListTop.hide();
		DB.infoListMain.hide();
		DB.infoListBottom.hide();
		DB.childCategoryTop.show();
		DB.childCategoryMain.show();
		DB.childCategoryBottom.show();
		setActivatedController(this.getApplication().getController("childCategory"));
	},
});
