Ext.define("Project.controller.infoListView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			homeView : "homeView",
			mainContainer : "mainContainer",
			infoDetailView : "infoDetailView",
			childCategoryView : "childCategoryView",
			
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
		this.childCategoryView = this.getChildCategoryView();
		this.infoDetailView = this.getInfoDetailView();
	},
	// 响应返回键
	goBack : function () {
		setActivatedController(this.getApplication().getController("childCategoryController"));
		this.mainContainer.setActiveItem(this.childCategoryView);
	},
	// 翻页时重载数据
	reloadStore : function (callback) {
		Ext.getStore("mainStore").setProxy({
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + DB.activatedCategory + "&infoPageNum=" + currInfoPageNum,
		});
		if (callback) {
			Ext.getStore("mainStore").load({
				callback : function (records, operation, success, eOpts) {
					if (records.length == 0) {
						currInfoPageNum = lastInfoPageNum + 1;
					} else {
						lastInfoPageNum = currInfoPageNum;
					}
				}
			});
		} else {
			Ext.getStore("mainStore").load();
		}
	},
	// 上一页
	onPrevPageBtnAtInfoMainViewTap : function () {
		if (currInfoPageNum == 1) {
			Ext.Msg.alert("掌上 • 英山 v2.0.1", "已是第一页！");
		} else {
			currInfoPageNum = currInfoPageNum - 1;
			this.reloadStore();
		}
	},
	// 返回
	onBackBtnAtInfoMainViewTap : function () {
		console.log(DB.activatedController);
		DB.activatedController.goBack();
	},
	// 下一页
	onNextPageBtnAtInfoMainViewTap : function () {
		currInfoPageNum = currInfoPageNum + 1;
		this.reloadStore(true);
	},
	// 点击列表条目
	onMainListAtInfoMainViewItemTap : function (list, index, e, eOpts) {
		if (list.getStore().getAt(index).get("videourl") != "" && list.getStore().getAt(index).get("videourl").toLowerCase() != "null") {
			DB.videoUrl = list.getStore().getAt(index).get("videourl");
			this.infoDetailView.setHtml(
				"<div class = infoDetailTitle><b>" + list.getStore().getAt(index).get("title") + "</b></div>"
				 + "<div class = infoDetailDataTime>" + list.getStore().getAt(index).get("datetime") + "</div>"
				 + "<div class = infoDetailDataTime>" + "来源：" + list.getStore().getAt(index).get("publisher") + "</div>"
				 + "<hr width = 100% size = 2 color = #000000 align = center noshade>"
				 + "<center><input class= \"palyVideo\"  type =\"button\" onclick=\"playVideo();\" /></center>"
				 + "<div class = infoDetailContent>" + list.getStore().getAt(index).get("content") + "</div>");
		} else {
			this.infoDetailView.setHtml(
				"<div class = infoDetailTitle><b>" + list.getStore().getAt(index).get("title") + "</b></div>"
				 + "<div class = infoDetailDataTime>" + list.getStore().getAt(index).get("datetime") + "</div>"
				 + "<div class = infoDetailDataTime>" + "来源：" + list.getStore().getAt(index).get("publisher") + "</div>"
				 + "<hr width = 100% size = 2 color = #000000 align = center noshade>"
				 + "<div class = infoDetailContent>" + list.getStore().getAt(index).get("content") + "</div>");
		};
		setActivatedController(this.getApplication().getController("infoDetailView"));
		this.mainContainer.setActiveItem(this.infoDetailView);
	},
});