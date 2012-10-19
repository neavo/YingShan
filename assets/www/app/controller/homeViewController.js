Ext.define("Project.controller.homeViewController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			adCarousel : "#adCarousel",
		},
		control : {},
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
		Ext.Msg.confirm("掌上 • 英山 v2.0", "确定退出“掌上 • 英山”？", function (buttonId, value, opt) {
			if (buttonId == "yes") {
				navigator.app.exitApp();
			}
		});
	},
});
