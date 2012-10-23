Ext.define("Project.controller.widget.resetBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			resetBtn : "resetBtn",
			
			titleTextFiled : "#titleTextFiled",
			publisherTextFiled : "#publisherTextFiled",
			contactTextFiled : "#contactTextFiled",
			contentTextFiled : "#contentTextFiled",
			publishIdTextFiled : "#publishIdTextFiled",
		},
		control : {
			resetBtn : {
				tap : "onResetBtnTap",
			},
		},
	},
	launch : function () {
		DB.titleTextFiled = this.getTitleTextFiled();
		DB.publisherTextFiled = this.getPublisherTextFiled();
		DB.contactTextFiled = this.getContactTextFiled();
		DB.contentTextFiled = this.getContentTextFiled();
		DB.publishIdTextFiled = this.getPublishIdTextFiled();
	},
	onResetBtnTap : function () {
		DB.titleTextFiled.setValue("");
		DB.publisherTextFiled.setValue("");
		DB.contactTextFiled.setValue("");
		DB.contentTextFiled.setValue("");
		DB.publishIdTextFiled.setValue("");
		DoAlert("表单已重置！");
	},
});
