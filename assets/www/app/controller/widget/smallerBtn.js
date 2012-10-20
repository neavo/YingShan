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
	onSmallerBtnTap : function () {
		switch (DB.scaleFlag) {
		case -2 :
			Ext.Msg.alert(DB.versionInfo, "当前已缩放至最小！");
			break;
		case -1 :
			DB.infoDetailView.setHtml(DB.infoDetailView.getHtml().replace("infoDetailContentSmall", "infoDetailContentSmaller"));
			DB.scaleFlag = DB.scaleFlag - 1;
			break;
		case 0 :
			DB.infoDetailView.setHtml(DB.infoDetailView.getHtml().replace("infoDetailContentNormal", "infoDetailContentSmall"));
			DB.scaleFlag = DB.scaleFlag - 1;
			break;
		case 1 :
			DB.infoDetailView.setHtml(DB.infoDetailView.getHtml().replace("infoDetailContentBig", "infoDetailContentNormal"));
			DB.scaleFlag = DB.scaleFlag - 1;
			break;
		case 2 :
			DB.infoDetailView.setHtml(DB.infoDetailView.getHtml().replace("infoDetailContentBigger", "infoDetailContentBig"));
			DB.scaleFlag = DB.scaleFlag - 1;
			break;
		default:
			break;
		};
	},
});
