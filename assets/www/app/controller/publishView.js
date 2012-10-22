Ext.define("Project.controller.publishView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoAnim();
		DB.publishTop.hide();
		DB.publishMain.hide();
		DB.publishBottom.hide();
		DB.childCategoryTop.show();
		DB.childCategoryMain.show();
		DB.childCategoryBottom.show();
		setActivatedController(this.getApplication().getController("childCategory"));
	},
});
