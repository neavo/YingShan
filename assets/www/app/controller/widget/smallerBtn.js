Ext.define("Project.controller.widget.smallerBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			smallerBtn : "smallerBtn",
		},
		control : {
			smallerBtn : {
				tap : "onSmallerBtnTap",
			},
		},
	},
	onSmallerBtnTap : function () {},
});
