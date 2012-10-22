Ext.define("Project.controller.homeView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		setActivatedController(this);
	},
	goBack : function () {
		DB.mainContainer.hide();
		Ext.Msg.confirm(DB.versionInfo, "确定退出“掌上 • 英山”？", function (buttonId, value, opt) {
			if (buttonId == "yes") {
				navigator.app.exitApp();
			}
			else
			{
				DB.mainContainer.show();
			};
		});
	},
});
