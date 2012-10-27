Ext.define("Project.controller.customHtml", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("customHtml", "childCategory");
		setActivatedController(this.getApplication().getController("childCategory"));
	},
});
