Ext.define("Project.controller.info.mainViewController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			homeView : "homeView",
			mainContainer : "mainContainer",
			infoDetailView : "infoDetailView",
			
			prevPageBtnAtInfoMainView : "#prevPageBtnAtInfoMainView",
			backBtnAtInfoMainView : "#backBtnAtInfoMainView",
			nextPageBtnAtInfoMainView : "#nextPageBtnAtInfoMainView",
			
			mainListAtInfoMainView : "#mainListAtInfoMainView",
		},
		control : {
			prevPageBtnAtInfoMainView : {
				tap : "onPrevPageBtnAtInfoMainViewTap",
			},
			backBtnAtInfoMainView : {
				tap : "onBackBtnAtInfoMainViewTap",
			},
			nextPageBtnAtInfoMainView : {
				tap : "onNextPageBtnAtInfoMainViewTap",
			},
			mainListAtInfoMainView : {
				itemtap : "onMainListAtInfoMainViewItemTap",
			},
		},
	},
	// 初始化
	launch : function () {
		this.homeView = this.getHomeView();
		this.mainContainer = this.getMainContainer();
		this.infoDetailView = this.getInfoDetailView();
	},
	// 响应返回键
	goBack : function () {
		setActivatedController(this.getApplication().getController("home.mainViewController"));
		this.mainContainer.setActiveItem(this.homeView);
	},
	// 翻页时重载数据
	reloadStore : function (callback) {
		DB.activatedStore.setProxy({
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + DB.activatedCategory + "&infoPageNum=" + infoPageNum,
		});
		if (callback) {
			DB.activatedStore.load({
				callback : function (records, operation, success, eOpts) {
					if (records.length == 0 && infoPageNum > 2) {
						infoPageNum = infoPageNum - 1;
						DB.activatedStore.load();
					}
				}
			});
		} else {
			DB.activatedStore.load();
		}
	},
	// 上一页
	onPrevPageBtnAtInfoMainViewTap : function () {
		if (infoPageNum == 1) {
			Ext.Msg.alert("掌上 • 英山 v1.0.0", "已是第一页！");
		} else {
			infoPageNum = infoPageNum - 1;
			this.reloadStore();
		}
	},
	// 返回
	onBackBtnAtInfoMainViewTap : function () {
		this.goBack();
	},
	// 下一页
	onNextPageBtnAtInfoMainViewTap : function () {
		infoPageNum = infoPageNum + 1;
		this.reloadStore(true);
	},
	// 点击列表条目
	onMainListAtInfoMainViewItemTap : function (list, index, e, eOpts) {
		this.infoDetailView.setHtml(
			"<div class = infoDetailTitle><b>" + list.getStore().getAt(index).get("title") + "</b></div>"
			 + "<div class = infoDetailDataTime>" + list.getStore().getAt(index).get("datetime") + "</div>"
			 + "<div class = infoDetailDataTime>" + "来源：" + list.getStore().getAt(index).get("publisher") + "</div>"
			 + "<hr width = 100% size = 2 color = #000000 align = center noshade>"
			 + "<div class = infoDetailContent>" + list.getStore().getAt(index).get("content") + "</div>");
		setActivatedController(this.getApplication().getController("info.detailViewController"));
		this.mainContainer.setActiveItem(this.infoDetailView);
	},
});
