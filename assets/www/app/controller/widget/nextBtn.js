Ext.define("Project.controller.widget.nextBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			nextBtn : "nextBtn",
		},
		control : {
			nextBtn : {
				tap : "onNextBtnTap",
			},
		},
	},
	onNextBtnTap : function () {
		currInfoPageNum = currInfoPageNum + 1;
		Ext.getStore("mainStore").setProxy({
			type : "jsonp",
			url : Website.serverUrl + "Server/info.jsp?categoryid=" + DB.activatedCategory + "&infoPageNum=" + currInfoPageNum,
		});
		Ext.getStore("mainStore").load({
			callback : function (records, operation, success, eOpts) {
				if (records.length == 0) {
					currInfoPageNum = lastInfoPageNum + 1;
				} else {
					lastInfoPageNum = currInfoPageNum;
				};
			},
		});
	},
});
