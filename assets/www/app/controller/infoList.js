Ext.define("Project.controller.infoList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("infoList", "childCategory", "childCategory");
	},
});
