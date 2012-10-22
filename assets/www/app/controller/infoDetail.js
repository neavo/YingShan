Ext.define("Project.controller.infoDetail", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoAnim();
		DB.infoDetailTop.hide();
		DB.infoDetailMain.hide();
		DB.infoDetailBottom.hide();
		DB.infoListTop.show();
		DB.infoListMain.show();
		DB.infoListBottom.show();
		setActivatedController(this.getApplication().getController("infoList"));
	},
});
