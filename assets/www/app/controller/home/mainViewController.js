Ext.define("Project.controller.home.mainViewController", {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			adCarousel : "#adCarousel",
			updateBtn : "#updateBtn",
			aboutBtn : "#aboutBtn",
		},
		control : {
			updateBtn : {
				tap : "onUpdateBtnTap",
			},
			aboutBtn : {
				tap : "onAboutBtnTap",
			},
		},
	},
	launch : function () {
		var t = 0;
		var adCarousel = this.getAdCarousel();
		setActivatedController(this);
		setInterval(function () {
			if (t == 3) {
				t = 0;
			} else {
				t = t + 1;
			}	
		adCarousel.setActiveItem(t);
		}, 5000);
	},
	goBack : function () {
		Ext.Msg.confirm("掌上 • 英山 v2.0.1", "确定退出“掌上 • 英山”？", function (buttonId, value, opt) {
			if (buttonId == "yes") {
				navigator.app.exitApp();
			}
		});
	},
	onUpdateBtnTap : function () {
		Ext.Msg.alert("掌上 • 英山 v2.0.1", "当前已是最新版本！");
	},
	onAboutBtnTap : function () {
		Ext.Msg.alert("掌上 • 英山 v2.0.1", "版权信息：&nbsp黄冈市英山县政府&nbsp<br>协办单位：&nbsp中国电信英山分公司&nbsp&nbsp<br>技术支持：武汉理工大学计算机学院");
	},
});
