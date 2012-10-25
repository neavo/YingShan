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
		DB.titleTextFiled.setValue("");
		DB.publisherTextFiled.setValue("");
		DB.contactTextFiled.setValue("");
		DB.contentTextFiled.setValue("");
		DB.publishIdTextFiled.setValue("");
		DB.categoryIdTextFiled.setValue("");
		document.getElementById("publishImage_1").src = "resources/icons/defaultImage.png";
		document.getElementById("imageStatus_1").innerHTML = "点击添加";
		setActivatedController(this.getApplication().getController("childCategory"));
	},
});
