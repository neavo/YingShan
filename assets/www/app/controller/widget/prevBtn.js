Ext.define("Project.controller.widget.prevBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			prevBtn : "prevBtn",
		},
		control : {
			prevBtn : {
				tap : "onPrevBtnTap",
			},
		},
	},
	onPrevBtnTap : function () {
		if (currInfoPageNum == 1) {
			Ext.Msg.alert(DB.versionInfo, "已是第一页！");
		} else {
			currInfoPageNum = currInfoPageNum - 1;
			Ext.getStore("mainStore").setProxy({
				type : "jsonp",
				url : Website.serverUrl + Website.infoScriptUrl + DB.activatedCategory + "&infoPageNum=" + currInfoPageNum,
			});
			Ext.getStore("mainStore").load();
		};
	},
});
