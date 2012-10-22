Ext.define("Project.controller.customHtml", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoAnim();
		DB.customHtmlTop.hide();
		DB.customHtmlMain.hide();
		DB.customHtmlBottom.hide();
		DB.childCategoryTop.show();
		DB.childCategoryMain.show();
		DB.childCategoryBottom.show();
		setActivatedController(this.getApplication().getController("childCategory"));
	},
});
