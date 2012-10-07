Ext.define("Project.controller.home.mainViewController", {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			backBtnAtHomeView : "#backBtnAtHomeView",
			aboutBtnAtAgriNewsView : "#aboutBtnAtAgriNewsView",
		},
		control : {
			backBtnAtHomeView : {
				tap : "onBackBtnAtHomeViewTap",
			},
			aboutBtnAtAgriNewsView : {
				tap : "onAboutBtnAtAgriNewsViewTap",
			},
		},
	},
	launch : function () {
		setActivatedController(this);
	},
	goBack : function () {
		Ext.Msg.confirm("提示", "确定退出“烟草通”？", function (buttonId, value, opt) {
			if (buttonId == "yes") {
				navigator.app.exitApp();
			}
		});
	},
	onBackBtnAtHomeViewTap : function () {
		this.goBack();
	},
	onAboutBtnAtAgriNewsViewTap : function () {
		Ext.Msg.alert("烟草通 v1.0.0", "版权信息：&nbsp中国电信恩施分公司&nbsp<br>协办单位：&nbsp恩施州烟草专卖局&nbsp&nbsp<br>技术支持：武汉理工大学计算机学院");
	},
});
