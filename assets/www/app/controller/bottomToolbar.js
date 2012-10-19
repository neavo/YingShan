Ext.define("Project.controller.bottomToolbar", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			updateBtn : "#updateBtn",
			aboutBtn : "#aboutBtn",
			backBtn : "#backBtn",
		},
		control : {
			updateBtn : {
				tap : "onUpdateBtnTap",
			},
			aboutBtn : {
				tap : "onAboutBtnTap",
			},
			backBtn : {
				tap : "onBackBtnTap",
			},
		},
	},
	onUpdateBtnTap : function () {
		Ext.Msg.alert("掌上 • 英山 v2.0", "当前已是最新版本！");
	},
	onAboutBtnTap : function () {
		Ext.Msg.alert("掌上 • 英山 v2.0", "版权信息：中国电信英山分公司<br>协办单位：英山县人民政府　　<br>　　英山县科技局<br>　　英山县广电局<br>　　英山县茶叶办<br>　　英山县卫生局<br>　　英山县旅游局<br>　　英山县招商局");
	},
	onBackBtnTap : function () {
		DB.activatedController.goBack();
	},
});
