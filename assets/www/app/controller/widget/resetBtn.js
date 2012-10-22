Ext.define("Project.controller.widget.resetBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			resetBtn : "resetBtn",
			
			titleTextFiled : "#titleTextFiled",
			publisherTextFiled : "#publisherTextFiled",
			contactTextFiled : "#contactTextFiled",
			contentTextFiled : "#contentTextFiled",
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
	},
	onResetBtnTap : function () {
		DB.titleTextFiled.setValue("");
		DB.publisherTextFiled.setValue("");
		DB.contactTextFiled.setValue("");
		DB.contentTextFiled.setValue("");
		Ext.Msg.alert(DB.versionInfo, "表单已重置！");
	},
});
