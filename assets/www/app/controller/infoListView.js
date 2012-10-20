Ext.define("Project.controller.infoListView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainListAtInfoMainView : "#mainListAtInfoMainView",
		},
		control : {
			mainListAtInfoMainView : {
				itemtap : "onMainListAtInfoMainViewItemTap",
			},
		},
	},
	// 响应返回键
	goBack : function () {
		setActivatedController(this.getApplication().getController("childCategoryController"));
		DB.mainContainer.setActiveItem(DB.childCategoryView);
	},
	// 点击列表条目
	onMainListAtInfoMainViewItemTap : function (list, index, e, eOpts) {
		if (list.getStore().getAt(index).get("videourl") != "" && list.getStore().getAt(index).get("videourl").toLowerCase() != "null") {
			DB.videoUrl = list.getStore().getAt(index).get("videourl");
			DB.scaleFlag = 0;
			DB.infoDetailView.setHtml(
				"<div class = infoDetailTitle><b>" + list.getStore().getAt(index).get("title") + "</b></div>"
				 + "<div class = infoDetailDataTime>" + list.getStore().getAt(index).get("datetime") + "</div>"
				 + "<div class = infoDetailDataTime>" + "来源：" + list.getStore().getAt(index).get("publisher") + "</div>"
				 + "<hr width = 100% size = 2 color = #000000 align = center noshade>"
				 + "<center><input class= \"palyVideo\"  type =\"button\" onclick=\"playVideo();\" /></center>"
				 + "<div class = infoDetailContentNormal>" + list.getStore().getAt(index).get("content") + "</div>");
		} else {
			DB.scaleFlag = 0;
			DB.infoDetailView.setHtml(
				"<div class = infoDetailTitle><b>" + list.getStore().getAt(index).get("title") + "</b></div>"
				 + "<div class = infoDetailDataTime>" + list.getStore().getAt(index).get("datetime") + "</div>"
				 + "<div class = infoDetailDataTime>" + "来源：" + list.getStore().getAt(index).get("publisher") + "</div>"
				 + "<hr width = 100% size = 2 color = #000000 align = center noshade>"
				 + "<div class = infoDetailContentNormal>" + list.getStore().getAt(index).get("content") + "</div>");
		};
		setActivatedController(this.getApplication().getController("infoDetailView"));
		DB.mainContainer.setActiveItem(DB.infoDetailView);
	},
});
