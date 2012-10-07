Ext.define("Project.controller.213.mainViewController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			homeView : "homeView",
			mainContainer : "mainContainer",
			mainView_213 : "mainView_213",
			detailView_213 : "detailView_213",
			operateActionSheet_213 : "operateActionSheet_213",
			
			mainList_213 : "#mainList_213",
			prevPageBtnAtMainView_213 : "#prevPageBtnAtMainView_213",
			operateBtnAtMainView_213 : "#operateBtnAtMainView_213",
			nextPageBtnAtMainView_213 : "#nextPageBtnAtMainView_213",
		},
		control : {
			mainList_213 : {
				itemtap : "onMainList_213_ItemTap",
			},
			prevPageBtnAtMainView_213 : {
				tap : "onPrevPageBtnAtMainView_213_Tap",
			},
			operateBtnAtMainView_213 : {
				tap : "onOperateBtnAtMainView_213_Tap",
			},
			nextPageBtnAtMainView_213 : {
				tap : "onNextPageBtnAtMainView_213_Tap",
			},
		},
	},	
	launch : function () {
		this.pageNum = 1;
		this.rangeFlag = 365;
		this.mainContainer = this.getMainContainer();
		this.detailView_213 = this.getDetailView_213();
		this.operateActionSheet_213 = this.getOperateActionSheet_213();
		this.mainStore_213 = Ext.getStore("mainStore_213");
	},
	goBack : function() {
		setActivatedController(this.getApplication().getController("home.mainViewController"));
		this.mainContainer.setActiveItem(this.homeView);	
	},
	reloadStore : function (callback) {
		this.mainStore_213.setProxy({
			type : "jsonp",
			url : Website.serverUrl + "buy/buy.jsp?buyPageNum=" + this.pageNum + "&range=" + this.rangeFlag,
		});
		if (callback)
		{
			this.mainStore_213.load({
				callback : function (records, operation, success, eOpts) {
					if (records.length == 0 && this.pageNum != 1) {
						this.pageNum = this.pageNum - 1;
					}
				}
			});
		}
		else
		{
			this.mainStore_213.load();
		}
	},
	onMainList_213_ItemTap : function (list, index, e, eOpts) {
		Ext.Ajax.request({
			url : Website.serverUrl + "/Server/itemTaped.jsp?id=" + list.getStore().getAt(index).get("id"),
			method : "POST",
		});
		this.detailView_213.setHtml(
			"<div class = \"detail_title\">" + list.getStore().getAt(index).get("title") + "</div>" +
			"<div class = \"detail_datetime\">" + list.getStore().getAt(index).get("publishtime") + "</div>" +
			"<div class = \"supply_content\">价格：" + list.getStore().getAt(index).get("price") + "</div>" +
			"<div class = \"supply_content\">地区：" + list.getStore().getAt(index).get("area") + "</div>" +
			"<div class = \"supply_content\">有效时间：" + list.getStore().getAt(index).get("validtime") + "</div>" +
			"<div class = \"supply_content\">发布者：" + list.getStore().getAt(index).get("publisher") + "</div>" +
			"<div class = \"supply_content\">联系方式：" + list.getStore().getAt(index).get("telephone") + "</div>" +
			"<div class = \"supply_content\">浏览次数：" + list.getStore().getAt(index).get("sharedtimes") + "</div>" +
			"<div class=\"detail_content\">" + list.getStore().getAt(index).get("content") + "</div>");
		setActivatedController(this.getApplication().getController("213.detailViewController"));
		this.mainContainer.setActiveItem(this.detailView_213);
	},
	onOperateBtnAtMainView_213_Tap : function () {
		setActivatedController(this.getApplication().getController("213.operateActionSheetController"));
		this.operateActionSheet_213.show();
	},
	onPrevPageBtnAtMainView_213_Tap : function () {
		if (this.pageNum != 1) {
			this.pageNum = this.pageNum - 1;
			this.reloadStore();
		}
	},
	onNextPageBtnAtMainView_213_Tap : function () {
		this.pageNum = this.pageNum + 1;
		this.reloadStore(true);
	},
});
