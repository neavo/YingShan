Ext.define("Project.controller.publishView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("publish", "childCategory");
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
