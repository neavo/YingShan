Ext.define("Project.controller.widget.biggerBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			biggerBtn : "biggerBtn",
		},
		control : {
			biggerBtn : {
				tap : "onBiggerBtnTap",
			},
		},
	},
	onBiggerBtnTap : function () {},
});
