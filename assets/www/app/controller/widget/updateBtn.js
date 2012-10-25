Ext.define("Project.controller.widget.updateBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			updateBtn : "updateBtn",
		},
		control : {
			updateBtn : {
				tap : "onUpdateBtnTap",
			},
		},
	},
	onUpdateBtnTap : function () {
		DoAlert("当前已是最新版本！");
	},
});
