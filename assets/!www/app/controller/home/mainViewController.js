Ext.define("Project.controller.home.mainViewController", {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			adCarousel : "#adCarousel",
			updateBtnAtHomeView : "#updateBtnAtHomeView",
			backBtnAtHomeView : "#backBtnAtHomeView",
			aboutBtnAtAgriNewsView : "#aboutBtnAtAgriNewsView",
		},
		control : {
			updateBtnAtHomeView : {
				tap : "onUpdateBtnAtHomeViewTap",
			},
			backBtnAtHomeView : {
				tap : "onBackBtnAtHomeViewTap",
			},
			aboutBtnAtAgriNewsView : {
				tap : "onAboutBtnAtAgriNewsViewTap",
			},
		},
	},
	launch : function () {
		var t = 0;
		var adCarousel = this.getAdCarousel();
		setActivatedController(this);
		setInterval(function () {
			if (t == 5) {
				t = 0;
			} else {
				t = t + 1;
			}	
		adCarousel.setActiveItem(t);
		}, 5000);
	},
	goBack : function () {
		Ext.Msg.confirm("掌上 • 英山 v1.0.0", "确定退出“掌上 • 英山”？", function (buttonId, value, opt) {
			if (buttonId == "yes") {
				navigator.app.exitApp();
			}
		});
	},
	onUpdateBtnAtHomeViewTap : function () {
		Ext.Msg.alert("掌上 • 英山 v1.0.0", "当前已是最新版本！");
	},
	onBackBtnAtHomeViewTap : function () {
		this.goBack();
	},
	onAboutBtnAtAgriNewsViewTap : function () {
		Ext.Msg.alert("掌上 • 英山 v1.0.0", "版权信息：&nbsp黄冈市英山县政府&nbsp<br>协办单位：&nbsp中国电信英山分公司&nbsp&nbsp<br>技术支持：武汉理工大学计算机学院");
	},
});
