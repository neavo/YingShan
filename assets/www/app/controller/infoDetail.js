Ext.define("Project.controller.infoDetail", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("infoDetail", "infoList");
		setActivatedController(this.getApplication().getController("infoList"));
	},
});
