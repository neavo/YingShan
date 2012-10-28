Ext.define("Project.controller.container.infoListMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			infoListMain : "infoListMain",
		},
		control : {
			infoListMain : {
				itemtap : "onInfoListMainItemTap",
			},
		},
	},
	launch : function () {
		DB.infoListMain.getScrollable().getScroller().on("scrollend", function (scroller, x, y) {
			if (y <= scroller.minPosition.y) {
				if (currInfoPageNum == 1) {
					Ext.Msg.alert(DB.versionInfo, "已是第一页！");
				} else {
					currInfoPageNum = currInfoPageNum - 1;
					Ext.getStore("mainStore").setProxy({
						type : "jsonp",
						url : Website.serverUrl + "Server/info.jsp?categoryid=" + DB.activatedCategory + "&infoPageNum=" + currInfoPageNum,
					});
					Ext.getStore("mainStore").load();
				};
			} else if (y >= scroller.maxPosition.y) {
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
			};
		});
	},
	onInfoListMainItemTap : function (list, index, e, eOpts) {
		DoSwitch("infoList", "infoDetail");
		if (list.getStore().getAt(index).get("videourl") != "" && list.getStore().getAt(index).get("videourl").toLowerCase() != "null") {
			DB.videoUrl = list.getStore().getAt(index).get("videourl");
			DB.scaleFlag = 0;
			DB.infoDetailMain.setHtml(
				"<div class = infoDetailTitle><b>" + list.getStore().getAt(index).get("title") + "</b></div>"
				 + "<div class = infoDetailDataTime>" + list.getStore().getAt(index).get("datetime") + "</div>"
				 + "<div class = infoDetailDataTime>" + "来源：" + list.getStore().getAt(index).get("publisher") + "</div>"
				 + "<hr width = 100% size = 2 color = #000000 align = center noshade>"
				 + "<center><input class= \"palyVideo\"  type =\"button\" onclick=\"playVideo();\" /></center>"
				 + "<div class = infoDetailContentNormal>" + list.getStore().getAt(index).get("content") + "</div>");
		} else {
			DB.scaleFlag = 0;
			DB.infoDetailMain.setHtml(
				"<div class = infoDetailTitle><b>" + list.getStore().getAt(index).get("title") + "</b></div>"
				 + "<div class = infoDetailDataTime>" + list.getStore().getAt(index).get("datetime") + "</div>"
				 + "<div class = infoDetailDataTime>" + "来源：" + list.getStore().getAt(index).get("publisher") + "</div>"
				 + "<hr width = 100% size = 2 color = #000000 align = center noshade>"
				 + "<div class = infoDetailContentNormal>" + list.getStore().getAt(index).get("content") + "</div>");
		};
		setActivatedController(this.getApplication().getController("infoDetail"));
	},
});
