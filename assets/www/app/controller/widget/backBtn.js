Ext.define("Project.controller.widget.backBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			backBtn : "backBtn",
		},
		control : {
			backBtn : {
				tap : "onBackBtnTap",
			},
		},
	},
	onBackBtnTap : function () {
		DB.activatedController.goBack();
	},
});
